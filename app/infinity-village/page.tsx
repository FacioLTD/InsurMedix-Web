'use client'

import { motion } from 'framer-motion'
import { Globe, Shield, Zap, Heart, Users, MapPin, Star, ArrowRight, Play, CheckCircle, Building, Wifi, Dumbbell, Coffee, ShoppingCart, Stethoscope } from 'lucide-react'
import Link from 'next/link'
import CtaSwapController from '@/components/ui/CtaSwapController'

export default function InfinityVillage() {
  return (
    <main className="min-h-screen pt-16">
      <CtaSwapController />
      {/* Hero Section */}
      <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Video Background */}
          <div className="absolute inset-0 w-full h-full hidden md:block">
            <iframe
              src="https://www.youtube.com/embed/F02_MVdAqCk?autoplay=1&mute=1&loop=1&playlist=F02_MVdAqCk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
              title="Infinity Village"
              className="w-full h-full object-cover"
              style={{ 
                position: 'absolute',
                top: '-1260px',
                bottom: '-1260px',
                height: 'calc(100% + 2520px)',
                width: 'calc(100% + 504px)',
                left: '-252px'
              }}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          {/* Mobile Video Background */}
          <div className="absolute inset-0 w-full h-full md:hidden overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/XX5NbJTKPmc?autoplay=1&mute=1&loop=1&playlist=XX5NbJTKPmc&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
              title="Infinity Village Mobile"
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
          <div className="absolute inset-0 bg-black-950/70"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <div className="mb-4">
              <span className="text-6xl md:text-8xl lg:text-9xl text-white font-bold">♾️</span>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Infinity Village
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
              The Future of Global Living
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              For digital citizens, Infinity Village is where freedom meets structure: a ready-made home for work, wellness, and community. A place where remote professionals, innovators, and global families find belonging without borders.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Is Infinity Village Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  Vision
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950 leading-tight">
                  What Is Infinity Village?
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  A modular, all-in-one ecosystem designed to empower digital nomads, entrepreneurs, and families. Infinity Village blends physical spaces with the cutting-edge InfinityOS platform, creating a seamless environment for productivity, health, and connection—wherever you are in the world.
                </p>
                <p>
                  Every Infinity Village is built on three pillars that work together to create a complete living experience for the modern global citizen.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Three Pillars</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Living: Comfort & Community</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Working: Productivity & Collaboration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Thriving: Wellness & Lifestyle</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500 rounded-2xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-600 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inside the Village Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              Inside the Village
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every Infinity Village is built on three pillars that create a complete ecosystem for modern global living.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Living",
                description: "250 furnished apartments crafted for comfort, community, and modern nomad life.",
                color: "from-blue-500 to-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: Wifi,
                title: "Working",
                description: "Offices for 1,000+ users, equipped with high-speed internet, full reception, and meeting rooms for collaboration.",
                color: "from-blue-600 to-blue-700",
                bgColor: "bg-blue-50"
              },
              {
                icon: Heart,
                title: "Thriving",
                description: "Fitness centers, pools, yoga studios, spas, cafés, supermarkets, clinics, and 24/7 concierge + security for holistic well-being.",
                color: "from-blue-700 to-blue-800",
                bgColor: "bg-blue-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black-950">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* InfinityOS Section */}
      <section className="py-24 bg-black-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-blue-400">
                  InfinityOS: The Digital Nomad Operating System
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Powering every Infinity Village, InfinityOS delivers a fully integrated suite of tools for global citizens.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl text-white shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">InfinityOS Features</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Infinity Visa: 1-year digital nomad visa</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Tax Freedom: No income tax on foreign earnings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Fintech Platform: Banking & business tools</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Global Insurance: Travel & medical coverage</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* InfinityOS Features Grid Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950">
              InfinityOS Platform Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive suite of tools designed for the modern global citizen.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: MapPin,
                title: "Infinity Visa",
                description: "A 1-year digital nomad visa for each village, granting legal residency and flexibility to live and work remotely.",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
              },
              {
                icon: Shield,
                title: "Tax Freedom",
                description: "No income tax on foreign earnings, ensuring financial clarity and opportunity.",
                color: "text-blue-700",
                bgColor: "bg-blue-50"
              },
              {
                icon: Zap,
                title: "Fintech Platform",
                description: "Comprehensive banking and business management tools, including multi-currency accounts and payment gateways.",
                color: "text-blue-800",
                bgColor: "bg-blue-50"
              },
              {
                icon: Globe,
                title: "Global Insurance",
                description: "Travel and medical coverage through Air Doctor, with support in 200+ countries for peace of mind.",
                color: "text-blue-900",
                bgColor: "bg-blue-50"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${feature.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black-950">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Movement Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join the Movement
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-blue-100">
              InfinityOS connects identity, protection, and opportunity. Infinity Village is its physical embodiment—a vibrant hub where the next generation of global living comes alive.
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-200">
              Step into a world where your work, wellness, and community thrive without limits.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">
                Infinity Village: Where Freedom Meets Structure
              </h3>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group">
                Explore Infinity Village
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 