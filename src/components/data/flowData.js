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
        data: { courseNum: 'COSI 12B', courseTitle: 'Programming in Java', courseCategory: 'core' },
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
        data: { courseNum: 'COSI 114A', courseTitle: 'Fundamentals of NLP I', courseCategory: 'CL' },
        position: { x: 300, y: 0 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '4',
        type: 'custom',
        data: { courseNum: 'COSI 135B', courseTitle: 'Computational Semantics', courseCategory: 'CL' },
        position: { x: 300, y: 300 },
        parentId: '2',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '5',
        type: 'custom',
        data: { courseNum: 'COSI 115B', courseTitle: 'Fundamentals of NLP II', courseCategory: 'CL' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '6',
        type: 'custom',
        data: { courseNum: 'COSI 132A', courseTitle: 'Information Retrieval', courseCategory: 'CL' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '7',
        type: 'custom',
        data: { courseNum: 'COSI 136A', courseTitle: 'Speech Recognition', courseCategory: 'default' },
        position: { x: 100, y: 100 },
        parentId: '3',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '8',
        type: 'custom',
        data: { courseNum: 'COSI 230B', courseTitle: 'NL Annotation for ML', courseCategory: 'CL' },
        position: { x: 100, y: 100 },
        parentId: '5',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '9',
        type: 'custom',
        data: { courseNum: 'COSI 231A', courseTitle: 'Advanced ML for NLP', courseCategory: 'CL' },
        position: { x: 100, y: 100 },
        parentId: '5',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '10',
        type: 'custom',
        data: { courseNum: 'COSI 216A', courseTitle: 'Topics in NLP', courseCategory: 'Data Systems' },
        position: { x: 100, y: 100 },
        parentId: '5',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '11',
        type: 'custom',
        data: { courseNum: 'COSI 217B', courseTitle: 'NLP Systems', courseCategory: 'core' },
        position: { x: 100, y: 100 },
        parentId: '5',
        isVisible: true,
        isGrayscale: true,
    },
    {
        id: '12',
        type: 'custom',
        data: { courseNum: 'COSI 232B', courseTitle: 'Information Extraction', courseCategory: 'ML' },
        position: { x: 100, y: 100 },
        parentId: '9',
        isVisible: true,
        isGrayscale: true,
    },
];

export const initialEdges = [
    { id: 'e1-2', type: 'custom', source: '1', target: '2', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-3', type: 'custom', source: '2', target: '3', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e2-4', type: 'custom', source: '2', target: '4', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-5', type: 'custom', source: '3', target: '5', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-6', type: 'custom', source: '3', target: '6', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e3-7', type: 'custom', source: '3', target: '7', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e5-8', type: 'custom', source: '5', target: '8', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e5-9', type: 'custom', source: '5', target: '9', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e5-10', type: 'custom', source: '5', target: '10', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e5-11', type: 'custom', source: '5', target: '11', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
    { id: 'e9-12', type: 'custom', source: '9', target: '12', markerEnd: { type: MarkerType.ArrowClosed, width: 20, height: 20, color: '#333' }, style: { stroke: '#333' }, isVisible: true, isGrayscale: true },
];