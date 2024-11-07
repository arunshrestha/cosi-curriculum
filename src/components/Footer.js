import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    {/* Logo and Brand Name */}
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold">Brandeis University</h1>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-8 text-center border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400">&copy; 2024 Brandeis University. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
