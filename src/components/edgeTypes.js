import SampleEdge from './edges/SampleEdge';
import StraightLineEdge from './edges/StraightLineEdge';

export const edgeTypes = {
    custom: (props) => <SampleEdge {...props} />,
    StraightLineEdge: (props) => <StraightLineEdge {...props} />,
};
