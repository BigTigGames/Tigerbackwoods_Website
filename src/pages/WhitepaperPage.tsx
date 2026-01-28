import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';

const WhitepaperPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              TigerLinkz Whitepaper
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive documentation of our game-first Web3 platform, tokenomics, and roadmap
            </p>
            
            {/* Download Options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/TigerLinkz_Whitepaper_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>
              <a
                href="/TigerLinkz_Whitepaper_Full.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 drop-shadow-lg flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View in Browser
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Whitepaper Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                What's Inside
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Executive Summary</h3>
                    <p className="text-gray-400">Overview of TigerLinkz vision and core principles</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Game-First Philosophy</h3>
                    <p className="text-gray-400">Why fun comes first and tokens amplify the experience</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-yellow-600 to-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Tokenomics & Economy</h3>
                    <p className="text-gray-400">Detailed breakdown of token distribution and economic model</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Technical Architecture</h3>
                    <p className="text-gray-400">Platform infrastructure and security measures</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Roadmap & Future</h3>
                    <p className="text-gray-400">Development timeline and long-term vision</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-800/50 backdrop-blur-sm">
                <div className="text-center">
                  <FileText className="w-24 h-24 text-orange-400 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-4">Comprehensive Documentation</h3>
                  <p className="text-gray-300 mb-6">
                    Our whitepaper provides in-depth analysis of the TigerLinkz ecosystem, 
                    covering everything from game mechanics to token economics.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-black/40 p-3 rounded-lg">
                      <div className="text-orange-400 font-bold">Pages</div>
                      <div className="text-white">25+</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg">
                      <div className="text-orange-400 font-bold">Sections</div>
                      <div className="text-white">8</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg">
                      <div className="text-orange-400 font-bold">Charts</div>
                      <div className="text-white">12+</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg">
                      <div className="text-orange-400 font-bold">Updated</div>
                      <div className="text-white">2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Key Highlights
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential insights from our comprehensive whitepaper
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Skill-Based Earning</h3>
              <p className="text-gray-400">
                Rewards are tied to gameplay skill and progression, not speculation or luck-based mechanics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-orange-900/30 to-yellow-900/30 p-6 rounded-xl border border-orange-800/50 hover:border-yellow-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Sustainable Economy</h3>
              <p className="text-gray-400">
                Balanced token sinks and sources ensure long-term economic stability and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-yellow-900/30 to-red-900/30 p-6 rounded-xl border border-yellow-800/50 hover:border-red-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Free-to-Play Onboarding</h3>
              <p className="text-gray-400">
                No crypto wallet required to start playing - seamless Web2 to Web3 transition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-800/50 hover:border-pink-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Anti-Cheat Systems</h3>
              <p className="text-gray-400">
                Advanced detection and prevention systems maintain competitive integrity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-gradient-to-br from-green-900/30 to-teal-900/30 p-6 rounded-xl border border-green-800/50 hover:border-teal-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Multi-Game Ecosystem</h3>
              <p className="text-gray-400">
                Unified token and progression system across multiple game titles and genres.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-800/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">Community Governance</h3>
              <p className="text-gray-400">
                Token holders participate in key decisions about platform development and direction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Ready to Dive Deeper?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download the complete whitepaper to explore our vision, technology, and roadmap in detail.
            </p>
            <a
              href="/TigerLinkz_Whitepaper_Full.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-12 py-6 rounded-full font-bold text-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg inline-flex items-center gap-3"
            >
              <Download className="w-6 h-6" />
              Download Full Whitepaper
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhitepaperPage;