import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PreRequisitesView from './components/PreRequisitesView';
import NextClassesView from './components/NextClassesView';

const App = () => {
  const [view, setView] = useState('pre-requisites');
  const [preReqFilter, setPreReqFilter] = useState('Both');
  const [nextClassesFilter, setNextClassesFilter] = useState('Both');

  const handleToggleView = (viewName) => {
    setView(viewName);
  };

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

      <div style={{ display: view === 'pre-requisites' ? 'block' : 'none' }}>
        {/* Pass the preReqFilter to the flowchart inside PreRequisitesView */}
        <PreRequisitesView filter={preReqFilter} />
      </div>

      <div style={{ display: view === 'next-classes' ? 'block' : 'none' }}>
        {/* Pass the nextClassesFilter to the flowchart inside NextClassesView */}
        <NextClassesView filter={nextClassesFilter} />
      </div>

      <Footer />
    </div>
  );
};

export default App;
