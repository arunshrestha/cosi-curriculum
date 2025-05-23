import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowDataUpdated';
import { nodeTypes } from './nodeTypes';
import { edgeTypes } from './edgeTypes';
import InfoModal from './modals/InfoModal';

const xSpacing = 200;
const ySpacing = 200;
const customSpacingNodes = ['12', '232'];

function getNodeStyle(state) {
    switch (state) {
        case "canTake":
            return { isGrayscale: false, state: "canTake" };
        case "taken":
            return { isGrayscale: false, state: "taken" };
        case "cannotTake":
        default:
            return { isGrayscale: true, state: "cannotTake" };
    }
}

// Utility: get all parent node ids for a node
function getParentIds(nodeId) {
    return initialEdges.filter(e => e.target === nodeId).map(e => e.source);
}

// Utility: get all child node ids for a node
function getChildIds(nodeId) {
    return initialEdges.filter(e => e.source === nodeId).map(e => e.target);
}

// Utility: recursively get all descendant node ids
function getAllDescendantIds(nodeId, visited = new Set()) {
    const children = getChildIds(nodeId);
    for (const child of children) {
        if (!visited.has(child)) {
            visited.add(child);
            getAllDescendantIds(child, visited);
        }
    }
    return visited;
}

// Compute node states based on which nodes are "taken"
function computeNodeStates(takenSet) {
    const states = {};
    for (const node of initialNodes) {
        const parentIds = getParentIds(node.id);
        if (takenSet.has(node.id)) {
            states[node.id] = "taken";
        } else if (parentIds.length === 0) {
            // Only nodes with no parents are canTake initially
            states[node.id] = "canTake";
        } else if (parentIds.every(pid => takenSet.has(pid))) {
            states[node.id] = "canTake";
        } else {
            states[node.id] = "cannotTake";
        }
    }
    return states;
}

function getDefaultOffsets(isSmallScreen) {
    return {
        Both: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 30, y: -40, zoom: 0.5 },
        COSI: isSmallScreen ? { x: -400, y: 30, zoom: 0.45 } : { x: 40, y: -20, zoom: 0.5 },
        CL: isSmallScreen ? { x: 20, y: 20, zoom: 0.45 } : { x: 400, y: -30, zoom: 0.5 },
    };
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

const NextClassesFlowchart = ({ filter, csvData }) => {
    // Set of node ids that are "taken"
    const [taken, setTaken] = useState(new Set());

    const screenWidth = window.innerWidth;
    const isSmallScreen = screenWidth < 768;
    const offsets = useMemo(() => getDefaultOffsets(isSmallScreen), [isSmallScreen]);
    const [zoomLevel, setZoomLevel] = useState(0.5);
    const [rfInstance, setRfInstance] = useState(null);

    const [moreInfoNodeId, setMoreInfoNodeId] = useState(null);

    // Compute node states based on taken set
    const nodeStates = useMemo(() => computeNodeStates(taken), [taken]);

    const onInit = useCallback((instance) => {
        setRfInstance(instance);
        instance.fitView({ padding: 0.2 });
    }, []);

    useEffect(() => {
        if (!rfInstance || !offsets[filter]) return;
        rfInstance.setViewport(offsets[filter]);
    }, [filter, rfInstance, offsets]);

    const handleNodeClick = useCallback((event, node) => {
        setTaken(prev => {
            const newSet = new Set(prev);

            if (nodeStates[node.id] === "canTake") {
                newSet.add(node.id);
            } else if (nodeStates[node.id] === "taken") {
                newSet.delete(node.id);
                // Remove all descendants from taken set (set them to cannotTake)
                const descendants = getAllDescendantIds(node.id);
                for (const descId of descendants) {
                    newSet.delete(descId);
                }
            }
            return newSet;
        });
    }, [nodeStates]);

    // Memoized node positioning and style
    const nodes = useMemo(() => {
        if (!csvData) return [];
        // Merge CSV data into nodes
        let merged = initialNodes.map((node) => ({
            ...node,
            data: {
                ...node.data,
                ...(csvData[node.id] || {}),
            },
        }));
        // Filter nodes BEFORE positioning
        merged = merged.filter((node) => {
            if (filter === 'Both') return true;
            return (
                node.data.courseProgram === filter ||
                node.data.courseProgram === 'Both'
            );
        });
        // Position nodes
        const nodesByLevel = merged.reduce((acc, node) => {
            if (!acc[node.level]) acc[node.level] = [];
            acc[node.level].push(node);
            return acc;
        }, {});
        const maxNodesInLevel = Math.max(
            ...Object.values(nodesByLevel).map(levelNodes => levelNodes.length)
        );
        return merged.map(node => {
            const levelNodes = nodesByLevel[node.level];
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
                data: {
                    ...node.data,
                    ...getNodeStyle(nodeStates[node.id]),
                    id: node.id,
                    setMoreInfoNodeId,
                },
            };
        });
    }, [filter, csvData, nodeStates]);

    // Memoized edge positioning and highlighting
    const edges = useMemo(() => {
        return initialEdges.map(edge => {
            const parentEdges = initialEdges.filter(e => e.target === edge.target);
            const index = parentEdges.findIndex(e => e.id === edge.id);
            const fraction = (index + 1) / (parentEdges.length + 1);
            return {
                ...edge,
                data: {
                    ...edge.data,
                    isGrayscale: false, // Keep edges bold always
                    fraction,
                },
            };
        });
    }, []);

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
            </div>
            {/* Legend */}
            <div className="absolute top-4 right-4 z-10 bg-white p-3 shadow-md rounded text-sm space-y-2">
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-6 h-4 border-4 border-[#ffe600] rounded"></span>
                    <span>Can Take</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-6 h-4 border-4 border-black rounded"></span>
                    <span>Taken</span>
                </div>
                <div className="flex items-center space-x-2">
                    <span className="inline-block w-6 h-4 bg-[#dadada] rounded"></span>
                    <span>Cannot Take</span>
                </div>
            </div>
            <ReactFlow
                nodes={nodes}
                edges={edges.map((edge) => ({
                    ...edge,
                    data: {
                        ...edge.data,
                        isGrayscale: false, // Keep edges grayscale
                    },
                }))}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onInit={onInit}
                minZoom={0.5}
                maxZoom={1.5}
                zoomOnScroll={false}
                zoomOnPinch={false}
                zoomOnDoubleClick={false}
                panOnScroll={false}
                panOnDrag={true}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
            {moreInfoNodeId && moreInfoNode && (
                <InfoModal onClose={() => setMoreInfoNodeId(null)} data={moreInfoNode.data} />
            )}
        </div>
    );
};

export default NextClassesFlowchart;