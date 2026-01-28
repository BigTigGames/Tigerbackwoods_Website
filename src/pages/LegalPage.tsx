import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Shield, Globe, FileText } from 'lucide-react';

const LegalPage = () => {
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
              Legal & Disclosures
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Important legal information and risk disclosures for TigerLinks users
            </motion.p>
          </div>
        </div>
      </section>

      {/* Risk Disclosure */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-red-900/30 to-orange-900/30 p-8 rounded-xl border border-red-800/50 mb-12"
          >
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Risk Disclosure</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>IMPORTANT:</strong> Participation in TigerLinks and use of TigerLinks Token involves significant risks. Please read and understand the following before participating:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cryptocurrency and gaming tokens are highly volatile and speculative investments</li>
                <li>You may lose some or all of your investment</li>
                <li>Past performance does not guarantee future results</li>
                <li>Regulatory changes may affect token utility and value</li>
                <li>Smart contract risks and potential technical vulnerabilities exist</li>
                <li>Gaming economies may change based on player behavior and platform decisions</li>
                <li>Token conversion and withdrawal may be limited by jurisdiction and regulations</li>
              </ul>
              <p className="font-semibold text-orange-400">
                Only participate with funds you can afford to lose entirely.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Financial Advice */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-xl border border-blue-800/50 mb-12"
          >
            <div className="flex items-center mb-6">
              <FileText className="w-8 h-8 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">No Financial Advice</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                The information provided on this website and platform is for informational purposes only and does not constitute financial, investment, legal, or tax advice.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>We do not provide investment recommendations or financial advice</li>
                <li>All content is for educational and entertainment purposes</li>
                <li>Consult qualified professionals before making financial decisions</li>
                <li>We are not licensed financial advisors or investment professionals</li>
                <li>Individual results may vary significantly</li>
                <li>Market conditions and regulations change frequently</li>
              </ul>
              <p className="font-semibold text-blue-400">
                Always conduct your own research and due diligence before participating in any cryptocurrency or gaming platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Jurisdiction Limitations */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-8 rounded-xl border border-purple-800/50 mb-12"
          >
            <div className="flex items-center mb-6">
              <Globe className="w-8 h-8 text-purple-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Jurisdiction Limitations</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                TigerLinks services may not be available in all jurisdictions. Users are responsible for compliance with local laws and regulations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Restricted Activities</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Token trading in prohibited jurisdictions</li>
                    <li>Participation where gaming is restricted</li>
                    <li>Use by individuals under legal age</li>
                    <li>Activities violating local securities laws</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">User Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Verify local legal compliance</li>
                    <li>Understand tax obligations</li>
                    <li>Comply with age restrictions</li>
                    <li>Report earnings as required by law</li>
                  </ul>
                </div>
              </div>
              <p className="font-semibold text-purple-400">
                It is your responsibility to ensure that your participation is legal in your jurisdiction.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Platform Terms */}
      <section className="py-20 bg-gradient-to-br from-red-950/20 to-orange-950/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 p-8 rounded-xl border border-green-800/50"
          >
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-3xl font-bold text-white">Platform Terms</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p>
                By using TigerLinks, you agree to our terms of service and acknowledge that:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>The platform is provided "as is" without warranties</li>
                <li>We reserve the right to modify features and economics</li>
                <li>Account suspension may occur for terms violations</li>
                <li>Intellectual property rights are protected</li>
                <li>Dispute resolution follows our established procedures</li>
                <li>Privacy policy governs data collection and use</li>
              </ul>
              <div className="mt-6 p-4 bg-black/30 rounded-lg">
                <p className="text-sm text-gray-400">
                  <strong>Last Updated:</strong> January 2026<br />
                  <strong>Version:</strong> 2.0<br />
                  <strong>Contact:</strong> For legal inquiries, please contact our support team through official channels.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact for Legal */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Legal Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              For legal inquiries or compliance questions, please contact our team through official channels
            </p>
            <a
              href="https://t.me/TIGERLINKZOFFICIAL"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;