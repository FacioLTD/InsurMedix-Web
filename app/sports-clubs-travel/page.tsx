'use client'

import { motion } from 'framer-motion'
// import Icon from '../../components/ui/Icon'

export default function SportsClubsTravelPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Sports Clubs <span className="text-black-950">Travel Insurance</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Comprehensive coverage for sports teams, clubs, and athletes traveling for competitions, 
              training camps, and events worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-8 text-black-950">
                Complete Protection for Sports Travel
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Whether you're a youth soccer team traveling to a regional tournament or a professional 
                sports organization competing internationally, our comprehensive travel insurance covers 
                every aspect of your journey.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                From medical emergencies and trip cancellations to equipment protection and liability coverage, 
                we ensure your team can focus on performance while we handle the risks.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our policies are designed specifically for sports organizations, understanding the unique 
                challenges and requirements of athletic travel.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-500 to-green-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">What's Covered</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0">✓</span>
                  <div>
                    <strong>Medical Coverage:</strong> Emergency medical expenses, evacuation, and repatriation
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0">✓</span>
                  <div>
                    <strong>Trip Protection:</strong> Cancellation, interruption, and delay coverage
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0">✓</span>
                  <div>
                    <strong>Equipment Coverage:</strong> Protection for sports gear and equipment
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-white text-green-600 rounded-full flex items-center justify-center mr-3 text-sm font-bold flex-shrink-0">✓</span>
                  <div>
                    <strong>Liability Protection:</strong> Coverage for accidents and injuries during events
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Details */}
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
              Comprehensive Coverage Details
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our sports travel insurance provides extensive protection for every aspect of your journey.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '🏥',
                title: 'Medical & Health',
                description: 'Emergency medical expenses, hospitalization, prescription drugs, and medical evacuation.',
                coverage: ['Up to $1M medical coverage', '24/7 medical assistance', 'Emergency evacuation', 'Prescription coverage']
              },
              {
                icon: '✈️',
                title: 'Trip Protection',
                description: 'Coverage for trip cancellations, interruptions, delays, and missed connections.',
                coverage: ['Trip cancellation', 'Trip interruption', 'Travel delay', 'Missed connection']
              },
              {
                icon: '🎒',
                title: 'Baggage & Equipment',
                description: 'Protection for personal belongings, sports equipment, and baggage delays.',
                coverage: ['Baggage loss/damage', 'Equipment protection', 'Baggage delay', 'Personal effects']
              },
              {
                icon: '🛡️',
                title: 'Liability Coverage',
                description: 'Protection against third-party claims for bodily injury or property damage.',
                coverage: ['Personal liability', 'Property damage', 'Legal defense', 'Settlement costs']
              },
              {
                icon: '🚨',
                title: 'Emergency Services',
                description: '24/7 emergency assistance, travel information, and crisis management.',
                coverage: ['24/7 hotline', 'Travel assistance', 'Crisis management', 'Document replacement']
              },
              {
                icon: '🏆',
                title: 'Sports-Specific',
                description: 'Coverage designed specifically for sports activities and competitions.',
                coverage: ['Sports injury coverage', 'Event cancellation', 'Participant liability', 'Equipment rental']
              }
            ].map((coverage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">
                  {coverage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-black-950">{coverage.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{coverage.description}</p>
                <ul className="space-y-2">
                  {coverage.coverage.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-4 h-4 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-2 text-xs">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sports Types */}
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
              Sports We Cover
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From team sports to individual athletics, we provide coverage for all types of sports and activities.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { sport: 'Soccer', icon: '⚽', risk: 'Medium' },
              { sport: 'Basketball', icon: '🏀', risk: 'Medium' },
              { sport: 'Baseball', icon: '⚾', risk: 'Low' },
              { sport: 'Football', icon: '🏈', risk: 'High' },
              { sport: 'Tennis', icon: '🎾', risk: 'Low' },
              { sport: 'Swimming', icon: '🏊', risk: 'Medium' },
              { sport: 'Track & Field', icon: '🏃', risk: 'Medium' },
              { sport: 'Volleyball', icon: '🏐', risk: 'Low' },
              { sport: 'Hockey', icon: '🏒', risk: 'High' },
              { sport: 'Golf', icon: '⛳', risk: 'Low' },
              { sport: 'Skiing', icon: '⛷️', risk: 'High' },
              { sport: 'Surfing', icon: '🏄', risk: 'High' }
            ].map((sport, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg text-center hover:bg-green-50 transition-colors"
              >
                <div className="text-3xl mb-3">
                  {sport.icon}
                </div>
                <h3 className="font-semibold text-black-950 mb-2">{sport.sport}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  sport.risk === 'Low' ? 'bg-green-100 text-green-700' :
                  sport.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {sport.risk} Risk
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-black-950 to-black-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Protect Your Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Get a customized quote for your sports organization and ensure your athletes 
              are protected during every journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Get a Quote
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black-950 transition-colors">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 