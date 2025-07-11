import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Trophy, Gamepad2, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024 Q1',
      title: 'The Birth of a Legend',
      description: '$TGBW was born from a simple idea: what if Tiger Woods was actually a tiger? The meme exploded across crypto Twitter.',
      icon: Zap,
      completed: true
    },
    {
      year: '2024 Q2',
      title: 'Community Awakens',
      description: 'Tiger Backwoods launched with no presale, no VCs, and no hype machine—just a bold vision. 100 million tokens were burned, 277 million+ locked, and the early community formed around a real Play-to-Earn promise.',
      icon: Users,
      completed: true
    },
    {
      year: '2024 Q3',
      title: 'Ecosystem in Motion',
      description: 'Development of Tiger Links began. Branding, tokenomics, and smart contracts were finalized. The team laid the groundwork for a full gaming ecosystem that rewards skill, not speculation.',
      icon: Gamepad2,
      completed: true
    },
    {
      year: '2024 Q4',
      title: 'Market Ignition',
      description: '$TGBW officially launched on Solana and hit a $445K all-time high organically. Community momentum surged as CertiK and game audits were initiated. No shortcuts—only real progress.',
      icon: TrendingUp,
      completed: false
    },
    {
      year: '2025 Q1',
      title: 'Game Goes Live',
      description: 'Tiger Links launched on mobile and desktop with full Play-to-Earn integration. Players could now earn Tiger, spend it in-game, and convert it to $TGBW. The Tiger Shop went live—real utility, real value.',
      icon: Target,
      completed: false
    },
  ];

  const team = [
    {
      name: 'TigerDev',
      role: 'Lead Developer',
      description: 'Former gaming industry veteran with 10+ years experience',
      avatar: '🐅'
    },
    {
      name: 'MemeMaster',
      role: 'Community Manager',
      description: 'Crypto Twitter legend with 100K+ followers',
      avatar: '🎯'
    },
    {
      name: 'GameChanger',
      role: 'Game Designer',
      description: 'Created viral mobile games with millions of downloads',
      avatar: '🎮'
    },
    {
      name: 'MarketingBeast',
      role: 'Marketing Lead',
      description: 'Growth hacker who launched multiple successful tokens',
      avatar: '🚀'
    },
  ];

  const values = [
    {
      title: 'Community First',
      description: 'Every decision is made with our community in mind. We are nothing without our tiger pack.',
      icon: Users,
      color: 'from-red-600 to-orange-600'
    },
    {
      title: 'Innovation',
      description: 'We push the boundaries of what meme coins can do. Gaming, NFTs, and beyond.',
      icon: Zap,
      color: 'from-orange-600 to-yellow-600'
    },
    {
      title: 'Transparency',
      description: 'Open source, audited contracts, and regular community updates. No secrets here.',
      icon: Target,
      color: 'from-yellow-600 to-red-600'
    },
  ];

  return (
    <div className="pt-16 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
            >
              The Tiger's Tale
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              From meme to mayhem - the incredible journey of how $TGBW became the most aggressive meme coin in the jungle
            </motion.p>
          </div>

          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">The Origin Story</h2>
                  <p className="text-gray-300 leading-relaxed">
                    What happens when you mix Tiger Woods' killer instinct, Tony the Tiger's hype, and a stoner's love for fat Backwoods blunts? You get Tiger Backwoods — a golf-swinging, trash-talking legend born from smoke and chaos. Rumor has it he emerged after a blunt so strong it split space-time, fusing sports greatness with cereal box swagger and blunt-fueled genius. Now he's here to take over crypto, torch every scam coin, and build the wildest Play-to-Earn empire the blockchain's ever seen.
                  </p>
                </div>
                <div className="text-center flex items-center justify-center">
                  <img src="/hero-3.jpg" alt="Tiger Backwoods" className="w-80 h-80 rounded-full object-cover shadow-2xl shadow-red-500/50 border-4 border-orange-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Evolution Timeline
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From meme to mayhem - our journey through the crypto jungle
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-orange-600 rounded-full"></div>

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-gradient-to-br ${item.completed ? 'from-green-900/30 to-emerald-900/30 border-green-800/50' : 'from-red-900/30 to-orange-900/30 border-red-800/50'} p-6 rounded-xl border`}>
                      <div className="flex items-center space-x-3 mb-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${item.completed ? 'bg-green-600' : 'bg-red-600'}`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-orange-400">{item.year}</div>
                          <div className="text-xl font-bold text-white">{item.title}</div>
                        </div>
                      </div>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-full border-4 border-black"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Meet the Pack
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The legendary team behind $TGBW (identities protected for their safety)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-orange-400 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision in the $TGBW ecosystem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Ready to Join the Pack?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The tiger's journey is just beginning. Be part of the most aggressive meme coin movement in crypto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=6GTBQj1w2AH7xTLrCGijFTHFyjBUZL1Zq2jX1AdSpump"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 drop-shadow-lg flex items-center justify-center"
              >
                Buy $TGBW
              </a>
              <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105">
                Join Community
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;