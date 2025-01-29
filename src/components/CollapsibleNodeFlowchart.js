import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData2'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode/RoundedBoxNode';
import StraightLineEdge from './StraightLineEdge'; // Import StraightLineEdge component
import FilterControls from './FilterControls'; // Import FilterControls component
import Popup from './RoundedBoxNode/Popup'; // Correct path based on file structure

const CollapsibleNodeFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges] = useState(initialEdges);
    const [highlightedNodes, setHighlightedNodes] = useState([]);
    const [highlightedEdges, setHighlightedEdges] = useState([]);
    const [filter, setFilter] = useState('Both'); // State to manage the selected filter
    const [PopupVisible, setPopupVisible] = useState(false); // State to manage the visibility of the popup
    const [popupData, setPopupData] = useState(null); // State to store the data for the popup

    // Variables to control node positioning
    const xSpacing = 200; // Horizontal spacing between nodes
    const ySpacing = 200 // Vertical spacing between levels

    useEffect(() => {
        try {
            // Filter nodes based on the selected filter
            const filteredNodes = initialNodes.filter(node => {
                if (filter === 'Both') return true;
                return node.data.courseProgram === filter || node.data.courseProgram === 'Both';
            });

            // Group nodes by their level
            const nodesByLevel = filteredNodes.reduce((acc, node) => {
                if (!acc[node.level]) {
                    acc[node.level] = [];
                }
                acc[node.level].push(node);
                return acc;
            }, {});

            // Find the maximum number of nodes in any level
            const maxNodesInLevel = Math.max(...Object.values(nodesByLevel).map(levelNodes => levelNodes.length));

            // Manually set positions of nodes based on their level and index within the level
            const positionedNodes = filteredNodes.map((node) => {
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

            setNodes(positionedNodes);
        } catch (e) {
            console.log(e);
        }
    }, [filter]); // Add filter as a dependency to recalculate positions when the filter changes

    const highlightPath = (nodeId) => {
        const pathNodes = new Set();
        const pathEdges = new Set();

        const findPaths = (currentNodeId) => {
            const currentNode = nodes.find(n => n.id === currentNodeId);
            if (currentNode) {
                pathNodes.add(currentNode.id);
                const parentEdges = edges.filter(e => e.target === currentNodeId);
                parentEdges.forEach((parentEdge, index) => {
                    pathEdges.add(parentEdge.id);
                    // Calculate the position as a fraction of the way across the node
                    const fraction = (index + 1) / (parentEdges.length + 1);
                    parentEdge.data = { ...parentEdge.data, fraction }; // Pass fraction to edge data
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

    const handleMoreInfoClick = (nodeData) => {
        setPopupData(nodeData);
        setPopupVisible(true);
    };

    const handleClosePopup = () => {
        setPopupVisible(false);
        setPopupData(null);
    };

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredNodes = nodes.filter((node) => {
        if (filter === 'Both') return true;
        return (
            node.data.courseProgram === filter || node.data.courseProgram === 'Both'
        );
    });

    const filteredEdges = edges.filter((edge) => {
        if (filter === 'Both') return true;
        const sourceNode = nodes.find((node) => node.id === edge.source);
        const targetNode = nodes.find((node) => node.id === edge.target);
        return (
            sourceNode &&
            targetNode &&
            (sourceNode.data.courseProgram === filter ||
                sourceNode.data.courseProgram === 'Both') &&
            (targetNode.data.courseProgram === filter ||
                targetNode.data.courseProgram === 'Both')
        );
    });

    return (
        <div className="h-screen">
            <FilterControls filter={filter} onFilterChange={handleFilterChange} />
            <ReactFlow
                nodes={filteredNodes.map((node) => ({
                    ...node,
                    data: {
                        ...node.data,
                        isGrayscale: !highlightedNodes.includes(node.id),
                    },
                }))}
                edges={filteredEdges.map((edge) => ({
                    ...edge,
                    data: {
                        ...edge.data,
                        isGrayscale: !highlightedEdges.includes(edge.id),
                    },
                }))}
                onNodeClick={(event, node) => handleNodeClick(node)}
                nodeTypes={{
                    custom: (props) => (
                        <RoundedBoxNode {...props} onMoreInfoClick={handleMoreInfoClick} />
                    ),
                }}
                edgeTypes={{ custom: StraightLineEdge }}
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
