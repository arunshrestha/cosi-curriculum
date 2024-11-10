import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData2'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import CustomEdge from './CustomEdge';
import dagre from '@dagrejs/dagre';

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
        // Adjust node positions using dagre for vertical layout
        const adjustNodePositions = (nodes, edges) => {
            try {
                const g = new dagre.graphlib.Graph();
                g.setGraph({
                    rankdir: 'TB', // Top to Bottom layout
                    edgesep: 200, // Edge separation
                    nodesep: 400, // Node separation
                    ranksep: 150, // Vertical separation between nodes
                    ranker: 'network-simplex', // Use network-simplex ranking algorithm
                });
                g.setDefaultEdgeLabel(() => ({}));

                nodes.forEach(node => {
                    g.setNode(node.id, { width: 200, height: 100 });
                });

                edges.forEach(edge => {
                    g.setEdge(edge.source, edge.target);
                });

                dagre.layout(g);

                const adjustedNodes = nodes.map(node => {
                    const nodeWithPosition = g.node(node.id);
                    return {
                        ...node,
                        position: {
                            x: nodeWithPosition.x - nodeWithPosition.width / 2,
                            y: nodeWithPosition.y - nodeWithPosition.height / 2,
                        },
                    };
                });

                return adjustedNodes;
            } catch (error) {
                console.error('Error adjusting node positions:', error);
                return nodes;
            }
        };

        setNodes(prevNodes => adjustNodePositions(prevNodes, edges));
    }, [edges]);

    const highlightPath = (nodeId) => {
        const pathNodes = new Set();
        const pathEdges = new Set();

        const findPaths = (currentNodeId) => {
            const currentNode = nodes.find(n => n.id === currentNodeId);
            if (currentNode) {
                pathNodes.add(currentNode.id);
                const parentEdges = edges.filter(e => e.target === currentNodeId);
                parentEdges.forEach(parentEdge => {
                    pathEdges.add(parentEdge.id);
                    findPaths(parentEdge.source);
                });
            }
        };

        findPaths(nodeId);

        setHighlightedNodes(Array.from(pathNodes));
        setHighlightedEdges(Array.from(pathEdges));
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