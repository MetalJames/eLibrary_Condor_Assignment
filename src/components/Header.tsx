import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { close, menu, libraryBook, cartBook } from '../assets';
import { useBookContext } from '../context/BookContext';

const Header: React.FC = () => {

    const { selectedBooks } = useBookContext();

    const navLinks = [
        {
            id: "home",
            title: "Home",
            link: "/",
        },
        {
            id: "viewbooks",
            title: "View Books",
            link: "/view-books",
        },
        {
            id: "aboutus",
            title: "About Us",
            link: "/about-us",
        },
        {
            id: "contactus",
            title: "Contact Us",
            link: "/contact-us",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const location = useLocation();

    return (
        <header className="bg-gray-800 text-white p-4">
            <nav className="hidden sm:flex justify-between items-center">
                <div className="flex items-center">
                    <Link to={'/'} className='cursor-pointer'>
                        <img src={libraryBook} alt="eLibrary Book Logo" className="w-[40px] mr-4" />
                    </Link>
                    {navLinks.map(({ id, title, link }) => (
                        <Link 
                            key={id} 
                            to={link} 
                            className={`px-2 ${location.pathname === link ? 'underline' : ''}`}
                        >
                            {title}
                        </Link>
                    ))}
                </div>
                <div className="flex items-center">
                    <Link to="/rent-books" className="relative mr-4">
                        <img src={cartBook} alt="Cart" className="w-6 h-6 ml-4" />
                        {selectedBooks.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {selectedBooks.length}
                            </span>
                        )}
                    </Link>
                    <Link to="/login" className="px-2">Login</Link>
                    <Link to="/signup" className="px-2">Sign Up</Link>
                </div>
            </nav>
            <div className='sm:hidden flex justify-between items-center'>
                <Link to={'/'} className='cursor-pointer' onClick={() => setIsMobileMenuOpen(false)}>
                    <img src={libraryBook} alt="eLibrary Book Logo" className="w-[40px]" />
                </Link>
                <div className='flex justify-center items-center'>
                    <Link to="/rent-books" className="relative mr-4">
                        <img src={cartBook} alt="Cart" className="w-6 h-6 ml-4" />
                        {selectedBooks.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                                {selectedBooks.length}
                            </span>
                        )}
                    </Link>
                    <button onClick={toggleMobileMenu} className="focus:outline-none">
                        <img src={isMobileMenuOpen ? close : menu} alt="menu" className="w-6 h-6" />
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="sm:hidden mt-2 p-6 bg-gray-800 absolute top-[90%] right-5 mx-4 my-2 min-w-[140px] rounded-xl sidebar z-50">
                    {navLinks.map(({ id, title, link }) => (
                        <Link key={id} to={link} onClick={() => setIsMobileMenuOpen(false)} className='block px-4 py-2'>{title}</Link>
                    ))}
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2">Login</Link>
                    <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2">Sign Up</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
