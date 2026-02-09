import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const playerNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'FAQ', path: '/faq' },
  ];

  const tokenNavItems = [
    { name: 'Token', path: '/tokenomics' },
    { name: 'Economy', path: '/economy' },
    { name: 'Roadmap', path: '/roadmap' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img src="/TGBW web icon.png" alt="TGBW Logo" style={{ width: '15.5rem', height: 'auto' }} className="object-contain rounded-full group-hover:scale-110 transition-transform duration-200" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {playerNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium transition-all duration-200 hover:text-orange-400 ${
                  isActive(item.path)
                    ? 'text-orange-400 border-b-2 border-orange-400'
                    : 'text-gray-300 hover:border-b-2 hover:border-orange-400'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Token Navigation Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-orange-400 transition-all duration-200 flex items-center">
                Token Info
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-black/95 backdrop-blur-md border border-red-900/50 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {tokenNavItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-red-900/20 transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/whitepaper"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-red-900/20 transition-all duration-200"
                >
                  Whitepaper
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-red-900/20 transition-all duration-200"
                >
                  About
                </Link>
                <Link
                  to="/legal"
                  className="block px-4 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-red-900/20 transition-all duration-200"
                >
                  Legal
                </Link>
              </div>
            </div>

            <a
              href="https://tigerlinks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Play Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-900/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {playerNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-orange-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-red-900/20'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="border-t border-red-900/50 mt-4 pt-4">
              <div className="text-xs text-gray-500 uppercase tracking-wide px-3 mb-2">Token Info</div>
              {tokenNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-orange-400 bg-red-900/20'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-red-900/20'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/whitepaper"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/whitepaper')
                    ? 'text-orange-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-red-900/20'
                }`}
              >
                Whitepaper
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/about')
                    ? 'text-orange-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-red-900/20'
                }`}
              >
                About
              </Link>
              <Link
                to="/legal"
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 text-base font-medium transition-all duration-200 ${
                  isActive('/legal')
                    ? 'text-orange-400 bg-red-900/20'
                    : 'text-gray-300 hover:text-orange-400 hover:bg-red-900/20'
                }`}
              >
                Legal
              </Link>
            </div>
            
            <a
              href="https://tigerlinks.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 text-center block"
            >
              Play Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;