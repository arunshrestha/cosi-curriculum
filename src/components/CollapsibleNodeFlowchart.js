import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData2'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import CustomEdge from './CustomEdge';
import ELK from 'elkjs/lib/elk.bundled.js';
import FilterControls from './FilterControls'; // Import FilterControls component

const elk = new ELK();

const CollapsibleNodeFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);
    const [filter, setFilter] = useState('Both'); // State to manage the selected filter

    useEffect(() => {
        const layoutGraph = async () => {
            const elkGraph = {
                id: 'root',
                children: nodes.map((node) => ({
                    id: node.id,
                    width: 200, // Example width, adjust as needed
                    height: 100, // Example height, adjust as needed
                })),
                edges: edges.map((edge) => ({
                    id: edge.id,
                    sources: [edge.source],
                    targets: [edge.target],
                })),
            };

            try {
                const layout = await elk.layout(elkGraph, {
                    layoutOptions: {
                        'elk.algorithm': 'layered',
                        'elk.direction': 'DOWN', // Flow direction; use 'RIGHT' for horizontal flow
                        'elk.layered.spacing.nodeNodeBetweenLayers': 10, // Vertical spacing between nodes (adjust as needed)
                        'elk.spacing.nodeNode': 10, // Horizontal spacing between nodes (adjust as needed)
                        'elk.edgeRouting': 'ORTHOGONAL', // Optional: makes edges more structured
                        'elk.layered.nodePlacement.strategy': 'NETWORK_SIMPLEX', // Helps with complex graphs
                        'elk.layered.mergeEdges': true, // Merge edges where possible for cleaner display
                    },
                });

                // Check if layout and its children are defined
                if (layout && layout.children) {
                    // Map the ELK layout back to react-flow nodes and edges
                    const layoutedNodes = nodes.map((node) => {
                        const layoutNode = layout.children.find((n) => n.id === node.id);
                        if (layoutNode) {
                            return {
                                ...node,
                                position: {
                                    x: layoutNode.x,
                                    y: layoutNode.y,
                                },
                                // Set to false for react-flow to handle positions from ELK
                                positionAbsolute: false,
                            };
                        }
                        return node;
                    });

                    setNodes(layoutedNodes);
                } else {
                    console.error('ELK layout error: Layout or its children are undefined');
                }

                setEdges(edges); // No changes needed for edges
            } catch (error) {
                console.error('ELK layout error:', error);
            }
        };

        layoutGraph();
    }, [nodes, edges]);

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

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredNodes = nodes.filter(node => {
        if (filter === 'Both') return true;
        return node.data.courseProgram === filter || node.data.courseProgram === 'Both';
    });

    const filteredEdges = edges.filter(edge => {
        if (filter === 'Both') return true;
        const sourceNode = nodes.find(node => node.id === edge.source);
        const targetNode = nodes.find(node => node.id === edge.target);
        return sourceNode && targetNode && (sourceNode.data.courseProgram === filter || sourceNode.data.courseProgram === 'Both') && (targetNode.data.courseProgram === filter || targetNode.data.courseProgram === 'Both');
    });

    return (
        <div className="h-screen">
            <FilterControls filter={filter} onFilterChange={handleFilterChange} />
            <ReactFlow
                nodes={filteredNodes.map(node => ({
                    ...node,
                    data: { ...node.data, isGrayscale: !highlightedNodes.includes(node.id) }
                }))}
                edges={filteredEdges.map(edge => ({
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