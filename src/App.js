import React, { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PreRequisitesView from './components/PreRequisitesView';
import NextClassesView from './components/NextClassesView';
import CollapsibleNodeFlowchart from './components/CollapsibleNodeFlowchart';

const App = () => {
  const [view, setView] = useState('pre-requisites');

  const handleToggleView = (view) => {
    setView(view);
  };

  return (
    <div>
      <Header />
      <NavBar onToggleView={handleToggleView} />
      {view === 'pre-requisites' ? <PreRequisitesView /> : <NextClassesView />}
      <Footer />
    </div>
  );
};

export default App;