import React from 'react';
import CollapsibleNodeFlowchart from './CollapsibleNodeFlowchart';

const NextClassesView = ({ filter }) => {
  return (
    <div className="p-4">
      <CollapsibleNodeFlowchart filter={filter} />
    </div>
  );
};

export default NextClassesView;
