'use client'

import { motion } from 'framer-motion'
import { Users, Shield, Globe, Target, Heart, Zap, Award, ArrowRight } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-black-950 via-black-900 to-black-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              
            </motion.div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              About <span className="text-orange-500">Us</span>
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-orange-300">
                We Build Communities. We Provide Protection.
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                At InsurMedix, we believe insurance is more than just coverage—it's a catalyst for creating stronger, more vibrant communities. Our mission is to transform protection into opportunity, empowering people to live boldly, move freely, and thrive anywhere in the world.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
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
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-4">
                  <Shield className="w-4 h-4 mr-2" />
                  Global InsurTech Group
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black-950 leading-tight">
                  Who We Are
                </h2>
              </div>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  InsurMedix is a trailblazing global InsurTech group, fully licensed across all 50 U.S. states and throughout Europe. We're not your traditional insurance provider.
                </p>
                <p>
                  By harnessing cutting-edge AI technology, we deliver innovative mobility insurance tailored to the dynamic needs of athletes, digital nomads, and the relocation industry.
                </p>
                <p>
                  Our approach blends precision, flexibility, and a deep commitment to fostering community growth.
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
              <div className="bg-gradient-to-br from-black-950 to-black-800 p-8 rounded-3xl text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold">Backed by Global Insurers</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Licensed in all 50 U.S. states</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Fully licensed throughout Europe</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>AI-powered technology platform</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-white rounded-full mr-3"></div>
                    <span>Community-driven approach</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-2xl opacity-20 animate-pulse"></div>
                              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-orange-500 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
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
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We design insurance solutions that empower and connect. Here's how we make a difference:
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "For Sports Clubs & Institutions",
                description: "We provide scalable, customized coverage that protects athletes and organizations while actively sponsoring and funding their growth. From grassroots teams to professional institutions, we fuel the passion that drives sports communities forward.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                icon: Globe,
                title: "For Digital Nomads",
                description: "Our seamless global protection is built for those who live without borders. Whether you're working from a beach in Bali or a café in Berlin, our AI-driven medical and travel coverage ensures you're protected, so you can focus on exploring and creating.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                icon: Shield,
                title: "For the Relocation Industry",
                description: "We offer specialized insurance solutions for individuals, families, and companies navigating the complexities of global relocation. From temporary moves to permanent transitions, we provide peace of mind with coverage that adapts to your journey.",
                color: "from-orange-500 to-orange-600",
                bgColor: "bg-orange-50"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`${service.bgColor} p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white shadow-lg mb-6`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black-950">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-black-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-orange-400">
                  Our Mission
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                To build communities and provide protection, making insurance a true public good. We're here to empower people to live, move, and thrive, anywhere in the world - by creating solutions that are as dynamic as the lives they support.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl font-bold mb-6 text-orange-400">
                  Our Vision
                </h2>
              </div>
              <p className="text-xl text-gray-300 leading-relaxed">
                We envision a borderless world where mobility is safe, communities are strong, and protection is a foundation for opportunity. At InsurMedix, we're not just insuring lives - we're enabling dreams, fostering connections, and building a future where everyone can move forward with confidence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Choose InsurMedix?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Reach, Local Impact",
                description: "Licensed in all 50 U.S. states and across Europe, we combine worldwide expertise with community-driven initiatives.",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                icon: Zap,
                title: "AI-Powered Innovation",
                description: "Our technology ensures personalized, efficient, and adaptive coverage for your unique needs.",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                icon: Heart,
                title: "Community First",
                description: "We don't just insure—we invest in sports clubs, empower nomads, and support global movers to create thriving communities.",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
              },
              {
                icon: Shield,
                title: "Borderless Protection",
                description: "Wherever you go, our coverage follows, giving you the freedom to live and work without limits.",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
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

      {/* Join Our Movement Section */}
      <section className="py-24 bg-gradient-to-br from-orange-500 to-orange-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Join Our Movement
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-orange-100">
              At InsurMedix, we're more than an insurance provider—we're a partner in your journey. Whether you're an athlete chasing a dream, a nomad exploring the world, or a family starting a new chapter, we're here to protect and empower you.
            </p>
            <p className="text-lg md:text-xl mb-12 text-orange-200">
              Together, let's build a world where communities thrive, and every journey is secure.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20"
            >
              <h3 className="text-2xl font-bold mb-4">
                InsurMedix: Protection that Powers Possibility.
              </h3>
              <a href="/partner" className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors inline-flex items-center group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 