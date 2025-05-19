import React from 'react';
import NextClassesFlowchart from './NextClassesFlowchart';
//import PreRequisitesFlowchart from './PreRequisitesFlowchart';

const NextClassesView = ({ filter, csvData }) => {
  return (
    <div className="p-4">
      <NextClassesFlowchart filter={filter} csvData={csvData} />
    </div>
  );
};

export default NextClassesView;
