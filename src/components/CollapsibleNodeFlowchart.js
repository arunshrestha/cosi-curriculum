import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import CustomEdge from './CustomEdge';

const CollapsibleNodeFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);

    useEffect(() => {
        // Ensure all nodes are initially visible in grayscale
        setNodes(prevNodes => {
            const updatedNodes = prevNodes.map(node => ({
                ...node,
                isVisible: true,
                isGrayscale: true,
            }));
            return updatedNodes;
        });

        setEdges(prevEdges => {
            const updatedEdges = prevEdges.map(edge => ({
                ...edge,
                isGrayscale: true,
            }));
            return updatedEdges;
        });
    }, []);

    useEffect(() => {
        // Adjust node positions based on levels and parent-child relationships
        const adjustNodePositions = (nodes) => {
            const levelSpacing = 300;
            const siblingSpacing = 100;
            const adjustedNodes = [...nodes];

            const setPosition = (nodeId, x, y) => {
                const node = adjustedNodes.find(n => n.id === nodeId);
                if (node) {
                    node.position = { x, y };
                    const childNodes = adjustedNodes.filter(n => n.parentId === nodeId);
                    childNodes.forEach((childNode, index) => {
                        setPosition(childNode.id, levelSpacing, index * siblingSpacing);
                    });
                }
            };

            const rootNodes = adjustedNodes.filter(n => !n.parentId);
            rootNodes.forEach((rootNode, index) => {
                setPosition(rootNode.id, 100, (index + 1) * siblingSpacing);
            });

            return adjustedNodes;
        };

        setNodes(prevNodes => adjustNodePositions(prevNodes));
    }, []);

    const highlightPath = (nodeId) => {
        const pathNodes = [];
        const pathEdges = [];

        const findPath = (currentNodeId) => {
            const currentNode = nodes.find(n => n.id === currentNodeId);
            if (currentNode) {
                pathNodes.push(currentNode.id);
                const parentEdge = edges.find(e => e.target === currentNodeId);
                if (parentEdge) {
                    pathEdges.push(parentEdge.id);
                    findPath(parentEdge.source);
                }
            }
        };

        findPath(nodeId);

        setHighlightedNodes(pathNodes);
        setHighlightedEdges(pathEdges);
    };

    const handleNodeClick = (clickedNode) => {
        highlightPath(clickedNode.id);
    };

    return (
        <div className="h-screen">
            <ReactFlow
                nodes={nodes.map(node => ({
                    ...node,
                    data: { ...node.data, isGrayscale: !highlightedNodes.includes(node.id) }
                }))}
                edges={edges.map(edge => ({
                    ...edge,
                    data: { ...edge.data, isGrayscale: !highlightedEdges.includes(edge.id) }
                }))}
                onNodeClick={(event, node) => handleNodeClick(node)}
                nodeTypes={{ custom: RoundedBoxNode }}
                edgeTypes={{ custom: CustomEdge }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default CollapsibleNodeFlowchart;