import React from 'react';
import CollapsibleNodeFlowchart from './CollapsibleNodeFlowchart';

const PreRequisitesView = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Prerequisite View</h1>
      <CollapsibleNodeFlowchart />
    </div>
  );
};

export default PreRequisitesView;