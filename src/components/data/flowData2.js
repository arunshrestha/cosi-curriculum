import { MarkerType } from '@xyflow/react';

export const initialNodes = [
    {
        id: '1',
        type: 'custom',
        data: { courseNum: 'COSI 10A', courseTitle: 'Problem Solving in Python', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        sourcePosition: 'right',
        targetPosition: 'left',
        level: 1,
        expanded: false,
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '2',
        type: 'custom',
        data: { courseNum: 'COSI 12B', courseTitle: 'Programming in Java', courseCategory: 'Core' },
        position: { x: 300, y: 0 },
        sourcePosition: 'right',
        targetPosition: 'left',
        parentId: '1',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '3',
        type: 'custom',
        data: { courseNum: 'COSI 21A', courseTitle: 'Data Structures and Algorithms', courseCategory: 'Core' },
        position: { x: 300, y: 0 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '4',
        type: 'custom',
        data: { courseNum: 'COSI 103A', courseTitle: 'Software Engineering', courseCategory: 'default' },
        position: { x: 300, y: 300 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '5',
        type: 'custom',
        data: { courseNum: 'COSI 107A', courseTitle: 'Computer Security', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '6',
        type: 'custom',
        data: { courseNum: 'COSI 104B', courseTitle: 'Intro to ML', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '7',
        type: 'custom',
        data: { courseNum: 'COSI 116A', courseTitle: 'Information Visualization', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '8',
        type: 'custom',
        data: { courseNum: 'COSI 125A', courseTitle: 'HCI', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '9',
        type: 'custom',
        data: { courseNum: 'COSI 152A', courseTitle: 'Web Application', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '10',
        type: 'custom',
        data: { courseNum: 'COSI 153A', courseTitle: 'Mobile Application in NLP', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '11',
        type: 'custom',
        data: { courseNum: 'COSI 114A', courseTitle: 'Fundamentals of NLP I', courseCategory: 'CL' },
        position: { x: 100, y: 100 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '12',
        type: 'custom',
        data: { courseNum: 'COSI 102A', courseTitle: 'Software Entreprenuership', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        level: 1,
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '13',
        type: 'custom',
        data: { courseNum: 'COSI 29A', courseTitle: 'Discrete Mathematics', courseCategory: 'Core' },
        position: { x: 100, y: 100 },
        level: 1,
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '14',
        type: 'custom',
        data: { courseNum: 'COSI 130A', courseTitle: 'Theory of Computation', courseCategory: 'Core' },
        position: { x: 100, y: 100 },
        parentId: '13',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '15',
        type: 'custom',
        data: { courseNum: 'COSI 121B', courseTitle: 'Structures and Interpration', courseCategory: 'Core' },
        position: { x: 100, y: 100 },
        parentId: '13',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '16',
        type: 'custom',
        data: { courseNum: 'COSI 150A', courseTitle: 'Compiler Design', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '13',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '17',
        type: 'custom',
        data: { courseNum: 'COSI 127B', courseTitle: 'Database Systems', courseCategory: 'Data Systems' },
        position: { x: 100, y: 100 },
        parentId: '13',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '18',
        type: 'custom',
        data: { courseNum: 'COSI 180A', courseTitle: 'Algorithms', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '13',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '19',
        type: 'custom',
        data: { courseNum: 'COSI 128A', courseTitle: 'Intro to Computer Networking', courseCategory: 'Data Systems' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '20',
        type: 'custom',
        data: { courseNum: 'COSI 131A', courseTitle: 'Computer Systems', courseCategory: 'Core' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '21',
        type: 'custom',
        data: { courseNum: 'COSI 143B', courseTitle: 'Data Management for Data Science', courseCategory: 'Data Systems' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '22',
        type: 'custom',
        data: { courseNum: 'COSI 123A', courseTitle: 'Statistical Machine Learning', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '6',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '23',
        type: 'custom',
        data: { courseNum: 'COSI 165B', courseTitle: 'Deep Learning', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '6',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '24',
        type: 'custom',
        data: { courseNum: 'COSI 126A', courseTitle: 'Unsupervised Learning and Data Mining', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '6',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '25',
        type: 'custom',
        data: { courseNum: 'COSI 101A', courseTitle: 'AI', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '26',
        type: 'custom',
        data: { courseNum: 'COSI 166B', courseTitle: 'Capstone Software Engineering', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '27',
        type: 'custom',
        data: { courseNum: 'COSI 105B', courseTitle: 'Software Engineering for Scalability', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '28',
        type: 'custom',
        data: { courseNum: 'COSI 119A', courseTitle: 'Robotics', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '29',
        type: 'custom',
        data: { courseNum: 'COSI 120A', courseTitle: 'Topics in Computer System', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
];

export const initialEdges = [
    { id: 'e1-2', type: 'custom', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-3', type: 'custom', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-4', type: 'custom', source: '2', target: '4', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-5', type: 'custom', source: '2', target: '5', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-6', type: 'custom', source: '2', target: '6', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-7', type: 'custom', source: '2', target: '7', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-8', type: 'custom', source: '2', target: '8', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-9', type: 'custom', source: '2', target: '9', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-10', type: 'custom', source: '2', target: '10', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-11', type: 'custom', source: '2', target: '11', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },

    { id: 'e13-14', type: 'custom', source: '13', target: '14', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e13-15', type: 'custom', source: '13', target: '15', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e13-16', type: 'custom', source: '13', target: '16', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e13-17', type: 'custom', source: '13', target: '17', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e13-18', type: 'custom', source: '13', target: '18', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },

    { id: 'e3-15', type: 'custom', source: '3', target: '15', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-16', type: 'custom', source: '3', target: '16', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-17', type: 'custom', source: '3', target: '17', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-18', type: 'custom', source: '3', target: '18', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-19', type: 'custom', source: '3', target: '19', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-20', type: 'custom', source: '3', target: '20', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-21', type: 'custom', source: '3', target: '21', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-22', type: 'custom', source: '3', target: '22', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-23', type: 'custom', source: '3', target: '23', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },

    { id: 'e6-21', type: 'custom', source: '6', target: '21', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e6-22', type: 'custom', source: '6', target: '22', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e6-23', type: 'custom', source: '6', target: '23', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },

    { id: 'e3-24', type: 'custom', source: '3', target: '24', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-25', type: 'custom', source: '3', target: '25', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-26', type: 'custom', source: '3', target: '26', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-27', type: 'custom', source: '3', target: '27', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-28', type: 'custom', source: '3', target: '28', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
];