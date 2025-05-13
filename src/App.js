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

  let content = null;
  if (view === 'pre-requisites') {
    content = <PreRequisitesView filter={preReqFilter} />;
  } else if (view === 'next-classes') {
    content = <NextClassesView filter={nextClassesFilter} />;
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
