import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'About', path: '/about' },
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
            {navItems.map((item) => (
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
            <a
              href="https://raydium.io/swap/?inputMint=sol&outputMint=6GTBQj1w2AH7xTLrCGijFTHFyjBUZL1Zq2jX1AdSpump"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
            >
              Buy Now
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
            {navItems.map((item) => (
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
            <a
              href="https://raydium.io/swap/?inputMint=sol&outputMint=6GTBQj1w2AH7xTLrCGijFTHFyjBUZL1Zq2jX1AdSpump"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-2 rounded-full font-semibold transition-all duration-200 text-center block"
            >
              Buy Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;