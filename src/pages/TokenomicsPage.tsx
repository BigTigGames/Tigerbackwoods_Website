import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, Shield, Zap, Lock, Users, Coins, Target } from 'lucide-react';

const TokenomicsPage = () => {
  const tokenomics = [
    { label: 'Total Supply', value: '1,000,000,000', percentage: 100, color: 'from-red-600 to-orange-600' },
    { label: 'Liquidity Pool', value: '400,000,000', percentage: 40, color: 'from-blue-600 to-cyan-600' },
    { label: 'Community Rewards', value: '300,000,000', percentage: 30, color: 'from-green-600 to-emerald-600' },
    { label: 'Development', value: '150,000,000', percentage: 15, color: 'from-purple-600 to-pink-600' },
    { label: 'Marketing', value: '100,000,000', percentage: 10, color: 'from-yellow-600 to-orange-600' },
    { label: 'Team (Locked)', value: '50,000,000', percentage: 5, color: 'from-gray-600 to-gray-800' },
  ];

  const features = [
    {
      title: 'Deflationary Mechanism',
      description: 'Automatic token burns with every transaction reduce supply over time',
      icon: Target,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Staking Rewards',
      description: 'Earn passive income by staking your $TGBW tokens',
      icon: Coins,
      color: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Gaming Utility',
      description: 'Use tokens for in-game purchases, upgrades, and tournament entries',
      icon: Zap,
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Governance Rights',
      description: 'Vote on important decisions and shape the future of the ecosystem',
      icon: Users,
      color: 'from-blue-600 to-cyan-600'
    },
  ];

  const metrics = [
    { label: 'Market Cap', value: '$2.5M', change: '+15.2%', positive: true },
    { label: 'Total Holders', value: '50,000+', change: '+8.7%', positive: true },
    { label: 'Tokens Burned', value: '25M', change: '+2.1%', positive: true },
    { label: 'Liquidity', value: '$1.2M', change: '+5.3%', positive: true },
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
              Tokenomics
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Discover the economic model behind $TGBW and how it powers the Tiger ecosystem
            </motion.p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className={`text-sm font-semibold ${metric.positive ? 'text-green-400' : 'text-red-400'}`}>
                    {metric.change}
                  </div>
                </div>
                <div className="text-gray-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Chart Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="w-80 h-80 mx-auto relative">
                {/* Pie Chart Visual */}
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50">
                  <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">1B</div>
                      <div className="text-sm text-gray-400">Total Supply</div>
                    </div>
                  </div>
                </div>
                
                {/* Animated Tiger Punching Through */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl animate-bounce">🥊</div>
                </div>
              </div>
            </motion.div>

            {/* Distribution Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Token Distribution
                </h2>
                <p className="text-gray-300 text-lg">
                  Fair and transparent allocation designed for long-term sustainability
                </p>
              </div>

              {tokenomics.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-4 rounded-xl border border-red-800/50"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${item.color}`}></div>
                      <span className="font-semibold text-white">{item.label}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{item.value}</div>
                      <div className="text-sm text-gray-400">{item.percentage}%</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000`}
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Token Utility
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              $TGBW isn't just a meme coin - it's a utility token with real-world applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 group"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Security & Transparency
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Built with security and transparency at its core
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
              <h3 className="text-2xl font-bold text-white mb-4">Audited Contract</h3>
              <p className="text-gray-400">Smart contract audited by leading security firms</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Locked Liquidity</h3>
              <p className="text-gray-400">Liquidity locked for 2 years to ensure stability</p>
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
              <h3 className="text-2xl font-bold text-white mb-4">Transparent Metrics</h3>
              <p className="text-gray-400">All transactions and metrics publicly verifiable</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TokenomicsPage;