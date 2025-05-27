import React from 'react';
import logo from '../assets/Brandeis_logo_seal_white_digital.png';

const Header = () => {
    return (
        <header className="bg-[#003478] text-white p-4 flex items-center relative">
            {/* Logo absolutely left */}
            <div className="flex-shrink-0">
                <img src={logo} alt="Logo" className="h-12 w-36 rounded-full" />
            </div>
            {/* Title centered in available space */}
            <div className="flex-grow flex justify-center">
                <h1 className="text-lg sm:text-2xl font-bold text-center">
                    Brandeis Computer Science Curriculum
                </h1>
            </div>
            {/* Spacer to balance the logo width */}
            <div className="flex-shrink-0 w-36 h-12" />
        </header>
    );
};

export default Header;