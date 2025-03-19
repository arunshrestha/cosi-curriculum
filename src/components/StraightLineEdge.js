import React, { memo } from 'react';

// Add all special edge IDs here
const pushUpEdgeIds = new Set(['e29-130', 'e104-123', 'e104-165', 'e104-126', 'e135-115', 'e135-132', 'e135-136', 'e127-167', 'e165-149', 'e165-159']);
const pushDownEdgeIds = new Set(['e12-21', 'e12-103', 'e12-107', 'e12-104', 'e12-116', 'e12-125', 'e12-152', 'e12-153', 'e12-114', 'e12-135', 'e21-121', 'e21-150', 'e21-127', 'e21-180', 'e21-128', 'e21-131', 'e21-143', 'e21-123', 'e21-165', 'e21-126', 'e21-101', 'e21-166', 'e21-105', 'e21-119', 'e21-120', 'e121-135', 'e121-190']);
const aroundRightEdgeIds = new Set(['e114-115', 'e114-132', 'e114-136']);
const aroundLeftEdgeIds = new Set(['e29-121', 'e29-150', 'e29-127', 'e29-180']);
const aroundRightCLEdgeIds = new Set(['e114-115', 'e114-132', 'e114-136']);

const StraightLineEdge = ({
    id,
    sourceX,
    sourceY,
    targetX,
    targetY,
    style = {},
    markerEnd,
    filter,
    data = {} // Default to an empty object if data is undefined
}) => {
    // Apply the fraction to the targetX position
    const fraction = data.fraction || 0.5;
    const adjustedTargetX = targetX + (fraction - 0.5) * 200; // Adjust targetX based on fraction and width pixel value of node

    // Conditionally define the edgePath based on the id of the edge
    // Calculate the adjustment based on the distance between source and target
    const distanceY = Math.abs(targetY - sourceY);
    const adjustmentY = distanceY * 0.1; // Adjust this multiplier as needed
    // // Calculate the adjustment based on the viewport height
    // const adjustmentY = window.innerHeight * 0.02; // 2% of the viewport height
    let edgePath;
    if (filter === 'CL') {
        if (id === 'e29-121') {
            edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) + 90} L${adjustedTargetX},${((sourceY + targetY) / 2) + 90} L${adjustedTargetX},${targetY}`;
        } else if (id === 'e121-135') {
            edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - adjustmentY} L${adjustedTargetX},${((sourceY + targetY) / 2) - adjustmentY} ${adjustedTargetX},${targetY}`;
        } else if (aroundRightCLEdgeIds.has(id)) {
            edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - 110} L${sourceX + 450},${((sourceY + targetY) / 2) - 110} L${sourceX + 450},${((sourceY + targetY) / 2) + 100} L${adjustedTargetX},${((sourceY + targetY) / 2) + 100} L${adjustedTargetX},${targetY}`;
        } else {
            // Default path
            edgePath = `M${sourceX},${sourceY} L${sourceX},${(sourceY + targetY) / 2} L${adjustedTargetX},${(sourceY + targetY) / 2} L${adjustedTargetX},${targetY}`;
        }
    } else if (pushUpEdgeIds.has(id)) {
        // Example of a different path for a specific set of edge ids
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - adjustmentY} L${adjustedTargetX},${((sourceY + targetY) / 2) - adjustmentY} ${adjustedTargetX},${targetY}`;
    } else if (pushDownEdgeIds.has(id)) {
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) + adjustmentY} L${adjustedTargetX},${((sourceY + targetY) / 2) + adjustmentY} ${adjustedTargetX},${targetY}`;
    } else if (aroundRightEdgeIds.has(id)) {
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - 110} L${sourceX + 450},${((sourceY + targetY) / 2) - 110} L${sourceX + 450},${((sourceY + targetY) / 2) + 100} L${adjustedTargetX},${((sourceY + targetY) / 2) + 100} L${adjustedTargetX},${targetY}`;
    } else if (aroundLeftEdgeIds.has(id)) {
        edgePath = `M${sourceX},${sourceY} L${sourceX},${((sourceY + targetY) / 2) - 110} L${sourceX - 1000},${((sourceY + targetY) / 2) - 110} L${sourceX - 1000},${((sourceY + targetY) / 2) + 90} L${adjustedTargetX},${((sourceY + targetY) / 2) + 90} L${adjustedTargetX},${targetY}`;
    } else {
        // Default path
        edgePath = `M${sourceX},${sourceY} L${sourceX},${(sourceY + targetY) / 2} L${adjustedTargetX},${(sourceY + targetY) / 2} L${adjustedTargetX},${targetY}`;
    }

    const edgeBoldCategory = {
        grayscale: 'fill-none stroke-gray-50 stroke-[1px] mix-blend-lighten', // Use a light gray with a thin, solid line
        bold: 'fill-none stroke-black stroke-[3.2px]' // Use a solid black with a thicker stroke
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