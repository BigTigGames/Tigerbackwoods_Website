import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, Circle } from 'lucide-react';

const RoadmapPage = () => {
  const roadmapItems = [
    {
      status: 'now',
      title: 'Core Platform Stability',
      description: 'Finalizing core gameplay mechanics, economic balance, and security audits',
      features: [
        'Smart contract audits completion',
        'Anti-cheat system implementation',
        'Economic model stress testing',
        'Core gameplay optimization'
      ]
    },
    {
      status: 'now',
      title: 'Player Onboarding',
      description: 'Streamlined onboarding experience for new players',
      features: [
        'Tutorial system enhancement',
        'Free-to-play onboarding flow',
        'Skill-based matchmaking',
        'Progressive difficulty scaling'
      ]
    },
    {
      status: 'next',
      title: 'Advanced Game Modes',
      description: 'Expanding gameplay with new competitive formats',
      features: [
        'Tournament system launch',
        'Ranked competitive play',
        'Seasonal challenges',
        'Guild system implementation'
      ]
    },
    {
      status: 'next',
      title: 'Mobile Platform',
      description: 'Native mobile applications for iOS and Android',
      features: [
        'Mobile app development',
        'Cross-platform progression',
        'Touch-optimized controls',
        'Offline mode capabilities'
      ]
    },
    {
      status: 'later',
      title: 'Ecosystem Expansion',
      description: 'Broadening the TigerLinks gaming universe',
      features: [
        'Additional game genres',
        'Community-created content',
        'Developer API release',
        'Third-party integrations'
      ]
    },
    {
      status: 'later',
      title: 'Global Scaling',
      description: 'Worldwide expansion and localization',
      features: [
        'Multi-language support',
        'Regional tournaments',
        'Local payment methods',
        'Regulatory compliance expansion'
      ]
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'now':
        return 'from-green-600 to-emerald-600';
      case 'next':
        return 'from-orange-600 to-yellow-600';
      case 'later':
        return 'from-blue-600 to-cyan-600';
      default:
        return 'from-gray-600 to-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'now':
        return CheckCircle;
      case 'next':
        return Clock;
      case 'later':
        return Circle;
      default:
        return Circle;
    }
  };

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
              Roadmap
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Our milestone-based development approach - each item ships when stable
            </motion.p>
          </div>
        </div>
      </section>

      {/* Roadmap Items */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roadmapItems.map((item, index) => {
              const StatusIcon = getStatusIcon(item.status);
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${getStatusColor(item.status)} rounded-full flex items-center justify-center mr-4`}>
                      <StatusIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-orange-400 uppercase tracking-wide">
                        {item.status}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  
                  <div className="space-y-2">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Philosophy */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Our Development Philosophy
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We ship when ready, not when rushed. Each milestone represents stable, tested functionality that enhances the player experience. No arbitrary deadlines - only quality deliverables.
            </p>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-6 rounded-xl border border-red-800/50">
              <p className="text-gray-400 italic">
                "Quality over speed. Sustainability over hype. Players over profits."
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoadmapPage;