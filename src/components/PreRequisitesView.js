import React from 'react';
import CollapsibleNodeFlowchart from './CollapsibleNodeFlowchart';

const PreRequisitesView = ({ filter }) => {
  return (
    <div className="p-4">
      <CollapsibleNodeFlowchart filter={filter} />
    </div>
  );
};

export default PreRequisitesView;
