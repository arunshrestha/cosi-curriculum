import React from 'react';
import CollapsibleNodeFlowchart from './CollapsibleNodeFlowchart';

const NextClassesView = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Next Class View</h1>
      <CollapsibleNodeFlowchart key="nextClassesFlow" />
    </div>
  );
};

export default NextClassesView;