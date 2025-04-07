import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowDataUpdated'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import StraightLineEdge from './StraightLineEdge'; // Import StraightLineEdge component
import Popup from './RoundedBoxNode/Popup';
import Papa from 'papaparse';
import courseData from './courseData.csv';

const CollapsibleNodeFlowchart = ({ filter }) => {
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 768;
    const offsets = useMemo(() => ({
        Both: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 30, y: -40, zoom: 0.5 },
        COSI: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 40, y: -20, zoom: 0.5 },
        CL: isSmallScreen ? { x: 20, y: 20, zoom: 0.45 } : { x: 400, y: -30, zoom: 0.5 },
    }), [isSmallScreen]);

    const [zoomLevel, setZoomLevel] = useState(0.5);
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);
    const [PopupVisible, setPopupVisible] = useState(false); // State to manage the visibility of the popup
    const [popupData, setPopupData] = useState(null); // State to store the data for the popup
    const [courseDataParsed, setCourseDataParsed] = useState({});
    const [rfInstance, setRfInstance] = useState(null);

    // Called once when React Flow is ready
    const onInit = useCallback((instance) => {
        setRfInstance(instance);
        instance.fitView({ padding: 0.2 });
    }, []);

    useEffect(() => {
        fetch(courseData) // Ensure it's in 'public/data/' folder
            .then((response) => response.text())
            .then((csvText) => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const dataMap = results.data.reduce((acc, row) => {
                            acc[row.id.trim()] = row; // Ensure keys are clean
                            return acc;
                        }, {});
                        setCourseDataParsed(dataMap);
                    },
                });
            })
            .catch((error) => console.error(error));
    }, []);

    useEffect(() => {
        if (!rfInstance) return;
        if (offsets[filter]) {
            rfInstance.setViewport(offsets[filter]);
        }
    }, [filter, rfInstance, offsets]);

    useEffect(() => {

        if (!courseDataParsed || Object.keys(courseDataParsed).length === 0) return;

        try {
            const xSpacing = 200;
            const ySpacing = 200;
            const filteredNodes = initialNodes.filter((node) => {
                if (filter === 'Both') return true;
                return (
                    node.data.courseProgram === filter ||
                    node.data.courseProgram === 'Both'
                );
            });
            const nodesByLevel = filteredNodes.reduce((acc, node) => {
                if (!acc[node.level]) acc[node.level] = [];
                acc[node.level].push(node);
                return acc;
            }, {});
            const maxNodesInLevel = Math.max(
                ...Object.values(nodesByLevel).map((levelNodes) => levelNodes.length)
            );
            const positionedNodes = filteredNodes.map((node) => {
                const levelNodes = nodesByLevel[node.level];
                const index = levelNodes.indexOf(node);
                const customSpacingNodes = ['12', '232'];
                const customSpacing = customSpacingNodes.includes(node.id)
                    ? xSpacing * 1.5
                    : xSpacing;
                const totalWidth = (maxNodesInLevel - 1) * xSpacing;
                const xOffset = (totalWidth - (levelNodes.length - 1) * xSpacing) / 2;
                return {
                    ...node,
                    position: {
                        x: index * customSpacing + xOffset,
                        y: node.level * ySpacing,
                    },
                    positionAbsolute: true,
                };
            });
            setNodes(positionedNodes);
            calculateDefaultEdgePositions(filteredNodes, initialEdges);
            setHighlightedNodes(filteredNodes.map((n) => n.id));
            setHighlightedEdges(initialEdges.map((e) => e.id));
        } catch (e) {
            console.error(e);
        }
    }, [filter, courseDataParsed]);

    const calculateDefaultEdgePositions = (filteredNodes, edges) => {
        const updatedEdges = edges.map((edge) => {
            const parentEdges = edges.filter((e) => e.target === edge.target);
            const index = parentEdges.findIndex((e) => e.id === edge.id);
            const fraction = (index + 1) / (parentEdges.length + 1);
            return {
                ...edge,
                data: { ...edge.data, fraction },
            };
        });
        setEdges(updatedEdges);
    };

    const highlightPath = (nodeId) => {
        const pathNodes = new Set();
        const pathEdges = new Set();
        const findPaths = (currentNodeId) => {
            const currentNode = nodes.find((n) => n.id === currentNodeId);
            if (currentNode) {
                pathNodes.add(currentNode.id);
                const parentEdges = edges.filter((e) => e.target === currentNodeId);
                parentEdges.forEach((parentEdge) => {
                    pathEdges.add(parentEdge.id);
                    findPaths(parentEdge.source);
                });
            }
        };
        findPaths(nodeId);
        setHighlightedNodes(Array.from(pathNodes));
        setHighlightedEdges(Array.from(pathEdges));
    };

    const handleNodeClick = (event, node) => {
        highlightPath(node.id);
    };

    const handleMoreInfoClick = (node) => {
        const courseInfo = courseDataParsed[node.id];
        if (courseInfo) {
            setPopupData(courseInfo);
            setPopupVisible(true);
        } else {
            console.warn(`Course data for ${node.id} not found.`);
        }
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setPopupData(null);
    };

    // Function to Zoom In
    const zoomIn = () => {
        if (rfInstance && zoomLevel < 1.5) {
            const newZoom = zoomLevel + 0.1;
            setZoomLevel(newZoom);
            rfInstance.setViewport({ x: 0, y: 0, zoom: newZoom });
        }
    };

    // Function to Zoom Out
    const zoomOut = () => {
        if (rfInstance && zoomLevel > 0.5) {
            let newZoom = zoomLevel - 0.1;
            if (newZoom <= 0.5) {
                const defaultOffset = offsets[filter];
                setZoomLevel(defaultOffset.zoom);
                rfInstance.setViewport(defaultOffset);
            } else {
                setZoomLevel(newZoom);
                rfInstance.setViewport({ x: 0, y: 0, zoom: newZoom });
            }
        }
    };

    // // Function to Move Left
    // const moveLeft = () => {
    //     if (rfInstance) {
    //         const { x, y, zoom } = rfInstance.toObject();
    //         rfInstance.setViewport({ x: x + 50, y, zoom });
    //     }
    // };

    // // Function to Move Right
    // const moveRight = () => {
    //     if (rfInstance) {
    //         const { x, y, zoom } = rfInstance.toObject();
    //         rfInstance.setViewport({ x: x - 50, y, zoom });
    //     }
    // };

    return (
        <div className="h-screen relative">
            <div className="absolute top-4 left-4 z-10 bg-white p-1 shadow-md rounded flex space-x-1">
                <button onClick={zoomIn} className="bg-blue-500 text-white rounded px-2">
                    +
                </button>
                <button onClick={zoomOut} className="bg-blue-500 text-white rounded px-2">
                    -
                </button>
                {/* <button onClick={moveLeft} className="bg-blue-500 text-white rounded px-2">
                    &lt;
                </button>
                <button onClick={moveRight} className="bg-blue-500 text-white rounded px-2">
                    &gt;
                </button> */}
            </div>

            <ReactFlow
                onInit={onInit}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={false}
                minZoom={0.5}
                maxZoom={1.5}
                nodes={nodes.map((node) => ({
                    ...node,
                    data: {
                        ...node.data,
                        id: node.id,
                        isGrayscale: !highlightedNodes.includes(node.id),
                    },
                }))}
                edges={edges.map((edge) => ({
                    ...edge,
                    data: {
                        ...edge.data,
                        isGrayscale: !highlightedEdges.includes(edge.id),
                    },
                }))}
                onNodeClick={handleNodeClick}
                nodeTypes={{
                    custom: (props) => (
                        <RoundedBoxNode {...props} onMoreInfoClick={handleMoreInfoClick} />
                    ),
                }}
                edgeTypes={{
                    custom: (props) => <StraightLineEdge {...props} filter={filter} />,
                }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>

            <Popup visible={PopupVisible} onClose={handleClosePopup} data={popupData} />
        </div>
    );
};

export default CollapsibleNodeFlowchart;
