import React from 'react';
import { getBezierPath, BaseEdge } from '@xyflow/react';

function SampleEdge({ id, sourceX, sourceY, targetX, targetY, label }) {
    const [edgePath] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
    });

    return (
        <>
            <BaseEdge id={id} path={edgePath} style={{ stroke: '#555', strokeWidth: 2 }} />
            {label && (
                <text>
                    <textPath
                        href={`#${id}`}
                        style={{ fontSize: 12 }}
                        startOffset="50%"
                        textAnchor="middle"
                    >
                        {label}
                    </textPath>
                </text>
            )}
        </>
    );
}

export default SampleEdge;
