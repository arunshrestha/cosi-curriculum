import React, { useState, useEffect } from 'react';
import { ReactFlow, MiniMap, Controls, Background } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import '@xyflow/react/dist/base.css';
import { initialNodes, initialEdges } from './data/flowData'; // Import nodes and edges data
import RoundedBoxNode from './RoundedBoxNode';

const CollapsibleNodeFlowchart = () => {
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    useEffect(() => {
        // Ensure root nodes are always visible
        setNodes(prevNodes => {
            const updatedNodes = prevNodes.map(node => ({
                ...node,
                isVisible: node.level === 1, // Ensure the root nodes are always visible
                expanded: false
            }));
            return updatedNodes;
        });
    }, []);

    const collapseSubtree = (nodeId, nodes) => {
        let updatedNodes = [...nodes];
        const stack = [nodeId];

        while (stack.length) {
            const currentNodeId = stack.pop();
            updatedNodes = updatedNodes.map(n => {
                if (n.parentId === currentNodeId) {
                    stack.push(n.id);
                    return { ...n, isVisible: false, expanded: false };
                }
                return n;
            });
        }

        return updatedNodes;
    };

    const toggleNodeExpansion = (nodeId) => {
        setNodes(prevNodes => {
            const clickedNode = prevNodes.find(n => n.id === nodeId);
            let updatedNodes = [...prevNodes];

            if (clickedNode.expanded) {
                // If the clicked node is already expanded, return all nodes as is
                return updatedNodes;
            }

            if (clickedNode.level === 1) {
                // If level 1 and not expanded, find expanded sibling and collapse subtree
                const expandedSibling = prevNodes.find(n => n.level === 1 && n.expanded);
                if (expandedSibling) {
                    updatedNodes = collapseSubtree(expandedSibling.id, updatedNodes);
                    updatedNodes = updatedNodes.map(n => {
                        if (n.id === expandedSibling.id) {
                            return { ...n, expanded: false };
                        }
                        return n;
                    });
                }
            } else {
                // If not level 1 and not expanded, find expanded sibling and collapse subtree
                const expandedSibling = prevNodes.find(n => n.parentId === clickedNode.parentId && n.expanded);
                if (expandedSibling) {
                    updatedNodes = collapseSubtree(expandedSibling.id, updatedNodes);
                    updatedNodes = updatedNodes.map(n => {
                        if (n.id === expandedSibling.id) {
                            return { ...n, expanded: false };
                        }
                        return n;
                    });
                }
            }

            // Expand the clicked node and show its children
            let yOffset = 0;
            updatedNodes = updatedNodes.map(n => {
                if (n.id === nodeId) {
                    return { ...n, expanded: true };
                }
                if (n.parentId === nodeId) {
                    const parentNode = prevNodes.find(p => p.id === nodeId);
                    const newPosition = {
                        x: 300,
                        y: yOffset
                    };
                    yOffset += 100;
                    return { ...n, isVisible: true, position: newPosition };
                }
                return n;
            });

            return updatedNodes;
        });
    };

    const handleNodeClick = (clickedNode) => {
        toggleNodeExpansion(clickedNode.id);
    };

    const filteredNodes = nodes.filter(node => node.isVisible);
    const filteredEdges = edges.filter(edge => filteredNodes.some(node => node.id === edge.source) && filteredNodes.some(node => node.id === edge.target));

    return (
        <div style={{ height: 800 }}>
            <ReactFlow nodes={filteredNodes} edges={filteredEdges} onNodeClick={(event, node) => handleNodeClick(node)} nodeTypes={{ custom: RoundedBoxNode }} >
                <MiniMap />
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default CollapsibleNodeFlowchart;