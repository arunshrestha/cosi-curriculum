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

const updateEdgeIds = (edgeIds, idMap) => {
    return new Set([...edgeIds].map(id => {
        const [source, target] = id.slice(1).split('-');
        const newSource = idMap[source] || source;
        const newTarget = idMap[target] || target;
        return `e${newSource}-${newTarget}`;
    }));
};

// pushUpEdgeIds
const pushUpEdgeIds = new Set(['e4-15', 'e8-23', 'e8-24', 'e8-25', 'e14-31', 'e14-32', 'e14-33', 'e18-35']);
const updatedPushUpEdgeIds = updateEdgeIds(pushUpEdgeIds, idMap);

console.log(`Number of elements in old set: ${pushUpEdgeIds.size}`);
console.log(`Number of elements in new set: ${updatedPushUpEdgeIds.size}`);
console.log(`New set: ${Array.from(updatedPushUpEdgeIds).map(id => `'${id}'`).join(', ')}`);

// pushDownEdgeIds
const pushDownEdgeIds = new Set(['e3-5', 'e3-6', 'e3-7', 'e3-8', 'e3-9', 'e3-10', 'e3-11', 'e3-12', 'e3-13', 'e3-14', 'e5-16', 'e5-17', 'e5-18', 'e5-19', 'e5-20', 'e5-21', 'e5-22', 'e5-23', 'e5-24', 'e5-25', 'e5-26', 'e5-27', 'e5-28', 'e5-29', 'e5-30', 'e16-14', 'e16-34']);
const updatedPushDownEdgeIds = updateEdgeIds(pushDownEdgeIds, idMap);

console.log(`Number of elements in old set: ${pushDownEdgeIds.size}`);
console.log(`Number of elements in new set: ${updatedPushDownEdgeIds.size}`);
console.log(`New set: ${Array.from(updatedPushDownEdgeIds).map(id => `'${id}'`).join(', ')}`);

// aroundRightEdgeIds
const aroundRightEdgeIds = new Set(['e13-31', 'e13-32', 'e13-33']);
const updatedAroundRightEdgeIds = updateEdgeIds(aroundRightEdgeIds, idMap);

console.log(`Number of elements in old set: ${aroundRightEdgeIds.size}`);
console.log(`Number of elements in new set: ${updatedAroundRightEdgeIds.size}`);
console.log(`New set: ${Array.from(updatedAroundRightEdgeIds).map(id => `'${id}'`).join(', ')}`);

// aroundLeftEdgeIds
const aroundLeftEdgeIds = new Set(['e4-16', 'e4-17', 'e4-18', 'e4-19']);
const updatedAroundLeftEdgeIds = updateEdgeIds(aroundLeftEdgeIds, idMap);

console.log(`Number of elements in old set: ${aroundLeftEdgeIds.size}`);
console.log(`Number of elements in new set: ${updatedAroundLeftEdgeIds.size}`);
console.log(`New set: ${Array.from(updatedAroundLeftEdgeIds).map(id => `'${id}'`).join(', ')}`);