import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, MessageCircle, Zap } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: 'https://x.com/tigerbckwoods', label: 'X' },
    { icon: MessageCircle, href: 'https://t.me/TIGERLINKZOFFICIAL', label: 'Telegram' },
    { icon: Twitter, href: 'https://x.com/tigerbckwoods', label: 'X' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'Tokenomics', path: '/tokenomics' },
    { name: 'About', path: '/about' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-red-950/20 border-t border-red-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Tigerlinkz
              </span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              The meme coin with the punch. Join the jungle and experience the wildest crypto adventure with $TGBW.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-red-900/30 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-orange-400 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-red-900/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Tigerlinkz. All rights reserved. Not financial advice.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span className="text-gray-400 text-sm">Powered by</span>
            <span className="text-orange-400 text-sm font-semibold">🐅 Tiger Power</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;