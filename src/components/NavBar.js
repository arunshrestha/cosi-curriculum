import React, { useState } from 'react';

const NavBar = ({ onToggleView }) => {
    const [activeView, setActiveView] = useState('pre-requisites');

    const handleClick = (view) => {
        setActiveView(view);
        onToggleView(view);
    };

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex space-x-4">
                <li
                    onClick={() => handleClick('pre-requisites')}
                    className={`cursor-pointer text-white ${activeView === 'pre-requisites' ? 'font-bold underline' : 'hover:underline'}`}
                >
                    Pre-Requisites
                </li>
                <li
                    onClick={() => handleClick('next-classes')}
                    className={`cursor-pointer text-white ${activeView === 'next-classes' ? 'font-bold underline' : 'hover:underline'}`}
                >
                    Next Classes
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;