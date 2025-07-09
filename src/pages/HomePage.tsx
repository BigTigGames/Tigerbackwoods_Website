import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Gamepad2, Coins, ArrowRight, Target, Zap, Trophy } from 'lucide-react';
import ImageSlider from '../components/ImageSlider';

const HomePage = () => {
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
    { label: 'Total Supply', value: '1,000,000,000', icon: Coins },
    { label: 'Holders', value: '50,000+', icon: Users },
    { label: 'Games', value: '12', icon: Gamepad2 },
    { label: 'Market Cap', value: '$2.5M', icon: TrendingUp },
  ];

  const roadmapItems = [
    { level: 'Level 1', title: 'Launch', description: 'Token launch and initial community building', completed: true },
    { level: 'Level 2', title: 'DEX Listings', description: 'Major exchange listings and liquidity', completed: true },
    { level: 'Level 3', title: 'Game Arena', description: 'Mini-games and earning mechanics', completed: false },
    { level: 'Level 4', title: 'NFT Collection', description: 'Exclusive Tiger NFTs for holders', completed: false },
    { level: 'Level 5', title: 'Mobile App', description: 'Full mobile gaming experience', completed: false },
  ];

  const utilities = [
    {
      title: '$BACKWOODS Token',
      description: 'Earn, stake, and trade the most aggressive meme coin in the jungle',
      icon: Zap,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Arcade Games',
      description: 'Play Tiger-themed mini-games and compete for rewards',
      icon: Gamepad2,
      color: 'from-orange-600 to-yellow-600'
    },
    {
      title: 'NFT Rewards',
      description: 'Collect rare Tiger NFTs and unlock exclusive benefits',
      icon: Trophy,
      color: 'from-yellow-600 to-red-600'
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Full Screen Image Slider */}
        <ImageSlider 
          images={heroImages}
          autoPlayInterval={4000}
          showNavigation={true}
          showDots={true}
        />
        
        {/* Hero Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
        
        <div className="absolute inset-0 flex items-center z-10">
          <div className="text-left max-w-4xl px-4 sm:px-6 lg:px-8 ml-8 md:ml-16 lg:ml-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                The Meme Coin with the Punch
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg">
                TigerBackwoods ($TGBW) - Where memes meet mayhem in the wildest crypto jungle
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-start"
            >
              <a
                href="https://dexscreener.com/solana/6GTBQj1w2AH7xTLrCGijFTHFyjBUZL1Zq2jX1AdSpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center justify-center"
              >
                Buy $TGBW
              </a>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 drop-shadow-lg">
                Join Telegram
              </button>
              <button className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 drop-shadow-lg">
                View Chart
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-red-500 rounded-full animate-pulse z-20"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-bounce z-20"></div>
        <div className="absolute bottom-20 left-20 w-3 h-3 bg-yellow-500 rounded-full animate-pulse z-20"></div>
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
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
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

      {/* Utility Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              More Than a Meme
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Backwoods is building a meme gaming empire with real utility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {utilities.map((utility, index) => (
              <motion.div
                key={utility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 hover:scale-105">
                  <div className={`w-16 h-16 bg-gradient-to-br ${utility.color} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <utility.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{utility.title}</h3>
                  <p className="text-gray-400">{utility.description}</p>
                  <div className="flex items-center mt-4 text-orange-400 group-hover:text-orange-300 transition-colors">
                    <span className="text-sm font-semibold">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Join the Pack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with thousands of degens in the Tiger community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-blue-900/30 to-blue-700/30 p-8 rounded-xl border border-blue-800/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Twitter</h3>
                <p className="text-gray-400">Latest updates and memes</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-teal-900/30 to-teal-700/30 p-8 rounded-xl border border-teal-800/50 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Telegram</h3>
                <p className="text-gray-400">Chat with the community</p>
              </div>
            </motion.a>

            <motion.a
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/30 to-purple-700/30 p-8 rounded-xl border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105 group"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Discord</h3>
                <p className="text-gray-400">Gaming and tournaments</p>
              </div>
            </motion.a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;