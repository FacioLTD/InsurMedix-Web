'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Users, Cpu, ArrowDown, Upload, Send } from 'lucide-react'

export default function CareersPage() {
  const [selectedPosition, setSelectedPosition] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cvFile: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const scrollToOpenings = () => {
    document.getElementById('job-openings')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToApplication = () => {
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && (file.type === 'application/pdf' || file.type.includes('word'))) {
      setFormData({ ...formData, cvFile: file })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      setFormData({ fullName: '', email: '', cvFile: null })
      setSelectedPosition('')
    }, 2000)
  }

  const jobPositions = [
    {
      id: 'coo-global-care',
      title: 'Chief Operating Officer, Global Care',
      description: 'Scale and optimize operations for our international travel & health platform.',
      icon: MapPin,
      category: 'COO Global Care'
    },
    {
      id: 'digital-nomads-md',
      title: 'Digital Nomads Managing Director',
      description: 'Lead strategy and partnerships for our pioneering nomad lifestyle ecosystem.',
      icon: Users,
      category: 'Digital Nomads MD'
    },
    {
      id: 'senior-ai-dev',
      title: 'Senior AI Developer',
      description: 'Build real-world AI applications that transform insurance, claims, and customer experience.',
      icon: Cpu,
      category: 'Senior AI Dev'
    }
  ]

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

            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
              Join the <span className="text-orange-500">InsurMedix</span> Team
            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                We're redefining global insurance - from travel and health (Global Care) to the future of digital nomads. Be part of the team that builds services the world has never seen before.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button 
                onClick={scrollToOpenings}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold text-lg px-8 py-4 rounded-xl transition-colors inline-flex items-center group"
              >
                View Open Roles
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Team Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black-950">
              About the Team
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              Creating an amazing service from a bold idea takes creativity, dedication, and teamwork. At InsurMedix, we combine cutting-edge technology with visionary thinking to deliver world-class solutions in insurance and beyond. If you've got drive, passion, and expertise — we want you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Job Opportunities Section */}
      <section id="job-openings" className="py-24 bg-black-950 text-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Job Opportunities
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="p-8 rounded-2xl bg-black-900/50 hover:bg-black-900 transition-all duration-300 border border-gray-800"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <job.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{job.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-6">{job.description}</p>
                <button 
                  onClick={scrollToApplication}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-black-950">
              Apply Now
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Position Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select a Position *
                </label>
                <select
                  value={selectedPosition}
                  onChange={(e) => setSelectedPosition(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                >
                  <option value="">Choose a position...</option>
                  <option value="COO Global Care">COO Global Care</option>
                  <option value="Digital Nomads MD">Digital Nomads MD</option>
                  <option value="Senior AI Dev">Senior AI Dev</option>
                </select>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="Enter your email address"
                />
              </div>

              {/* CV Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload CV (PDF/Docx only) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-1">Maximum file size: 10MB</p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors inline-flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Apply Now
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-800 text-center">
                  Thanks! We'll be in touch soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-800 text-center">
                  Something went wrong. Please try again.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA Section */}
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
              We're looking for builders.
            </h2>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed text-orange-100">
              If you're ready to change industries and make history, apply today.
            </p>
            

          </motion.div>
        </div>
      </section>
    </main>
  )
}
