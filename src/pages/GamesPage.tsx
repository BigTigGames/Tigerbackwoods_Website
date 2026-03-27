import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Clock, Users, Target } from 'lucide-react';

const GamesPage = () => {
  const heroImages = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg', '/hero-4.jpg'];
  const games = [
    {
      id: 1,
      title: 'Tigerlinkz Jump',
      description: 'Jump into nostalgia! Experience the thrill of retro 8-bit gameplay and relive the classic fun.',
      emoji: '🥊',
      status: 'live',
      players: '2,340',
      rewards: '500 TigerLinks',
      color: 'from-red-600 to-orange-600',
      bg: heroImages[0]
    },
    {
      id: 2,
      title: 'Tigerlinkz Boxing',
      description: 'Unleash your inner beast! Tap to destroy punching bags in this action-packed boxing challenge.',
      emoji: '⛳',
      status: 'live',
      players: '1,890',
      rewards: '300 TigerLinks',
      color: 'from-green-600 to-emerald-600',
      bg: heroImages[1]
    },
    {
      id: 3,
      title: 'Tigerlinkz Flap',
      description: 'Flap your way to victory! A modern spin on the classic Flappy Bird, with play-to-earn rewards.',
      emoji: '🎰',
      status: 'live',
      players: '3,120',
      rewards: '1,000 TigerLinks',
      color: 'from-purple-600 to-pink-600',
      bg: heroImages[2]
    },
    {
      id: 4,
      title: 'Tigerlinkz Golf',
      description: 'The golfing craze continues! Hit the greens in this classic and addictive golf experience.',
      emoji: '🏎️',
      status: 'coming-soon',
      players: '0',
      rewards: '750 TigerLinks',
      color: 'from-blue-600 to-cyan-600',
      bg: heroImages[3]
    },
    {
      id: 5,
      title: 'Battle Arena',
      description: 'PvP combat with legendary tiger warriors',
      emoji: '⚔️',
      status: 'coming-soon',
      players: '0',
      rewards: '1,500 TigerLinks',
      color: 'from-red-600 to-pink-600',
      bg: heroImages[0]
    },
    {
      id: 6,
      title: 'Treasure Hunt',
      description: 'Explore hidden caves and find ancient treasures',
      emoji: '💎',
      status: 'coming-soon',
      players: '0',
      rewards: '2,000 TigerLinks',
      color: 'from-yellow-600 to-orange-600',
      bg: heroImages[1]
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'TigerKing', score: 12450, rewards: '5,000 TigerLinks' },
    { rank: 2, name: 'JungleBeast', score: 11200, rewards: '3,000 TigerLinks' },
    { rank: 3, name: 'BoxingChamp', score: 10800, rewards: '2,000 TigerLinks' },
    { rank: 4, name: 'WildCard', score: 9500, rewards: '1,500 TigerLinks' },
    { rank: 5, name: 'StealthTiger', score: 8900, rewards: '1,000 TigerLinks' },
  ];

  const mainGame = {
    title: 'Tiger Links',
    description: 'Match 3 with a twist! Play, compete, and win high-ticket rewards in thrilling PVP matches.',
    bg: '/Tigerlinks-1.png',
    status: 'live',
    players: '5,000+',
    rewards: '10,000 TigerLinks',
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                  Tigerlinkz
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl drop-shadow-lg">
                  The ultimate Match-3 experience with a twist! Connect, compete, and conquer in thrilling PVP matches while earning TigerLinks rewards.
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
                  <div className="text-2xl font-bold text-orange-400">5,000+</div>
                  <div className="text-gray-300 text-sm">Active Players</div>
                </div>
                <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-red-800/50">
                  <div className="text-2xl font-bold text-orange-400">10,000 TigerLinks</div>
                  <div className="text-gray-300 text-sm">Max Rewards</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://tigerlinkz.io/Match3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center justify-center gap-2"
                >
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.88a1 1 0 001.234.97l6.518-1.878A1 1 0 0016 14.06V9.94a1 1 0 00-1.248-.772z' /></svg>
                  Play Tigerlinkz Now
                </a>
                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 drop-shadow-lg">
                  Connect Wallet
                </button>
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
                    <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full">Earn TigerLinks</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Mini Games Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-left mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
          Mini Games
        </h2>
      </div>

      {/* Games Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {games.map((game, index) => (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className={`relative p-6 rounded-xl border-2 transition-all duration-300 overflow-hidden hover:scale-105 ${
                  game.status === 'live' 
                    ? 'border-red-800/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}>
                  {/* Background Image */}
                  <img src={game.bg} alt="Game background" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
                  {/* Overlay */}
                  <div className={`absolute inset-0 z-10 ${
                    game.status === 'live'
                      ? 'bg-black/60'
                      : 'bg-black/80'
                  }`}></div>

                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold z-20 ${
                    game.status === 'live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {game.status === 'live' ? 'LIVE' : 'COMING SOON'}
                  </div>

                  {/* Game Icon */}
                  <div className="text-center mb-6 z-20 relative">
                    <div className={`w-24 h-24 bg-gradient-to-br ${game.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {game.id === 1 && (
                        <img src="/jump icon.png" alt="Jump Icon" className="w-24 h-24 object-cover rounded-full" />
                      )}
                      {game.id === 2 && (
                        <img src="/boxing.png" alt="Boxing Icon" className="w-24 h-24 object-cover rounded-full" />
                      )}
                      {game.id === 3 && (
                        <img src="/flapy.png" alt="Flap Icon" className="w-24 h-24 object-cover rounded-full" />
                      )}
                      {game.id === 4 && (
                        <img src="/golf.png" alt="Golf Icon" className="w-24 h-24 object-cover rounded-full" />
                      )}
                      {game.id > 4 && (
                        <span className="text-4xl">{game.emoji}</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-gray-400">{game.description}</p>
                  </div>

                  {/* Game Stats */}
                  <div className="space-y-3 mb-6 z-20 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Players</span>
                      </div>
                      <span className="text-sm font-semibold text-white">{game.players}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Trophy className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">Max Reward</span>
                      </div>
                      <span className="text-sm font-semibold text-orange-400">{game.rewards}</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  {game.status === 'live' ? (
                    <a
                      href={
                        game.id === 1 ? 'https://www.tiger-backwoods.com/Tigerlinkzjump' :
                        game.id === 2 ? 'https://www.tiger-backwoods.com/Tigerlinkzboxing' :
                        game.id === 3 ? 'https://www.tiger-backwoods.com/Tigerlinkzflap' :
                        game.id === 4 ? 'https://www.tiger-backwoods.com/Tigerlinkzgolf' :
                        '#'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-full font-semibold transition-all duration-200 z-20 relative bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white flex items-center justify-center space-x-2"
                    >
                      <Play className="w-5 h-5" />
                      <span>Play Now</span>
                    </a>
                  ) : (
                    <button className="w-full py-3 rounded-full font-semibold transition-all duration-200 z-20 relative bg-gray-700 text-gray-400 cursor-not-allowed flex items-center justify-center space-x-2">
                      <Clock className="w-5 h-5" />
                      <span>Coming Soon</span>
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leaderboard */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Top Players
            </h2>
            <p className="text-xl text-gray-300">
              Compete for the top spots and earn exclusive rewards
            </p>
          </div>

          <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50">
            <div className="space-y-4">
              {leaderboard.map((player, index) => (
                <motion.div
                  key={player.rank}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                    player.rank === 1 
                      ? 'bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border border-yellow-600/50' 
                      : 'bg-gray-900/30 hover:bg-gray-800/30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      player.rank === 1 ? 'bg-yellow-600 text-black' :
                      player.rank === 2 ? 'bg-gray-400 text-black' :
                      player.rank === 3 ? 'bg-orange-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}>
                      {player.rank}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{player.name}</div>
                      <div className="text-sm text-gray-400">{player.score.toLocaleString()} points</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-orange-400">{player.rewards}</div>
                    <div className="text-sm text-gray-400">Total Earned</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GamesPage;