import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Clock, Users, Target } from 'lucide-react';

const GamesPage = () => {
  const heroImages = ['/hero-1.jpg', '/hero-2.jpg', '/hero-3.jpg', '/hero-4.jpg'];
  const games = [
    {
      id: 1,
      title: 'TigerBackwoods Jump',
      description: 'Jump into nostalgia! Experience the thrill of retro 8-bit gameplay and relive the classic fun.',
      emoji: '🥊',
      status: 'live',
      players: '2,340',
      rewards: '500 $TGBW',
      color: 'from-red-600 to-orange-600',
      bg: heroImages[0]
    },
    {
      id: 2,
      title: 'TigerBackwoods Boxing',
      description: 'Unleash your inner beast! Tap to destroy punching bags in this action-packed boxing challenge.',
      emoji: '⛳',
      status: 'live',
      players: '1,890',
      rewards: '300 $TGBW',
      color: 'from-green-600 to-emerald-600',
      bg: heroImages[1]
    },
    {
      id: 3,
      title: 'TigerBackwoods Flap',
      description: 'Flap your way to victory! A modern spin on the classic Flappy Bird, with play-to-earn rewards.',
      emoji: '🎰',
      status: 'live',
      players: '3,120',
      rewards: '1,000 $TGBW',
      color: 'from-purple-600 to-pink-600',
      bg: heroImages[2]
    },
    {
      id: 4,
      title: 'TigerBackwoods Golf',
      description: 'The golfing craze continues! Hit the greens in this classic and addictive golf experience.',
      emoji: '🏎️',
      status: 'coming-soon',
      players: '0',
      rewards: '750 $TGBW',
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
      rewards: '1,500 $TGBW',
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
      rewards: '2,000 $TGBW',
      color: 'from-yellow-600 to-orange-600',
      bg: heroImages[1]
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'TigerKing', score: 12450, rewards: '5,000 $TGBW' },
    { rank: 2, name: 'JungleBeast', score: 11200, rewards: '3,000 $TGBW' },
    { rank: 3, name: 'BoxingChamp', score: 10800, rewards: '2,000 $TGBW' },
    { rank: 4, name: 'WildCard', score: 9500, rewards: '1,500 $TGBW' },
    { rank: 5, name: 'StealthTiger', score: 8900, rewards: '1,000 $TGBW' },
  ];

  const mainGame = {
    title: 'Tiger Links',
    description: 'Match 3 with a twist! Play, compete, and win high-ticket rewards in thrilling PVP matches.',
    bg: '/Tigerlinks-1.png',
    status: 'live',
    players: '5,000+',
    rewards: '10,000 $TGBW',
  };

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img src="/hero-3.jpg" alt="Game Arena Background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl"
            >
              Game Arena
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg"
            >
              Play, compete, and earn $TGBW tokens in our collection of tiger-themed games
            </motion.p>
          </div>

          {/* Connect Wallet Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 mb-12"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Connect Your Wallet</h3>
                <p className="text-gray-400">Connect your Web3 wallet to start earning $TGBW tokens</p>
              </div>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Game Tile */}
      <section className="flex justify-center mb-16">
        <div className="relative w-full max-w-7xl mx-auto h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
          {/* Background Image */}
          <img src={mainGame.bg} alt="Main Game" className="absolute inset-0 w-full h-full object-cover object-center z-0" />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          {/* Content */}
          <div className="relative z-20 flex flex-col h-full justify-center items-start px-8 md:px-16">
            <div className="mb-4 flex flex-col items-start">
              <img src="/match 3.png" alt="Tiger Links Icon" className="w-20 h-20 md:w-24 md:h-24 rounded-full object-contain mb-4 bg-black/20" />
              <span className="inline-block bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold px-4 py-1 rounded-full mb-4 shadow-lg">MAIN GAME</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">{mainGame.title}</h2>
              <p className="text-lg md:text-2xl text-gray-100 mb-6 max-w-2xl drop-shadow-lg">{mainGame.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="https://fishanmango.itch.io/match-3-live"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center gap-2"
              >
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M14.752 11.168l-6.518-3.759A1 1 0 007 8.06v7.88a1 1 0 001.234.97l6.518-1.878A1 1 0 0016 14.06V9.94a1 1 0 00-1.248-.772z' /></svg>
                Play Now
              </a>
              <div className="flex flex-row gap-8 text-lg text-gray-200 font-semibold items-center">
                <span><b>Players:</b> {mainGame.players}</span>
                <span><b>Max Reward:</b> <span className="text-orange-400 font-bold">{mainGame.rewards}</span></span>
              </div>
            </div>
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
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 z-20 relative ${
                    game.status === 'live'
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white'
                      : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                  }`}>
                    {game.status === 'live' ? (
                      <div className="flex items-center justify-center space-x-2">
                        <Play className="w-5 h-5" />
                        <span>Play Now</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Clock className="w-5 h-5" />
                        <span>Coming Soon</span>
                      </div>
                    )}
                  </button>
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