import React, { useState, useMemo } from 'react';
import ReactFlow from 'reactflow';
import 'reactflow/dist/style.css';
import { nodes as initialNodes, edges as initialEdges } from '../data/initialGraph';
import { nodeTypes } from './nodeTypes';
import InfoModal from '../components/modals/InfoModal';

function FlowCanvas() {
    const [openInfoId, setOpenInfoId] = useState(null);

    const nodesWithHandlers = useMemo(() => {
        return initialNodes.map((node) => ({
            ...node,
            data: {
                ...node.data,
                setOpenInfoId,
            },
        }));
    }, []);

    const selectedNode = nodesWithHandlers.find((node) => node.id === openInfoId);

    return (
        <>
            <ReactFlow
                nodes={nodesWithHandlers}
                edges={initialEdges}
                nodeTypes={nodeTypes}
                fitView
            />
            {openInfoId && selectedNode && (
                <InfoModal onClose={() => setOpenInfoId(null)} data={selectedNode.data} />
            )}
        </>
    );
}

export default FlowCanvas;
