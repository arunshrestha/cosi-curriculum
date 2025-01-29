import React, { memo } from 'react';

const StraightLineEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
    data = {} // Default to an empty object if data is undefined
}) => {
    // Apply the fraction to the targetX position
    const fraction = data.fraction || 0.5;
    const adjustedTargetX = targetX + (fraction - 0.5) * 100; // Adjust targetX based on fraction

    const edgePath = `M${sourceX},${sourceY} L${sourceX},${(sourceY + targetY) / 2} L${adjustedTargetX},${(sourceY + targetY) / 2} L${adjustedTargetX},${targetY}`;

    const edgeBoldCategory = {
        grayscale: 'fill-none stroke-gray-400 stroke-0',
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