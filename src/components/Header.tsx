import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="flex justify-between">
                <div>
                <Link to="/" className="px-2">Home</Link>
                <Link to="/view-books" className="px-2">View Books</Link>
                <Link to="/rent-books" className="px-2">Rent Books</Link>
                <Link to="/about-us" className="px-2">About Us</Link>
                <Link to="/contact-us" className="px-2">Contact Us</Link>
                </div>
                <div>
                <Link to="/login" className="px-2">Login</Link>
                <Link to="/signup" className="px-2">Sign Up</Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;
