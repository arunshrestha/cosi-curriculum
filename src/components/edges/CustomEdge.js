import React, { memo } from 'react';
import { getBezierPath } from '@xyflow/react';

const CustomEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    sourcePosition,
    targetPosition,
    markerEnd,
    data
}) => {

    const edgeBoldCategory = {
        grayscale: 'fill-none stroke-gray-400 stroke-1',
        bold: 'fill-none stroke-black stroke-2'
    };

    const edgePath = getBezierPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    })[0];


    const edgeBold = data.isGrayscale ? edgeBoldCategory.grayscale : edgeBoldCategory.bold;

    return (
        <path
            id={id}
            d={edgePath}
            className={`${edgeBold}`}
            markerEnd={markerEnd}
        />
    );
};

export default memo(CustomEdge);