import React from 'react';
import logo from '../assets/Brandeis_logo_seal_white_digital.png';

const Header = () => {
    return (
        <header className="relative bg-[#003478] text-white p-4">
            <div className="container mx-auto flex flex-wrap items-center justify-center sm:justify-between text-center">
                {/* Logo on the left */}
                <div className="flex items-center space-x-3">
                    <img src={logo} alt="Logo" className="h-12 w-36 rounded-full" />
                </div>

                {/* Title in the center */}
                <h1 className="w-full flex-grow text-center sm:w-auto text-lg sm:text-2xl font-bold mt-2 sm:mt-0">
                    Brandeis Computer Science Curriculum
                </h1>
            </div>
        </header>
    );
};

export default Header;
