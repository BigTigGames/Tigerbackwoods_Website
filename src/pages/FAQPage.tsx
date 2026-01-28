import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqItems = [
    {
      category: 'Gameplay',
      question: 'Is this pay-to-win?',
      answer: 'No. TigerLinks is designed with skill-based mechanics where success comes from gameplay mastery, not spending money. While you can purchase cosmetic items and convenience features, core gameplay advantages are earned through skill and time investment.'
    },
    {
      category: 'Getting Started',
      question: 'Do I need crypto to play?',
      answer: 'No. You can start playing TigerLinks immediately without any cryptocurrency or wallet setup. The game offers a complete free-to-play experience with optional crypto integration for those who want it.'
    },
    {
      category: 'Economy',
      question: 'How do I earn Tiger?',
      answer: 'Tiger is earned through skillful gameplay: winning matches, completing daily challenges, achieving milestones, participating in tournaments, and progressing through skill-based rankings. The more you play and improve, the more Tiger you earn.'
    },
    {
      category: 'Tokens',
      question: 'What\'s the difference between Tiger and TigerLinks Token?',
      answer: 'Tiger is the in-game currency earned through gameplay and spent within the game ecosystem. TigerLinks Token is the blockchain token that can be traded on exchanges. In supported regions, Tiger can be converted to TigerLinks Token through regulated processes.'
    },
    {
      category: 'Technical',
      question: 'What platforms is TigerLinks available on?',
      answer: 'TigerLinks is currently available on desktop web browsers. Mobile applications for iOS and Android are in development and will be released as part of our roadmap expansion.'
    },
    {
      category: 'Security',
      question: 'How do you prevent cheating?',
      answer: 'We employ advanced anti-cheat systems including server-side validation, behavioral analysis, and machine learning detection. All gameplay is monitored for suspicious patterns, and we maintain a zero-tolerance policy for cheating.'
    },
    {
      category: 'Economy',
      question: 'Can I withdraw my earnings?',
      answer: 'Tiger earned in-game is primarily designed for use within the TigerLinks ecosystem. In supported jurisdictions and subject to regulatory compliance, Tiger may be converted to TigerLinks Token through official channels.'
    },
    {
      category: 'Gameplay',
      question: 'How does matchmaking work?',
      answer: 'Our matchmaking system pairs players based on skill level, ensuring fair and competitive matches. As you improve, you\'ll face stronger opponents, creating a balanced progression system that rewards skill development.'
    },
    {
      category: 'Community',
      question: 'How can I get support or report issues?',
      answer: 'You can reach our support team through our official Discord server, Telegram community, or the in-game support system. We actively monitor all channels and respond to player concerns promptly.'
    },
    {
      category: 'Legal',
      question: 'Is TigerLinks available in my country?',
      answer: 'TigerLinks is available globally for gameplay. However, token-related features may be restricted in certain jurisdictions due to local regulations. Please check your local laws regarding cryptocurrency and gaming tokens.'
    }
  ];

  const categories = ['All', 'Gameplay', 'Getting Started', 'Economy', 'Tokens', 'Technical', 'Security', 'Community', 'Legal'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFAQs = selectedCategory === 'All' 
    ? faqItems 
    : faqItems.filter(item => item.category === selectedCategory);

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
              FAQ
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Frequently asked questions about TigerLinks gameplay, economy, and platform
            </motion.p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-10 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {filteredFAQs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-red-900/30 to-orange-900/30 rounded-xl border border-red-800/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-red-900/20 transition-colors duration-200"
                >
                  <div>
                    <div className="text-sm text-orange-400 font-semibold mb-1">{item.category}</div>
                    <h3 className="text-xl font-bold text-white">{item.question}</h3>
                  </div>
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-6 h-6 text-orange-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-orange-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                
                {openItems.includes(index) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our community for real-time support and discussions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://t.me/TIGERLINKZOFFICIAL"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Join Telegram
              </a>
              <a
                href="https://x.com/tigerbckwoods"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105"
              >
                Follow on X
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;