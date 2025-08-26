'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
// import Icon from '../../components/ui/Icon'

export default function GlobalCare() {
  return (
    <main className="min-h-screen">
      {/* HERO SECTION */}
      <section className="hero relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Desktop Video Background */}
          <div className="absolute inset-0 w-full h-full hidden md:block">
            <iframe
              src="https://www.youtube.com/embed/NSPlVEI0j2o?autoplay=1&mute=1&loop=1&playlist=NSPlVEI0j2o&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&start=40"
              title="Global Care Active"
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
              src="https://www.youtube.com/embed/o8q7auLARMQ?autoplay=1&mute=1&loop=1&playlist=o8q7auLARMQ&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080"
              title="Global Care Active Mobile"
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
          <div className="absolute inset-0 bg-black-950/60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >

          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Global Care Active
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl font-medium mb-8 text-gray-100 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Insurance that backs your team. Sponsorship that lifts your mission.
          </motion.p>
          
          <motion.p 
            className="text-lg md:text-xl font-medium mb-8 text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Powered by InsurMedix
          </motion.p>
        </div>
      </section>

      {/* WE SPONSOR SPORT SECTION */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight text-black-950">
                We sponsor sport.
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
                Global Care Active supports amateur and semi-professional sports organizations through smart, flexible insurance solutions — backed by sponsorship where it matters most.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                Whether you're a club, federation, or tournament organizer, our model is built to strengthen programs, improve safety, and elevate impact.
              </p>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mt-6">
                Sponsorship is offered selectively, based on the size, vision, and reach of your organization — and designed to grow alongside you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/global-care-active-team.png"               
                alt="Youth athletes celebrating with trophy"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* COVERAGE DESIGNED FOR SPORT */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black-950">
              Coverage Designed for Sport
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Global Care Active provides insurance that moves with your teams — from training to travel, matches to international tournaments.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-4">
              Each policy is built for the real needs of competitive sport, with tiered options that align with your structure, season, and exposure level.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="section-padding bg-black-950 text-white">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            What's Included
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Travel & Medical Assistance",
                description: "Full-scale support across 200+ countries, including emergency medical coverage, trip support, and multilingual coordination teams on the ground and available 24/7."
              },
              {
                icon: "🎧",
                title: "Dedicated Concierge for Teams",
                description: "Instant access to care — from injury management to rebooking, hospital navigation, and support during any disruption. Available to both athletes and staff, with boots-on-the-ground response in key regions."
              },
              {
                icon: "🛡️",
                title: "Institutional Master Policy",
                description: "One contract, total clarity. Cover your entire organization — members, staff, and coaches — under a unified agreement. No forms, no complexity."
              },
              {
                icon: "📱",
                title: "Seamless Member Onboarding",
                description: "Each member is onboarded through a simple mobile process. Admin dashboards provide visibility, control, and real-time updates."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-8 rounded-2xl bg-black-900/50 hover:bg-black-900 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-2xl">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PERKS BEYOND COVERAGE */}
      <section className="section-padding bg-blue-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >

            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black-950">
              Perks Beyond Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From branding visibility to access to events, resources, and performance perks — our partners benefit from a growing ecosystem of support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center text-black-950"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Who We Work With
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🏛️",
                title: "National & Regional Sports Federations"
              },
              {
                icon: "🏟️",
                title: "Amateur & Semi-Professional Clubs"
              },
              {
                icon: "🎓",
                title: "Sports Academies & Training Centers"
              },
              {
                icon: "🏆",
                title: "Tournament & League Organizers"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-black-950">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* READY TO ELEVATE */}
      <section className="section-padding bg-black-950 text-white">
        <div className="container-custom text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Elevate Your Team?
          </motion.h2>
          
          <motion.p 
            className="text-xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Are you a club, federation, or tournament organizer in the amateur or semi-professional sports world — and looking to join a sponsorship model that brings real coverage, real support, and real community value?
          </motion.p>
          
          <motion.p 
            className="text-xl mb-12 text-blue-400 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's talk.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link href="/partner" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-colors inline-block">
              Partner With Us
            </Link>
          </motion.div>
        </div>
      </section>


    </main>
  )
} 