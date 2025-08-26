'use client'

import { motion } from 'framer-motion'

export default function PartnerPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner With <span className="text-black-950">InsurMedix</span>
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 leading-relaxed">
              Join our network of trusted partners and help us revolutionize insurance 
              for those who live in motion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black-950">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of insurance through strategic partnerships that create value for everyone.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚀',
                title: 'Innovation First',
                description: 'Access to cutting-edge insurance products and digital platforms that set you apart from competitors.'
              },
              {
                icon: '💼',
                title: 'Revenue Growth',
                description: 'Expand your service offerings and increase revenue with our comprehensive insurance solutions.'
              },
              {
                icon: '🌐',
                title: 'Global Reach',
                description: 'Tap into our network of licensed brokers across all 50 states and international markets.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-black-950">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black-950">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer various partnership models to fit your business needs and goals.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {[
              {
                title: 'Insurance Agencies & Brokers',
                description: 'Join our network and offer our innovative products to your clients while maintaining your independence.',
                features: ['White-label solutions', 'Commission sharing', 'Training & support', 'Marketing materials'],
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Sports Organizations & Clubs',
                description: 'Provide comprehensive insurance coverage for your athletes, teams, and events.',
                features: ['Team coverage', 'Event insurance', 'Liability protection', 'Claims management'],
                color: 'from-orange-500 to-orange-600'
              },
              {
                title: 'Digital Nomad Communities',
                description: 'Offer global health and travel insurance to your members and community.',
                features: ['Global coverage', '24/7 support', 'Multi-language', 'Digital claims'],
                color: 'from-blue-500 to-blue-600'
              },
              {
                title: 'Technology Partners',
                description: 'Integrate our insurance APIs and build innovative solutions together.',
                features: ['API access', 'Technical support', 'Co-marketing', 'Revenue sharing'],
                color: 'from-purple-500 to-purple-600'
              }
            ].map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${partnership.color} rounded-xl flex items-center justify-center text-white text-2xl mb-6`}>
                  {index === 0 && '🏢'}
                  {index === 1 && '⚽'}
                  {index === 2 && '🌍'}
                  {index === 3 && '💻'}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-black-950">{partnership.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{partnership.description}</p>
                <ul className="space-y-2">
                  {partnership.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-3 text-xs font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-black-950">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our partnership process is simple and designed to get you up and running quickly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Initial Consultation', description: 'Schedule a call to discuss your needs and explore partnership opportunities.' },
              { step: '2', title: 'Partnership Agreement', description: 'Review and sign our partnership agreement with clear terms and expectations.' },
              { step: '3', title: 'Onboarding & Training', description: 'Complete our comprehensive onboarding process and receive training materials.' },
              { step: '4', title: 'Launch & Support', description: 'Go live with our solutions and receive ongoing support and optimization.' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black-950">{process.title}</h3>
                <p className="text-gray-600 leading-relaxed">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form Section */}
      <section className="py-20 bg-gradient-to-br from-black-950 to-black-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Partner With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's discuss how we can work together to create innovative insurance solutions 
              and grow your business.
            </p>
            
            <form className="space-y-6 text-left">
              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Select Program *
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black-950 text-white"
                >
                  <option value="">Choose a program...</option>
                  <option value="Sports Organizations">Sports Organizations</option>
                  <option value="Digital Nomads">Digital Nomads</option>
                  <option value="Moving & Relocation">Moving & Relocation</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black-950 text-white"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-black-950 text-white"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors"
              >
                Get Started
              </button>
            </form>

            {/* Careers Link */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-300 mb-4">
                Want to Join InsurMedix Team?
              </p>
              <a 
                href="/careers" 
                className="text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                Check Career Options →
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 