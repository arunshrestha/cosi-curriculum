import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData2'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import StraightLineEdge from './StraightLineEdge'; // Import StraightLineEdge component
import FilterControls from './FilterControls'; // Import FilterControls component

const CollapsibleNodeFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges] = useState(initialEdges);
    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);
    const [filter, setFilter] = useState('Both'); // State to manage the selected filter

    // Variables to control node positioning
    const xSpacing = 200; // Horizontal spacing between nodes
    const ySpacing = 200 // Vertical spacing between levels

    useEffect(() => {
        try {
            setNodes(prevNodes => {
                // Group nodes by their level
                const nodesByLevel = prevNodes.reduce((acc, node) => {
                    if (!acc[node.level]) {
                        acc[node.level] = [];
                    }
                    acc[node.level].push(node);
                    return acc;
                }, {});

                // Find the maximum number of nodes in any level
                const maxNodesInLevel = Math.max(...Object.values(nodesByLevel).map(levelNodes => levelNodes.length));

                // Manually set positions of nodes based on their level and index within the level
                return prevNodes.map((node) => {
                    const levelNodes = nodesByLevel[node.level];
                    const index = levelNodes.indexOf(node);
                    const totalWidth = (maxNodesInLevel - 1) * xSpacing;
                    const xOffset = (totalWidth - (levelNodes.length - 1) * xSpacing) / 2;
                    return {
                        ...node,
                        position: {
                            x: index * xSpacing + xOffset,
                            y: node.level * ySpacing,
                        },
                        positionAbsolute: true, // Set to true to use the provided positions
                    };
                });
            });
        } catch (e) {
            console.log(e);
        }
    }, []); // Empty dependency array to run the effect only once

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
                edgeTypes={{ custom: StraightLineEdge }}
            >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default CollapsibleNodeFlowchart;