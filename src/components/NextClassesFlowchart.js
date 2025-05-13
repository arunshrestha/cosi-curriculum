import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowDataUpdated';
import { nodeTypes } from './nodeTypes';
import { edgeTypes } from './edgeTypes';

const xSpacing = 200;
const ySpacing = 200;
const customSpacingNodes = ['12', '232'];

function getNodeStyle(state) {
    switch (state) {
        case "canTake":
            return { isGrayscale: false, color: "blue" };
        case "taken":
            return { isGrayscale: false, color: "green" };
        case "cannotTake":
        default:
            return { isGrayscale: true, color: "gray" };
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

const NextClassesFlowchart = () => {
    // Set of node ids that are "taken"
    const [taken, setTaken] = useState(new Set());

    // Compute node states based on taken set
    const nodeStates = useMemo(() => computeNodeStates(taken), [taken]);

    // Highlight all nodes and edges (optional, or you can use for visual cues)
    //const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);

    useEffect(() => {
        //setHighlightedNodes(initialNodes.map(n => n.id));
        setHighlightedEdges(initialEdges.map(e => e.id));
    }, []);

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
        const nodesByLevel = initialNodes.reduce((acc, node) => {
            if (!acc[node.level]) acc[node.level] = [];
            acc[node.level].push(node);
            return acc;
        }, {});
        const maxNodesInLevel = Math.max(
            ...Object.values(nodesByLevel).map(levelNodes => levelNodes.length)
        );
        return initialNodes.map(node => {
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
                },
            };
        });
    }, [nodeStates]);

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
                    isGrayscale: !highlightedEdges.includes(edge.id),
                    fraction,
                },
            };
        });
    }, [highlightedEdges]);

    return (
        <div
            className="relative"
            style={{ height: '100vh', width: '100%', minHeight: 400 }}
        >
            <ReactFlow
                nodes={nodes.map((node) => ({
                    ...node,
                    data: {
                        ...node.data,
                        ...getNodeStyle(nodeStates[node.id]),
                    },
                }))}
                edges={edges.map((edge) => ({
                    ...edge,
                    data: {
                        ...edge.data,
                        isGrayscale: true, // Keep edges grayscale
                    },
                }))}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default NextClassesFlowchart;