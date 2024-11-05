import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function RoundedBoxNode({ data }) {
    const categoryColors = {
        'Data Systems': 'bg-blue-200',
        'ML': 'bg-green-200',
        'Core': 'bg-yellow-200',
        'CL': 'bg-red-200',
        'default': 'bg-white'
    };

    const bgColorClass = categoryColors[data.courseCategory] || categoryColors['default'];

    return (
        <div className={`w-48 h-24 p-4 shadow-md rounded-md border-2 border-stone-400 flex flex-col justify-center items-center ${bgColorClass}`}>
            <div className="text-center">
                <div className="text-lg font-bold">{data.courseNum}</div>
                <div className="text-gray-500 break-words">{data.courseTitle}</div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                className="opacity-0" // Hide the handle
            />
            <Handle
                type="source"
                position={Position.Right}
                className="opacity-0" // Hide the handle
            />
        </div>
    );
}

export default memo(RoundedBoxNode);