import RoundedBoxNode from './nodes/RoundedBoxNode';
import CustomNode from './nodes/CustomNode';

export const nodeTypes = {
    custom: (props) => <CustomNode {...props} />,
    RoundedBoxNode: (props) => <RoundedBoxNode {...props} />,
};
