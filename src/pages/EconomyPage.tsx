import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TrendingUp, Zap, Target, ArrowRight, Lock } from 'lucide-react';

const EconomyPage = () => {
  const economyFeatures = [
    {
      title: 'What Tiger Is',
      description: 'Tiger is the in-game currency earned through skillful gameplay, completing challenges, and winning matches. It\'s designed to reward engagement and skill over speculation.',
      icon: Coins,
      color: 'from-orange-600 to-yellow-600'
    },
    {
      title: 'How It\'s Earned',
      description: 'Earn Tiger through gameplay achievements, tournament victories, daily challenges, and skill-based progression. No pay-to-win mechanics - pure skill-based earning.',
      icon: Target,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Where It\'s Spent (Sinks)',
      description: 'Use Tiger to unlock new game modes, purchase cosmetic upgrades, enter premium tournaments, and access exclusive content. Balanced sinks maintain economic stability.',
      icon: TrendingUp,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Token Conversion',
      description: 'In supported jurisdictions, Tiger can be converted to TigerLinks Token through secure, regulated processes. Conversion availability varies by region and regulations.',
      icon: ArrowRight,
      color: 'from-blue-600 to-cyan-600'
    },
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
              Economy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Understanding the TigerLinks economic ecosystem and Tiger currency
            </motion.p>
          </div>
        </div>
      </section>

      {/* Economy Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {economyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Economic Principles */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Economic Principles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built on sustainable, player-first economics
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
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Skill-Based Earning</h3>
              <p className="text-gray-400">Rewards are tied to gameplay skill and achievement, not speculation or luck</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Balanced Circulation</h3>
              <p className="text-gray-400">Controlled token sinks and sources maintain long-term economic stability</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-800/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
            >
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Player-First Design</h3>
              <p className="text-gray-400">Economic decisions prioritize player experience and long-term engagement</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EconomyPage;