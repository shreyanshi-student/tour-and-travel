import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../../assets/images/login2kasi-logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Offerlist', href: '/offerlist' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gradient-to-r from-gray-900 to-gray-800 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-[50]">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
         <a href='/'> <img src={logo} alt="Logo" className="h-12 object-contain drop-shadow" /></a>  
            
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-300 border-b-2 border-transparent hover:border-gray-400 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-white">
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4 shadow-inner animate-slide-down">
          <nav className="flex flex-col space-y-3 font-medium text-white">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="hover:text-gray-300 transition"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
