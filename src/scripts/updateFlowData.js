const fs = require('fs');
const path = require('path');

(async () => {
    const { initialNodes, initialEdges } = await import('../components/data/flowData2.js');

    const idMap = {
        '4': '29',
        '1': '10',
        '2': '102',
        '3': '12',
        '15': '130',
        '5': '21',
        '6': '103',
        '7': '107',
        '9': '116',
        '10': '125',
        '11': '152',
        '12': '153',
        '8': '104',
        '13': '114',
        '14': '135',
        '16': '121',
        '17': '150',
        '19': '180',
        '18': '127',
        '20': '128',
        '22': '143',
        '21': '131',
        '26': '101',
        '23': '123',
        '25': '126',
        '24': '165',
        '27': '166',
        '28': '105',
        '29': '119',
        '30': '120',
        '34': '190',
        '35': '167',
        '36': '142',
        '37': '146',
        '38': '147',
        '40': '149',
        '39': '159',
        '31': '115',
        '32': '132',
        '33': '136',
        '43': '216',
        '44': '217',
        '41': '230',
        '42': '231',
        '45': '232',
        // Add all other mappings here
    };

    // Update initialNodes
    const updatedNodes = initialNodes.map(node => ({
        ...node,
        id: idMap[node.id] || node.id,
    }));

    // Update initialEdges
    const updatedEdges = initialEdges.map(edge => {
        const newSource = idMap[edge.source] || edge.source;
        const newTarget = idMap[edge.target] || edge.target;
        return {
            ...edge,
            id: `e${newSource}-${newTarget}`,
            source: newSource,
            target: newTarget,
        };
    });

    const updatedData = `
import { MarkerType } from '@xyflow/react';

export const initialNodes = ${JSON.stringify(updatedNodes, null, 2).replace(/"([^"]+)":/g, '$1:')};

export const initialEdges = ${JSON.stringify(updatedEdges, null, 2).replace(/"([^"]+)":/g, '$1:').replace(/"MarkerType.ArrowClosed"/g, 'MarkerType.ArrowClosed')};
`;

    fs.writeFileSync(
        path.join(__dirname, 'flowDataUpdated.js'),
        updatedData,
        'utf8'
    );

    console.log('Updated data written to flowDataUpdated.js');
})();