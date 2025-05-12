import React from 'react';
import { Handle } from '@xyflow/react';

function CustomNode({ data }) {
    const handleClick = () => {
        data.setOpenInfoId(data.id);
    };

    const nodeStyle = {
        border: '1px solid #888',
        borderRadius: '6px',
        padding: '10px',
        background: 'white',
        position: 'relative',
    };

    const infoButtonStyle = {
        position: 'absolute',
        top: 4,
        right: 4,
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        fontSize: '16px',
    };

    return (
        <div style={nodeStyle}>
            <Handle type="target" position="top" />
            <div>{data.label}</div>
            <button style={infoButtonStyle} onClick={handleClick}>ℹ️</button>
            <Handle type="source" position="bottom" />
        </div>
    );
}

export default CustomNode;
