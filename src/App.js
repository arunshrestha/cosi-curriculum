import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PreRequisitesView from './components/PreRequisitesView';
import NextClassesView from './components/NextClassesView';
//import CollapsibleNodeFlowchart from './components/CollapsibleNodeFlowchart';

const App = () => {
  const [view, setView] = useState('pre-requisites');

  const handleToggleView = (viewName) => {
    setView(viewName);
  };

  return (
    <div>
      <Header />
      <NavBar onToggleView={handleToggleView} />

      <div style={{ display: view === 'pre-requisites' ? 'block' : 'none' }}>
        <PreRequisitesView />
      </div>

      <div style={{ display: view === 'next-classes' ? 'block' : 'none' }}>
        <NextClassesView />
      </div>

      <Footer />
    </div>
  );
};

export default App;
