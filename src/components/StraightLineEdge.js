import React, { memo } from 'react';

const StraightLineEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
    data
}) => {

    const edgePath = `M${sourceX},${sourceY} L${sourceX},${(sourceY + targetY) / 2} L${targetX},${(sourceY + targetY) / 2} L${targetX},${targetY}`;

    const edgeBoldCategory = {
        grayscale: 'fill-none stroke-gray-400 stroke-1',
        bold: 'fill-none stroke-black stroke-2'
    };
    const edgeBold = data.isGrayscale ? edgeBoldCategory.grayscale : edgeBoldCategory.bold;

    return (
        <>
            <path
                id={id}
                style={style}
                className={`${edgeBold}`}
                d={edgePath}
                markerEnd={markerEnd}
            />
        </>
    );
};

export default memo(StraightLineEdge);