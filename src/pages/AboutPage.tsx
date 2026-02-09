import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Target, Users, Trophy, Gamepad2, TrendingUp } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: '2024 Q1',
      title: 'The Problem, Not the Meme',
      description: 'TigerLinks began with frustration, not hype. The crypto and Web3 gaming space had become saturated with empty tokens, short-lived games, and extractive launches that prioritized speculation over players. The goal wasn\'t to launch another coin — it was to design a system where games actually mattered, where users came first, and where value was created through participation, not promises.',
      icon: Zap,
      completed: true
    },
    {
      year: '2024 Q2',
      title: 'Building Without a Safety Net',
      description: 'TigerLinks launched without a presale, without venture capital, and without paid marketing. Instead of chasing attention, the team focused on fundamentals: fair distribution, transparent supply mechanics, and a clear commitment to building real products. Early supply reductions, long-term locks, and conservative economics were implemented to protect the ecosystem from short-term exploitation.\n\nThe community that formed wasn\'t driven by hype — it was driven by alignment.',
      icon: Users,
      completed: true
    },
    {
      year: '2024 Q3',
      title: 'Designing the Engine',
      description: 'This phase was about architecture. TigerLinks was defined not as a single game, but as a gaming ecosystem with shared systems:\n\n• a unified in-game currency\n• skill-based progression\n• reward loops that favor engagement over grinding\n• token utility designed to grow with usage, not speculation\n\nGame concepts were explored, tested, discarded, and refined. The focus stayed internal: mechanics first, visuals later.',
      icon: Gamepad2,
      completed: true
    },
    {
      year: '2024 Q4',
      title: 'Proof Without Promotion',
      description: 'TigerLinks went live on Solana through organic momentum. No paid influencers. No artificial volume. The project reached a $445K all-time high driven by real community activity. Instead of accelerating marketing, the team slowed down — prioritizing audits, economic stress-testing, and long-term viability over short-term attention.\n\nThis was a deliberate decision: build trust before scale.',
      icon: TrendingUp,
      completed: true
    },
    {
      year: '2025 Q1',
      title: 'From Concept to Playable Reality',
      description: 'TigerLinks crossed its most important threshold: playable systems. Core gameplay mechanics, early builds, and internal test environments validated the original thesis — skill-based play could support real engagement without devolving into gambling or pay-to-win dynamics. The in-game economy began taking shape, centered around earned value, spending sinks, and controlled circulation.\n\nThis was no longer a roadmap. It was a working product.',
      icon: Target,
      completed: true
    },
    {
      year: '2025 Q2',
      title: 'Pressure Testing Everything',
      description: 'Rather than rushing to market, the team entered a heavy iteration phase. Features were cut. Systems were rewritten. Reward loops were tightened. Every mechanic was tested against a single question: does this increase long-term player retention? If the answer was no, it didn\'t ship.\n\nAt the same time, the broader Web3 market cooled — reinforcing the decision to build quietly instead of chasing cycles.',
      icon: Trophy,
      completed: true
    },
    {
      year: '2025 Q3',
      title: 'Focus Over Expansion',
      description: 'While many projects pivoted or faded, TigerLinks doubled down on focus. Instead of expanding outward, the team refined inward: gameplay feel, onboarding flow, economic balance, and player motivation. Short-term growth was intentionally sacrificed to avoid structural debt.\n\nThis period defined TigerLinks\' identity: a game-first platform, not a token-first experiment.',
      icon: Target,
      completed: true
    },
    {
      year: '2025 Q4',
      title: 'Raising the Bar',
      description: 'As development matured, expectations rose. Visual polish, character identity, and presentation became priorities — not for marketing, but for legitimacy. The TigerLinks brand evolved from a concept into a recognizable universe with tone, personality, and consistency.\n\nBy the end of the year, the foundation was set for public-facing growth — without compromising the original principles.',
      icon: Zap,
      completed: true
    },
    {
      year: '2026 Q1',
      title: 'Ready to Be Judged',
      description: 'TigerLinks enters 2026 as a fully formed ecosystem — not chasing attention, but ready for it. The focus shifts from proving that something can be built to proving that it can last. Gameplay, economy, and community are now aligned under one goal: sustainable growth driven by players, not speculation.\n\nTigerLinks is no longer reacting to what crypto was. It\'s defining what Web3 gaming should be.',
      icon: Trophy,
      completed: false
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
              From conviction to execution — how TigerLinks was built to outlast the noise
            </motion.p>
          </div>

          {/* Origin Story */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-2xl"
          >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <img 
                src="/hero-3.jpg" 
                alt="TigerLinkz Origin" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/75"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-transparent to-orange-900/40"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-8 py-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center drop-shadow-lg">The Origin Story</h2>
              
              <div className="space-y-6 text-gray-100 leading-relaxed text-lg backdrop-blur-sm bg-black/30 p-8 rounded-xl border border-orange-500/30">
                <p>
                  TigerLinkz wasn't created as a joke, a trend, or a quick flip.
                </p>
                <p className="font-semibold text-white text-xl">
                  It was born out of frustration.
                </p>
                <p>
                  After watching the crypto space get flooded with empty promises, rigged systems, and projects designed to extract value instead of create it, the idea became simple: <span className="text-orange-400 font-semibold">build something real—or don't build at all.</span>
                </p>
                <p>
                  TigerLinkz started with a belief that skill should matter again. That competition should be fair. That players should win because they're better—not because the system is tilted, botted, or paywalled beyond reach.
                </p>
                
                <div className="my-8 pl-6 border-l-4 border-orange-500 bg-black/40 py-4 rounded-r-lg">
                  <p className="font-semibold text-white mb-3 text-xl">The name represents a mindset.</p>
                  <p className="mb-2"><span className="text-orange-400 font-bold text-lg">Tiger</span> — relentless focus, confidence under pressure, and the refusal to back down.</p>
                  <p><span className="text-orange-400 font-bold text-lg">Linkz</span> — connection: players to players, effort to reward, time invested to value earned.</p>
                </div>
                
                <p>
                  At its core, TigerLinkz is about proving that Play-to-Earn doesn't have to mean play-to-lose. That a game can be competitive, rewarding, and transparent without being predatory. That a community can grow without being farmed.
                </p>
                <p>
                  This isn't about hype cycles or pump charts.
                </p>
                <p className="font-semibold text-white text-xl">
                  It's about building a system where skill compounds, trust is earned, and players actually want to stay.
                </p>
                <p>
                  TigerLinkz exists to raise the standard — for games, for crypto, and for the people who show up ready to compete.
                </p>
                
                <div className="mt-8 text-center space-y-3 pt-6 border-t border-orange-500/50">
                  <p className="text-white font-bold text-xl">No smoke.</p>
                  <p className="text-white font-bold text-xl">No gimmicks.</p>
                  <p className="text-orange-400 font-bold text-3xl drop-shadow-lg">Just execution.</p>
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
              📜 TigerLinks — The Real Story
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our journey through the crypto jungle
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
                      <p className="text-gray-400 whitespace-pre-line">{item.description}</p>
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

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide every decision in the TigerLinks ecosystem
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
              The tiger's journey is just beginning. Be part of the most innovative Web3 gaming ecosystem.
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