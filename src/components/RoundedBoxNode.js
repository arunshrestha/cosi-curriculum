import React, { memo } from 'react';
import { Handle, Position } from '@xyflow/react';

function RoundedBoxNode({ data }) {
    return (
        <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-stone-400">
            <div className="flex">
                <div className="ml-2">
                    <div className="text-lg font-bold">{data.courseNum}</div>
                    <div className="text-gray-500">{data.courseTitle}</div>
                </div>
            </div>

            <Handle
                type="target"
                position={Position.Left}
                className="w-16 !bg-teal-500"
            />
            <Handle
                type="source"
                position={Position.Right}
                className="w-16 !bg-teal-500"
            />
        </div>
    );
}

export default memo(RoundedBoxNode);