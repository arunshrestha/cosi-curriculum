import React from 'react';
import PreRequisitesFlowchart from './PreRequisitesFlowchart';
//import NextClassesFlowchart from './NextClassesFlowchart';

const PreRequisitesView = ({ filter }) => {
  return (
    <div className="p-4">
      <PreRequisitesFlowchart filter={filter} />
    </div>
  );
};

export default PreRequisitesView;
