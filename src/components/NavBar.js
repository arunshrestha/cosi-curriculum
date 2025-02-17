import React, { useState } from 'react';
import FilterControls from './FilterControls';

const NavBar = ({
  onToggleView,
  currentView,
  preReqFilter,
  nextClassesFilter,
  onPreReqFilterChange,
  onNextClassesFilterChange,
}) => {
  return (
    <nav className="bg-gray-800 p-3 flex items-center space-x-4"> 
      <ul className="flex space-x-4">
        <li
          onClick={() => onToggleView('pre-requisites')}
          className={`cursor-pointer text-white ${currentView === 'pre-requisites' ? 'font-bold underline' : 'hover:underline'}`}
        >
          Pre-Requisites
        </li>
        <li
          onClick={() => onToggleView('next-classes')}
          className={`cursor-pointer text-white ${currentView === 'next-classes' ? 'font-bold underline' : 'hover:underline'}`}
        >
          Next Classes
        </li>
      </ul>
      {currentView === 'pre-requisites' && (
        <FilterControls filter={preReqFilter} onFilterChange={onPreReqFilterChange} />
      )}
      {currentView === 'next-classes' && (
        <FilterControls filter={nextClassesFilter} onFilterChange={onNextClassesFilterChange} />
      )}
    </nav>
  );
};

export default NavBar;
