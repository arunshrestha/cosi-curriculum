import React, { memo } from 'react';

const pushUpEdgeIds = new Set(['e4-15', 'e4-16', 'e4-17', 'e4-18', 'e4-19', 'e8-23', 'e8-24', 'e8-25', 'e14-31', 'e14-32', 'e14-33', 'e18-35']); // Add all special edge IDs here
const pushDownEdgeIds = new Set(['e3-5', 'e3-6', 'e3-7', 'e3-8', 'e3-9', 'e3-10', 'e3-11', 'e3-12', 'e3-13', 'e3-14', 'e5-16', 'e5-17', 'e5-18', 'e5-19', 'e5-20', 'e5-21', 'e5-22', 'e5-23', 'e5-24', 'e5-25', 'e5-26', 'e5-27', 'e5-28', 'e5-29', 'e5-30', 'e16-34']); // Add all special edge IDs here

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
    const adjustedTargetX = targetX + (fraction - 0.5) * 200; // Adjust targetX based on fraction and width pixel value of node

    // Conditionally define the edgePath based on the id of the edge
    let edgePath;
    if (pushUpEdgeIds.has(id)) {
        // Example of a different path for a specific set of edge ids
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - 20} L${adjustedTargetX},${((sourceY + targetY) / 2) - 20} ${adjustedTargetX},${targetY}`;
    } else if (pushDownEdgeIds.has(id)) {
        // Default path
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) + 20} L${adjustedTargetX},${((sourceY + targetY) / 2) + 20} ${adjustedTargetX},${targetY}`;
    } else {
        edgePath = `M${sourceX},${sourceY} L${sourceX},${(sourceY + targetY) / 2} L${adjustedTargetX},${(sourceY + targetY) / 2} L${adjustedTargetX},${targetY}`;
    }

    const edgeBoldCategory = {
        grayscale: 'fill-none stroke-gray-100 stroke-1',
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