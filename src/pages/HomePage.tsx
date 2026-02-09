import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TrendingUp, Users, Gamepad2, Coins, Flame, Lock, Wallet, Trophy, Zap, ArrowRight, Target, Shield } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
  // State for real-time market cap
  const [marketCap, setMarketCap] = useState('$252,000');
  const [isLoadingMarketCap, setIsLoadingMarketCap] = useState(false);

  // Function to fetch market cap from Birdeye
  const fetchMarketCap = async () => {
    try {
      setIsLoadingMarketCap(true);
      const response = await fetch('https://public-api.birdeye.so/public/token/6GTBQj1w2AH7xTLrCGijFTHFyjBUZL1Zq2jX1AdSpump');
      const data = await response.json();
      // Birdeye returns market cap as data.data.market_cap_usd or similar
      if (data.data && (data.data.market_cap_usd || data.data.market_cap)) {
        const marketCapValue = parseFloat(data.data.market_cap_usd || data.data.market_cap);
        const formattedMarketCap = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(marketCapValue);
        setMarketCap(formattedMarketCap);
      } else if (data.data && data.data.price) {
        // Fallback: calculate market cap if price and supply are available
        const price = parseFloat(data.data.price);
        const circulatingSupply = 623000000; // ~623,000,000 from stats
        const calculatedMarketCap = price * circulatingSupply;
        const formattedMarketCap = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(calculatedMarketCap);
        setMarketCap(formattedMarketCap);
      }
    } catch (error) {
      console.error('Error fetching market cap:', error);
    } finally {
      setIsLoadingMarketCap(false);
    }
  };

  // Fetch market cap on component mount and every 30 seconds
  useEffect(() => {
    fetchMarketCap();
    const interval = setInterval(fetchMarketCap, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Hero slider images
  const heroImages = [
    {
      src: '/hero-1.jpg', // Replace with your image path
      alt: 'Tiger in the wild',
      title: 'The King of the Jungle',
      description: 'Dominating the crypto space with raw power and determination'
    },
    {
      src: '/hero-2.jpg', // Replace with your image path
      alt: 'Crypto trading chart',
      title: 'Trading with the Tigers',
      description: 'Join the most aggressive trading community in crypto'
    },
    {
      src: '/hero-3.jpg', // Replace with your image path
      alt: 'Gaming setup',
      title: 'Gaming Empire',
      description: 'Play, earn, and dominate in our Tiger-themed games'
    },
    {
      src: '/hero-4.jpg', // Replace with your image path
      alt: 'Community celebration',
      title: 'Join the Pack',
      description: 'Be part of the fastest-growing meme coin community'
    }
  ];

  const stats = [
    { label: 'Total Supply', value: '1,000,000,000', description: 'Total Token Supply', icon: Coins },
    { label: '🔥 Tokens Burned', value: '100,000,000', description: 'Permanently Removed from Supply', icon: Flame },
    { label: '🔐 Locked Tokens', value: '277,000,000+', description: 'Locked for Game Rewards, Staking & Treasury', icon: Lock },
    { label: '💰 Circulating Supply', value: '~623,000,000', description: '(After Burn + Locks)', icon: Wallet },
    { label: '📈 Market Cap', value: isLoadingMarketCap ? 'Loading...' : marketCap, description: '(Live from Birdeye)', icon: TrendingUp },
    { label: '👥 Holders', value: '400+', description: 'Wallets Holding TigerLinks Token', icon: Users },
    { label: '🎮 Games', value: '12', description: 'Play-to-Earn Titles in the Ecosystem', icon: Gamepad2 },
  ];

  const roadmapItems = [
    { level: 'Level 1', title: 'Launch', description: 'Token launch and initial community building', completed: true },
    { level: 'Level 2', title: 'DEX Listings', description: 'Major exchange listings and liquidity', completed: true },
    { level: 'Level 3', title: 'Game Arena', description: 'Mini-games and earning mechanics', completed: false },
    { level: 'Level 4', title: 'NFT Collection', description: 'Exclusive Tiger NFTs for holders', completed: false },
    { level: 'Level 5', title: 'Mobile App', description: 'Full mobile gaming experience', completed: false },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section - Tigerlinkz Focus */}
      <section className="relative h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <video
            src="/video.mov"
            poster="/Tigerlinks-1.png"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
            onLoadStart={() => console.log('Hero video loading started')}
            onCanPlay={() => console.log('Hero video can play')}
            onError={(e) => console.error('Hero video error:', e)}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-transparent to-orange-900/20"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-left">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <span className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-4 shadow-lg">
                  🎮 FEATURED GAME
                </span>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                  A game‑first Web3 platform built for skill, progression, and longevity.
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl drop-shadow-lg">
                  Fun comes first. Tokens amplify the experience — they don't replace it.
                </p>
              </motion.div>

              {/* Game Stats */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-800/50">
                  <div className="text-2xl font-bold text-orange-400">Free-to-play onboarding</div>
                  <div className="text-gray-300 text-sm">No crypto required to start</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-800/50">
                  <div className="text-2xl font-bold text-orange-400">Closed-loop economy</div>
                  <div className="text-gray-300 text-sm">Balanced by sinks</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://tigerlinks.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.88a1 1 0 001.234.97l6.518-1.878A1 1 0 0016 14.06V9.94a1 1 0 00-1.248-.772z' /></svg>
                    Play Free
                  </a>
                  <Link
                    to="/whitepaper"
                    className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 drop-shadow-lg inline-flex items-center justify-center"
                  >
                    Read Whitepaper
                  </Link>
                </div>
                
                {/* Telegram Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://t.me/TIGERLINKZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 transform hover:scale-105 drop-shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join Telegram US
                  </a>
                  <a
                    href="https://t.me/+3tnLi0aMQso0MjU1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-6 py-3 rounded-full font-semibold text-base transition-all duration-200 transform hover:scale-105 drop-shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Users className="w-5 h-5" />
                    Join Telegram Philippines
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right Content - Game Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-2xl border border-red-800/50 backdrop-blur-sm">
                <img 
                  src="/match 3.png" 
                  alt="Tigerlinkz Game Icon" 
                  className="w-32 h-32 mx-auto mb-6 rounded-2xl object-cover shadow-2xl shadow-orange-500/50" 
                />
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Match-3 Revolution</h3>
                  <p className="text-gray-300 mb-6">
                    Experience the next evolution of puzzle gaming with blockchain rewards, competitive tournaments, and skill-based earning mechanics.
                  </p>
                  <div className="flex justify-center space-x-4 text-sm">
                    <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full">✓ Live</span>
                    <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full">PVP Ready</span>
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">Earn Tiger</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-3.jpg" 
            alt="Community Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-900/30 via-transparent to-orange-900/30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-lg">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg">
              Connect with thousands of players and traders in the TigerLinks ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.a
              href="https://x.com/tigerlinkz"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border-2 border-blue-800/50 hover:border-blue-500 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Follow on X</h3>
                <p className="text-gray-300 text-sm">Latest updates and announcements</p>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/TIGERLINKZ"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border-2 border-teal-800/50 hover:border-teal-500 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/30 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-600 to-teal-700 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Join Telegram US</h3>
                <p className="text-gray-300 text-sm">Chat with the US community</p>
              </div>
            </motion.a>

            <motion.a
              href="https://t.me/+3tnLi0aMQso0MjU1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border-2 border-cyan-800/50 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Join Telegram Philippines</h3>
                <p className="text-gray-300 text-sm">Chat with the Philippines community</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-black/60 backdrop-blur-md p-6 rounded-xl border-2 border-purple-800/50 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Join Discord</h3>
                <p className="text-gray-300 text-sm">Gaming and tournaments</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple steps to start your TigerLinks journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Play Free</h3>
              <p className="text-gray-400">Start playing immediately with no crypto wallet required. Jump into games and learn the mechanics.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Earn Tiger (in-game)</h3>
              <p className="text-gray-400">Earn Tiger currency through skillful gameplay, completing challenges, and winning matches.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">3</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Spend Tiger → unlock modes → optional token conversion</h3>
              <p className="text-gray-400">Use Tiger to unlock new game modes, purchase upgrades, or convert to TigerLinks Token where allowed.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Stats Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 font-semibold mb-1">{stat.label}</div>
                <div className="text-gray-500 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Roadmap Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Tiger's Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow the tiger through each level of our adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                  item.completed
                    ? 'bg-gradient-to-br from-green-900/30 to-emerald-900/30 border-green-500/50 hover:border-green-400'
                    : 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-800/50 hover:border-orange-500/50'
                }`}
              >
                <div className="text-center">
                  <div className={`text-sm font-semibold mb-2 ${item.completed ? 'text-green-400' : 'text-orange-400'}`}>
                    {item.level}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  {item.completed && (
                    <div className="mt-4 text-green-400 text-2xl">✓</div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why TigerLinks Wins Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Why TigerLinks Wins
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built for sustainable growth and competitive integrity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Skill over speculation</h3>
                <p className="text-gray-400">Success comes from gameplay mastery, not market timing</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-yellow-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Competitive integrity</h3>
                <p className="text-gray-400">Fair play mechanics with anti-cheat and skill-based matchmaking</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-red-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Sustainable economy</h3>
                <p className="text-gray-400">Balanced token sinks and sources for long-term stability</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Security-first shipping</h3>
                <p className="text-gray-400">Audited smart contracts and rigorous testing before launch</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Security Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Trust & Security
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with transparency and security at its core
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-xl border border-green-800/50 hover:border-green-500/50 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Audit Status</h3>
              <p className="text-gray-400">Smart contracts audited by leading security firms</p>
              <div className="mt-4">
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-sm">In Progress</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-800/50 hover:border-blue-500/50 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Lock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Anti-bot / Anti-abuse</h3>
              <p className="text-gray-400">Advanced detection systems prevent cheating and exploitation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Token Allocation</h3>
              <p className="text-gray-400">All token distributions and locks are publicly verifiable</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;