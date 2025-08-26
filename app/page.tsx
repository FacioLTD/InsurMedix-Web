'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import TypingAnimation from '@/components/ui/TypingAnimation'
import { 
  Target, 
  Globe, 
  Trophy, 
  Plane, 
  Home as HomeIcon, 
  Zap, 
  Heart, 
  Brain, 
  CreditCard, 
  Shield, 
  Building2, 
  Users, 
  Smartphone,
  Play,
  CheckCircle,
  MapPin,
  Wifi,
  Dumbbell,
  Wallet,
  MessageCircle,
  Video,
  Star,
  ArrowRight,
  Camera,
  Check,
  ArrowUpRight,
  Mountain,
  Tent,
  Activity,
  Network,
  UserCheck,
  Building,
  Globe2,
  Award,
  Medal,
  AlertTriangle,
  Briefcase,
  User,
  Eye,
  Rocket
} from 'lucide-react'
import CtaSwapController from '@/components/ui/CtaSwapController'

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -100])
  const y2 = useTransform(scrollY, [0, 600], [0, -200])
  const y3 = useTransform(scrollY, [0, 900], [0, -300])
  const opacity = useTransform(scrollY, [0, 300], [1, 0.3])

  return (
    <main className="min-h-screen pt-16">
      <CtaSwapController />
      {/* 🏁 Hero Section */}
      <section className="hero relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Video Background */}
          <div className="absolute inset-0 w-full h-full hidden md:block">
            <iframe
              src="https://www.youtube.com/embed/TIh0JNR7SsA?autoplay=1&mute=1&loop=1&playlist=TIh0JNR7SsA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Background Video"
              className="w-full h-full object-cover"
              style={{ 
                position: 'absolute',
                top: '-10px',
                bottom: '-10px',
                height: 'calc(100% + 20px)'
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Mobile Video Background */}
          <div className="absolute inset-0 w-full h-full md:hidden overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/llmgPziamm0?autoplay=1&mute=1&loop=1&playlist=llmgPziamm0&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
              title="Mobile Background Video"
              className="absolute top-1/2 left-1/2 w-[120%] h-[120%] -translate-x-1/2 -translate-y-1/2 object-cover"
              style={{ 
                top: 'calc(50% - 10px)',
                height: 'calc(120% + 20px)'
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black-950/60"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Movement is{' '}
              <span className="text-orange-500">
                <TypingAnimation 
                  words={['freedom.', 'adventure.', 'limitless.']}
                  typingSpeed={80}
                  deletingSpeed={40}
                  pauseTime={6500}
                />
              </span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-orange-400">
              Sponsorship is <span className="text-white">power.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We sponsor movement — on the field, across borders, and beyond limits. Insurance for those who live in motion.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              id="hero-cta"
              href="/partner"
              className="cta cta--hero btn btn-primary"
            >
              Join the Movement
            </Link>
            <Link href="/global-care" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black-950 transition-colors inline-block">
              See How It Works
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🏗️ We Build Communities Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-200 rounded-full opacity-20 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black-950 leading-tight">
                We Build Communities
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                We build support into movement - so people and communities can grow, play, create, and live without fear.
              </p>
              <p className="text-lg md:text-xl text-gray-700 mb-6 leading-relaxed">
                Backed by leading global insurance carriers, we cover what matters most - with care, speed, and presence in every step of the journey.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Built for teams, creatives, and remote-first communities.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-2xl text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <ul className="space-y-4">
                <li>Empower movement and growth</li>
                <li>Provide comprehensive protection</li>
                <li>Build supportive communities</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 🌍 Who We Move With Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-10 right-10 w-36 h-36 bg-blue-100 rounded-full opacity-30 blur-xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-10 left-10 w-28 h-28 bg-green-100 rounded-full opacity-30 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              Who We Move With
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sports Clubs & Federations',
                description: 'Global travel and medical assistance for athletes and teams competing across borders - with full coverage, fast onboarding, and dedicated support.'
              },
              {
                title: 'Digital Nomad Communities',
                description: 'Supporting borderless lifestyles through government collaboration, visa programs, and premium insurance solutions - delivered inside our 5-star Infinity Village network.'
              },
              {
                title: 'Movers & Relocation Platforms',
                description: 'Protecting life transitions and the personal belongings that matter most, offering full-value coverage for every move, powered by seamless embedded tech.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-4 text-black-950">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ⚡ What We Provide Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y3 }}
          className="absolute top-20 right-1/4 w-32 h-32 bg-yellow-100 rounded-full opacity-30 blur-xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100 rounded-full opacity-20 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              What We Provide
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Sponsorship',
                description: 'Every partner we support receives sponsorship - unlocking growth, performance, and care for the people they serve.'
              },
              {
                title: 'Global Travel & Medical Assistance',
                description: 'Comprehensive protection in 200+ countries, with professionals on the ground, in your language, and ready when it matters most.'
              },
              {
                title: 'Personalized Service, Powered by AI',
                description: 'Intelligent 24/7 assistance from any device - for claims, service, or support. Fast, human-centered, and always available.'
              },
              {
                title: 'Virtual Wallets & Cards',
                description: 'Pay anywhere. Access services instantly. Manage everything in one seamless, mobile experience.'
              },
              {
                title: 'Master Policy: The Power of the Group',
                description: 'We insure through institutions — providing full protection to every member under one unified, scalable umbrella.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3 text-black-950">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏢 Our Live Programs Section */}
      <section className="relative py-24 bg-gray-50 overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-10 left-10 w-44 h-44 bg-purple-100 rounded-full opacity-20 blur-xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              Our Live Programs
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'United Moving Insurance Services Inc.',
                subtitle: 'For movers. For families. For fresh starts.',
                features: [
                  'Actively operating across the U.S.',
                  'Full-value item protection',
                  'Embedded in leading CRM & logistics platforms',
                  'AI-powered claims with same-day resolution'
                ],
                link: 'https://www.unitedmovinginsurance.com/',
                linkText: 'Read More →'
              },
              {
                title: 'InsurMedix Global Care',
                subtitle: 'For athletes. For teams. For the win.',
                features: [
                  'Active through master policies for clubs',
                  'Specialized coverage for sports travel and performance',
                  'Injury, wellness, and recovery add-ons',
                  'Fast, player-friendly onboarding'
                ],
                link: '/global-care',
                linkText: 'Learn More →'
              },
              {
                title: 'Infinity Village',
                subtitle: 'For nomads. For creators. For the future.',
                features: [
                  'Co-living hubs in prime locations',
                  'Digital residency & visa support',
                  'Global health & lifestyle coverage',
                  '24/7 AI-powered concierge'
                ],
                link: '/infinity-village',
                linkText: 'Explore →'
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-black-950">{program.title}</h3>
                <p className="text-gray-600 mb-4 italic">{program.subtitle}</p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={program.link}
                  className="text-orange-500 hover:text-orange-600 font-semibold text-sm inline-flex items-center"
                  target={program.link.startsWith('http') ? '_blank' : '_self'}
                  rel={program.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {program.linkText}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ❤️ Our Promise Section */}
      <section className="relative py-24 bg-gradient-to-br from-black-950 to-black-900 text-white overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-1/4 w-40 h-40 bg-orange-500 rounded-full opacity-10 blur-xl"
        />
        <motion.div 
          style={{ y: y3 }}
          className="absolute bottom-20 right-1/4 w-36 h-36 bg-red-500 rounded-full opacity-10 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12">
              Our Promise
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-2">We see you.</h3>
                <p className="text-gray-300">Understanding your unique needs and challenges</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-2">We back you.</h3>
                <p className="text-gray-300">Providing comprehensive protection and support</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-2xl font-bold mb-2">We move with you.</h3>
                <p className="text-gray-300">Growing and evolving alongside your journey</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 📬 Call to Action Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Parallax Background Elements */}
        <motion.div 
          style={{ y: y2 }}
          className="absolute top-10 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-xl"
        />
        <motion.div 
          style={{ y: y1 }}
          className="absolute bottom-10 right-10 w-40 h-40 bg-orange-100 rounded-full opacity-20 blur-xl"
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              Ready to Empower Your Movement?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                Let's Talk
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 