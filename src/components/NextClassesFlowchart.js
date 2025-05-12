import React, { useState, useEffect, useCallback } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowDataUpdated'; // Import nodes and edges data
import RoundedBoxNode from './nodes/RoundedBoxNode';
import StraightLineEdge from './edges/StraightLineEdge'; // Import StraightLineEdge component

const NextClassesFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    // Node states: "notTaken", "available", "taken"
    const [nodeStates, setNodeStates] = useState(() =>
        initialNodes.reduce((acc, node) => {
            acc[node.id] = "notTaken"; // Default state
            return acc;
        }, {})
    );

    // Update node states based on prerequisites
    const updateNodeStates = useCallback(() => {
        const newStates = { ...nodeStates };

        nodes.forEach((node) => {
            if (nodeStates[node.id] === "taken") {
                // Mark children as "available" if prerequisites are met
                edges
                    .filter((edge) => edge.source === node.id)
                    .forEach((edge) => {
                        const targetNode = nodes.find((n) => n.id === edge.target);
                        if (targetNode && newStates[edge.target] === "notTaken") {
                            newStates[edge.target] = "available";
                        }
                    });
            }
        });

        setNodeStates(newStates);
    }, [nodes, edges, nodeStates]);

    // Handle node click to change state
    const handleNodeClick = (event, node) => {
        const newStates = { ...nodeStates };

        if (nodeStates[node.id] === "notTaken") {
            newStates[node.id] = "taken"; // Mark as taken
        } else if (nodeStates[node.id] === "taken") {
            newStates[node.id] = "notTaken"; // Reset to not taken
        }

        setNodeStates(newStates);
        updateNodeStates(); // Recalculate states
    };

    // Map node states to styles
    const getNodeStyle = (state) => {
        switch (state) {
            case "notTaken":
                return { isGrayscale: true, color: "gray" };
            case "available":
                return { isGrayscale: false, color: "blue" };
            case "taken":
                return { isGrayscale: false, color: "green" };
            default:
                return { isGrayscale: true, color: "gray" };
        }
    };

    // Position nodes and edges (logic from CollapsibleNodeFlowchart)
    useEffect(() => {
        const xSpacing = 200;
        const ySpacing = 200;

        const nodesByLevel = nodes.reduce((acc, node) => {
            if (!acc[node.level]) acc[node.level] = [];
            acc[node.level].push(node);
            return acc;
        }, {});

        const maxNodesInLevel = Math.max(
            ...Object.values(nodesByLevel).map((levelNodes) => levelNodes.length)
        );

        const positionedNodes = nodes.map((node) => {
            const levelNodes = nodesByLevel[node.level];
            const index = levelNodes.indexOf(node);
            const customSpacingNodes = ['12', '232']; // Example custom spacing
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
        calculateDefaultEdgePositions(positionedNodes, edges);
    }, [nodes, edges]);

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

    return (
        <div className="h-screen relative">
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
                nodeTypes={{
                    custom: (props) => <RoundedBoxNode {...props} />,
                }}
                edgeTypes={{
                    custom: (props) => <StraightLineEdge {...props} />,
                }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default NextClassesFlowchart;