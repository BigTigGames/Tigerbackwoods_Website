import React from 'react';
import { motion } from 'framer-motion';
import { Play, Trophy, Clock, Users, Target } from 'lucide-react';

const GamesPage = () => {
  const games = [
    {
      id: 1,
      title: 'Tiger Boxing',
      description: 'Knockout opponents in the ring and earn $BACKWOODS',
      emoji: '🥊',
      status: 'live',
      players: '2,340',
      rewards: '500 $BACKWOODS',
      color: 'from-red-600 to-orange-600'
    },
    {
      id: 2,
      title: 'Jungle Golf',
      description: 'Perfect your swing in the wildest golf course',
      emoji: '⛳',
      status: 'live',
      players: '1,890',
      rewards: '300 $BACKWOODS',
      color: 'from-green-600 to-emerald-600'
    },
    {
      id: 3,
      title: 'Casino Royale',
      description: 'High stakes poker with the tiger elite',
      emoji: '🎰',
      status: 'live',
      players: '3,120',
      rewards: '1,000 $BACKWOODS',
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 4,
      title: 'Racing Thunder',
      description: 'Speed through the jungle in tiger-powered vehicles',
      emoji: '🏎️',
      status: 'coming-soon',
      players: '0',
      rewards: '750 $BACKWOODS',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      id: 5,
      title: 'Battle Arena',
      description: 'PvP combat with legendary tiger warriors',
      emoji: '⚔️',
      status: 'coming-soon',
      players: '0',
      rewards: '1,500 $BACKWOODS',
      color: 'from-red-600 to-pink-600'
    },
    {
      id: 6,
      title: 'Treasure Hunt',
      description: 'Explore hidden caves and find ancient treasures',
      emoji: '💎',
      status: 'coming-soon',
      players: '0',
      rewards: '2,000 $BACKWOODS',
      color: 'from-yellow-600 to-orange-600'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'TigerKing', score: 12450, rewards: '5,000 $BACKWOODS' },
    { rank: 2, name: 'JungleBeast', score: 11200, rewards: '3,000 $BACKWOODS' },
    { rank: 3, name: 'BoxingChamp', score: 10800, rewards: '2,000 $BACKWOODS' },
    { rank: 4, name: 'WildCard', score: 9500, rewards: '1,500 $BACKWOODS' },
    { rank: 5, name: 'StealthTiger', score: 8900, rewards: '1,000 $BACKWOODS' },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            >
              Game Arena
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Play, compete, and earn $BACKWOODS tokens in our collection of tiger-themed games
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
                <p className="text-gray-400">Connect your Web3 wallet to start earning $BACKWOODS tokens</p>
              </div>
              <button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105">
                Connect Wallet
              </button>
            </div>
          </motion.div>
        </div>
      </section>

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
                <div className={`relative p-6 rounded-xl border-2 transition-all duration-300 overflow-hidden ${
                  game.status === 'live' 
                    ? 'bg-gradient-to-br from-red-900/30 to-orange-900/30 border-red-800/50 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/20' 
                    : 'bg-gradient-to-br from-gray-900/30 to-gray-800/30 border-gray-700/50 hover:border-gray-600/50'
                } hover:scale-105`}>
                  
                  {/* Status Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    game.status === 'live' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-600 text-gray-300'
                  }`}>
                    {game.status === 'live' ? 'LIVE' : 'COMING SOON'}
                  </div>

                  {/* Game Icon */}
                  <div className="text-center mb-6">
                    <div className={`w-24 h-24 bg-gradient-to-br ${game.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-4xl">{game.emoji}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{game.title}</h3>
                    <p className="text-gray-400">{game.description}</p>
                  </div>

                  {/* Game Stats */}
                  <div className="space-y-3 mb-6">
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
                  <button className={`w-full py-3 rounded-full font-semibold transition-all duration-200 ${
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