import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowDataUpdated';
import { nodeTypes } from './nodeTypes';
import { edgeTypes } from './edgeTypes';
import InfoModal from './modals/InfoModal';

// === Utility Functions ===
const xSpacing = 200;
const ySpacing = 200;
const customSpacingNodes = ['12', '232'];

function mergeAndFilterNodes(initialNodes, csvData, filter) {
    if (!csvData) return [];

    let merged = initialNodes.map((node) => ({
        ...node,
        data: {
            ...node.data,
            ...(csvData[node.id] || {}),
        },
    }));

    merged = merged.filter((node) => {
        if (filter === 'Both') return true;
        return (
            node.data.courseProgram === filter ||
            node.data.courseProgram === 'Both'
        );
    });

    const nodesByLevel = merged.reduce((acc, node) => {
        if (!acc[node.level]) acc[node.level] = [];
        acc[node.level].push(node);
        return acc;
    }, {});
    const maxNodesInLevel = Math.max(
        ...Object.values(nodesByLevel).map((levelNodes) => levelNodes.length)
    );

    return merged.map((node) => {
        const levelNodes = Array.isArray(nodesByLevel[node.level]) ? nodesByLevel[node.level] : [];
        const index = levelNodes.indexOf(node);
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
}

function computeEdges(initialEdges) {
    return initialEdges.map((edge) => {
        const parentEdges = initialEdges.filter((e) => e.target === edge.target);
        const index = parentEdges.findIndex((e) => e.id === edge.id);
        const fraction = (index + 1) / (parentEdges.length + 1);
        return {
            ...edge,
            data: {
                ...edge.data,
                fraction,
            },
        };
    });
}

function getDefaultOffsets(isSmallScreen) {
    return {
        Both: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 30, y: -40, zoom: 0.5 },
        COSI: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 40, y: -20, zoom: 0.5 },
        CL: isSmallScreen ? { x: 20, y: 20, zoom: 0.45 } : { x: 400, y: -30, zoom: 0.5 },
    };
}

// === Highlight and Zoom Logic (outside component) ===
function highlightPath(nodeId, nodes, edges, setHighlightedNodes, setHighlightedEdges) {
    const pathNodes = new Set();
    const pathEdges = new Set();
    function findPaths(currentNodeId) {
        const currentNode = nodes.find((n) => n.id === currentNodeId);
        if (currentNode) {
            pathNodes.add(currentNode.id);
            const parentEdges = edges.filter((e) => e.target === currentNodeId);
            parentEdges.forEach((parentEdge) => {
                pathEdges.add(parentEdge.id);
                findPaths(parentEdge.source);
            });
        }
    }
    findPaths(nodeId);
    setHighlightedNodes(Array.from(pathNodes));
    setHighlightedEdges(Array.from(pathEdges));
}

function zoomIn(rfInstance, zoomLevel, setZoomLevel) {
    if (rfInstance && zoomLevel < 1.5) {
        const newZoom = zoomLevel + 0.1;
        setZoomLevel(newZoom);
        rfInstance.setViewport({ x: 0, y: 0, zoom: newZoom });
    }
}

function zoomOut(rfInstance, zoomLevel, setZoomLevel, offsets, filter) {
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
}

// === Component ===
const PreRequisitesFlowchart = ({ filter, csvData }) => {
    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 768;
    const offsets = useMemo(() => getDefaultOffsets(isSmallScreen), [isSmallScreen]);

    const [zoomLevel, setZoomLevel] = useState(0.5);

    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);
    const [rfInstance, setRfInstance] = useState(null);
    const [moreInfoNodeId, setMoreInfoNodeId] = useState(null);


    useEffect(() => {
        if (!csvData) return;
        setHighlightedNodes(initialNodes.map((n) => n.id));
        setHighlightedEdges(initialEdges.map((e) => e.id));
    }, [csvData]);

    const nodes = useMemo(() => {
        return mergeAndFilterNodes(initialNodes, csvData, filter);
    }, [csvData, filter]);

    const edges = useMemo(() => {
        return computeEdges(initialEdges);
    }, []);

    const onInit = useCallback((instance) => {
        setRfInstance(instance);
        instance.fitView({ padding: 0.2 });
    }, []);

    useEffect(() => {
        if (!rfInstance || !offsets[filter]) return;
        rfInstance.setViewport(offsets[filter]);
    }, [filter, rfInstance, offsets]);

    const handleNodeClick = useCallback((event, node) => {
        highlightPath(node.id, nodes, edges, setHighlightedNodes, setHighlightedEdges);
        //setMoreInfoNodeId(node.id); // keep modal logic
    }, [nodes, edges]);

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

    const moreInfoNode = nodes.find((node) => node.id === moreInfoNodeId);

    return (
        <div
            className="relative"
            style={{ height: '100vh', width: '100%', minHeight: 400 }}
        >
            <div className="absolute top-4 left-4 z-10 bg-white p-1 shadow-md rounded flex space-x-1">
                <button
                    onClick={() => zoomIn(rfInstance, zoomLevel, setZoomLevel)}
                    className="bg-blue-500 text-white rounded px-2"
                >
                    +
                </button>
                <button
                    onClick={() => zoomOut(rfInstance, zoomLevel, setZoomLevel, offsets, filter)}
                    className="bg-blue-500 text-white rounded px-2"
                >
                    -
                </button>
                {/* <button onClick={moveLeft} className="bg-blue-500 text-white rounded px-2">
                    &lt;
                </button>
                <button onClick={moveRight} className="bg-blue-500 text-white rounded px-2">
                    &gt;
                </button> */}
            </div>

            {csvData && nodes.length > 0 && edges.length > 0 ? (
                <ReactFlow
                    key={`${filter}-${nodes.length}-${edges.length}`}
                    onInit={onInit}
                    zoomOnScroll={false}
                    zoomOnPinch={false}
                    zoomOnDoubleClick={false}
                    panOnScroll={false}
                    panOnDrag={true}
                    minZoom={0.5}
                    maxZoom={1.5}
                    nodes={nodes.map((node) => ({
                        ...node,
                        data: {
                            ...node.data,
                            id: node.id,
                            isGrayscale: !highlightedNodes.includes(node.id),
                            setMoreInfoNodeId,
                        },
                    }))}
                    edges={edges.map((edge) => ({
                        ...edge,
                        data: {
                            ...edge.data,
                            isGrayscale: !highlightedEdges.includes(edge.id),
                        },
                        filter: filter,
                    }))}
                    onNodeClick={handleNodeClick}
                    nodeTypes={nodeTypes}
                    edgeTypes={edgeTypes}
                >
                    <MiniMap />
                    <Controls />
                    <Background />
                </ReactFlow>
            ) : (
                <div className="flex items-center justify-center h-full w-full">
                    Loading...
                </div>
            )}
            {moreInfoNodeId && moreInfoNode && (
                <InfoModal onClose={() => setMoreInfoNodeId(null)} data={moreInfoNode.data} />
            )}
        </div>
    );
};

export default PreRequisitesFlowchart;