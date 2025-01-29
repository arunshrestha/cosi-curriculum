import React, { memo } from 'react';
import './AnimatedEdge.css'; // Import the CSS file

const AnimatedEdge = ({
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
        grayscale: 'fill-none stroke-0',
        bold: 'fill-none stroke-black stroke-2'
    };
    const edgeBold = data.isGrayscale ? edgeBoldCategory.grayscale : edgeBoldCategory.bold;

    return (
        <>
            <path
                id={id}
                style={style}
                className={`${edgeBold} animated-edge`}
                d={edgePath}
                markerEnd={markerEnd}
            />
        </>
    );
};

export default memo(AnimatedEdge);