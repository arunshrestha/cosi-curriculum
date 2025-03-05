import React, { useState, useEffect, useCallback } from 'react';
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
            .catch((error) => console.error('Error loading CSV:', error));
    }, []);

    useEffect(() => {
        if (!rfInstance) return;

        const offsets = {
            Both: { x: -200, y: -80, zoom: 0.5 },
            COSI: { x: -100, y: -80, zoom: 0.5 },
            CL: { x: 550, y: -80, zoom: 0.5 },
        };

        if (offsets[filter]) {
            rfInstance.setViewport(offsets[filter]);
        }
    }, [filter, rfInstance]);

    useEffect(() => {
        try {
            const screenWidth = window.innerWidth;
            const xSpacing = screenWidth < 768 ? 130 : 200;
            const ySpacing = 200;

            // Filter nodes
            const filteredNodes = initialNodes.filter((node) => {
                if (filter === 'Both') return true;
                return (
                    node.data.courseProgram === filter ||
                    node.data.courseProgram === 'Both'
                );
            });

            // Group nodes by level
            const nodesByLevel = filteredNodes.reduce((acc, node) => {
                if (!acc[node.level]) acc[node.level] = [];
                acc[node.level].push(node);
                return acc;
            }, {});

            // Find the maximum number of nodes in any level
            const maxNodesInLevel = Math.max(
                ...Object.values(nodesByLevel).map((levelNodes) => levelNodes.length)
            );

            // Manually set positions
            const positionedNodes = filteredNodes.map((node) => {
                const levelNodes = nodesByLevel[node.level];
                const index = levelNodes.indexOf(node);

                // Specific condition for two particular nodes; replace xSpacing with customSpacing when returning x position
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

            // Reset highlighted sets
            setHighlightedNodes(filteredNodes.map((n) => n.id));
            setHighlightedEdges(initialEdges.map((e) => e.id));
        } catch (e) {
            console.error(e);
        }
    }, [filter]);

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

    return (
        <div className="h-screen">
            <ReactFlow
                onInit={onInit}
                panOnScroll
                defaultViewport={{ x: -200, y: -100, zoom: 0.5 }}
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
                edgeTypes={{ custom: (props) => <StraightLineEdge {...props} filter={filter} /> }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>

            <Popup
                visible={PopupVisible}
                onClose={handleClosePopup}
                data={popupData}
            />
        </div>
    );
};

export default CollapsibleNodeFlowchart;
