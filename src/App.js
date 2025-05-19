import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PreRequisitesView from './components/PreRequisitesView';
import NextClassesView from './components/NextClassesView';
import courseData from './components/data/courseData.csv';
import Papa from 'papaparse';

const App = () => {
  const [view, setView] = useState('pre-requisites');
  const [preReqFilter, setPreReqFilter] = useState('Both');
  const [nextClassesFilter, setNextClassesFilter] = useState('Both');
  const [csvData, setCsvData] = useState(null);

  const handleToggleView = (viewName) => {
    setView(viewName);
  };

  useEffect(() => {
    fetch(courseData)
      .then((response) => response.text())
      .then((csvText) => {
        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const dataMap = results.data.reduce((acc, row) => {
              acc[row.id.trim()] = row;
              return acc;
            }, {});
            setCsvData(dataMap);
          },
        });
      });
  }, []);

  let content = null;
  if (view === 'pre-requisites') {
    content = <PreRequisitesView filter={preReqFilter} csvData={csvData} />;
  } else if (view === 'next-classes') {
    content = <NextClassesView filter={nextClassesFilter} csvData={csvData} />;
  }

  return (
    <div>
      <Header />

      <NavBar
        onToggleView={handleToggleView}
        currentView={view}
        preReqFilter={preReqFilter}
        onPreReqFilterChange={(e) => setPreReqFilter(e.target.value)}
        nextClassesFilter={nextClassesFilter}
        onNextClassesFilterChange={(e) => setNextClassesFilter(e.target.value)}
      />

      {content}

      <Footer />
    </div>
  );
};

export default App;
