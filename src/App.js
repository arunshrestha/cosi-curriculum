import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
// import RoundedBox from './components/RoundedBox';
// import Arrow from './components/Arrow';
// import CollapsibleFlowchart from './components/CollapsibleFlowchart';
import CollapsibleNodeFlowchart from './components/CollapsibleNodeFlowchart';

function App() {
  return (
    <div>
      <Header />
      {/* <CollapsibleFlowchart /> */}
      <CollapsibleNodeFlowchart />
      {/* <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-gray-100 min-h-screen">
        <RoundedBox
          title="COSI 10a"
          content="Problem Solving in Python"
        />
        <Arrow />
        <RoundedBox
          title="COSI 12b"
          content="Programming in Java"
        />
        <Arrow />
        <RoundedBox
          title="COSI 114a"
          content="Fundamentals of NLP I"
        />
      </div> */}
      <Footer />
    </div>
  );
}

export default App;
