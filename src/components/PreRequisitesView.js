import React from 'react';
import PreRequisitesFlowchart from './PreRequisitesFlowchart';
//import NextClassesFlowchart from './NextClassesFlowchart';

const PreRequisitesView = ({ filter, csvData }) => {
  return (
    <div className="p-4">
      <PreRequisitesFlowchart filter={filter} csvData={csvData} />
    </div>
  );
};

export default PreRequisitesView;
