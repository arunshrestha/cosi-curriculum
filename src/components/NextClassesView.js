import React from 'react';
//import NextClassesFlowchart from './NextClassesFlowchart';
import PreRequisitesFlowchart from './PreRequisitesFlowchart';

const NextClassesView = ({ filter }) => {
  return (
    <div className="p-4">
      <PreRequisitesFlowchart filter={filter} />
    </div>
  );
};

export default NextClassesView;
