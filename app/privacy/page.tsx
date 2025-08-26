'use client'

import { motion } from 'framer-motion'
import { Shield, Eye, Lock, FileText } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-16 bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy and data security are our top priorities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-black-950 mb-4">
                InsurMedix INC Online Privacy Policy
              </h2>
              <p className="text-gray-600 mb-2">
                <strong>Last updated:</strong> November 1, 2021
              </p>
            </div>

            <div className="space-y-8">
              {/* Introduction */}
              <div>
                <p className="text-gray-700 leading-relaxed">
                  Welcome to the InsurMedix INC ("InsurMedix") website (www.insurmedix.com) (the "Website"). 
                  This written online privacy policy (this "Privacy Policy") is designed to inform our website 
                  users and visitors ("Users") about our practices related to the collection, use, and disclosure 
                  of information that you may provide to us, including via this Website and certain other related services. 
                  Please be sure to read this entire Privacy Policy before using, or submitting information to, this Website.
                </p>
              </div>

              {/* Agreement Section */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold text-black-950 mb-3">Agreement to this Privacy Policy</h3>
                <p className="text-gray-700">
                  By using this Website, you consent to this Privacy Policy, including your consent to our use 
                  and disclosure of information about you in the manner described herein.
                </p>
              </div>

              {/* Information Collection */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                  <Eye className="w-6 h-6 text-orange-400 mr-3" />
                  Information We Collect About You and How We Collect It
                </h3>
                <p className="text-gray-700 mb-4">
                  We may collect several types of information from and about Users, including information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>By which you may be personally identified, such as name, postal address, birth date, e-mail address, or telephone number ("personal information");</li>
                  <li>That is about you but individually does not identify you, such as non-personal demographic information;</li>
                  <li>About your internet connection, the equipment you use to access our Website and usage details.</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We may collect this information:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Directly from you when you provide it to us; or</li>
                  <li>Automatically as you navigate through the Website. Information collected automatically may include usage details, IP addresses, and information collected through cookies, web beacons and/or other tracking technologies.</li>
                </ul>
              </div>

              {/* Information You Provide */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4">Information You Provide to Us</h3>
                <p className="text-gray-700 mb-4">The information we collect may include:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Information that you provide by filling in forms on our Website. This may include information provided at the time of registering to use our Website, subscribing to our emails or text messages, or requesting further information or services.</li>
                  <li>Records and copies of your correspondence (including mail addresses), if you contact us.</li>
                  <li>Your responses to surveys that we might ask you to complete for research purposes.</li>
                  <li>Your search queries on the Website.</li>
                  <li>Information provided to us through social networks or third-party platforms when you engage with our social media content.</li>
                </ul>
              </div>

              {/* Health Information */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-black-950 mb-3">Your Personal Health Information</h3>
                <p className="text-gray-700">
                  In certain limited circumstances, InsurMedix's use of your information may also be subject to the 
                  requirements of the Health Insurance Portability and Accountability Act ("HIPAA"). For example, 
                  if you complete a personalized health risk assessment, the information you provide may be subject to HIPAA.
                </p>
              </div>

              {/* Usage Details */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4">Usage Details, IP Addresses and Cookies</h3>
                <p className="text-gray-700 mb-4">
                  As you navigate through and interact with our Website, we may automatically collect certain information 
                  about your equipment, browsing actions and patterns, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Details of your visits to our Website, including traffic data, location data, logs and other communication data</li>
                  <li>Information about your computer and internet connection, including your IP address, operating system and browser type</li>
                </ul>
              </div>

              {/* Third Party Analytics */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4">Third Party Web Analytics Services</h3>
                <p className="text-gray-700 mb-4">
                  We may use third party web analytics services on this Website and our social media pages, such as 
                  those of Google Analytics. These services use technologies such as cookies, web server logs and 
                  web beacons to collect information and help us analyze how visitors use the Website.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> You may deactivate Google Analytics by downloading the browser add-on at{' '}
                    <a href="https://tools.google.com/dlpage/gaoptout?hl=en" className="text-orange-500 hover:underline" target="_blank" rel="noopener noreferrer">
                      https://tools.google.com/dlpage/gaoptout
                    </a>
                  </p>
                </div>
              </div>

              {/* How We Use Information */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4">How We Use Your Information</h3>
                <p className="text-gray-700 mb-4">
                  We may use the information that we collect about you for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>To manage your account, if you have one with us</li>
                  <li>To present our Website and its contents to you</li>
                  <li>To provide you with information, products, or services that you request</li>
                  <li>To process and complete your transaction(s), if any</li>
                  <li>To notify you about changes to our Website or any products or services we offer</li>
                  <li>To allow you to participate in interactive features on our Website</li>
                  <li>To respond to your inquiries</li>
                  <li>For other purposes with your consent</li>
                </ul>
              </div>

              {/* Data Protection */}
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-semibold text-black-950 mb-3 flex items-center">
                  <Lock className="w-6 h-6 text-green-400 mr-3" />
                  How Do We Protect Your Personal Information?
                </h3>
                <p className="text-gray-700">
                  We use many different measures to help protect information transmitted over or stored on our systems. 
                  Your Personal Information is contained behind secured networks and is encrypted when transmitted to us 
                  via Secure Socket Layer (SSL) technology. We regularly review our information collection, storage, 
                  and processing practices to guard against unauthorized access to systems.
                </p>
              </div>

              {/* Children */}
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-black-950 mb-3">Children Under 18</h3>
                <p className="text-gray-700">
                  Our Website is not intended to be used by children under 18 years old. You represent and warrant 
                  that you are at least 18 years of age. If you are under age 18, you may not use the Website or services.
                </p>
              </div>

              {/* Changes to Policy */}
              <div>
                <h3 className="text-2xl font-bold text-black-950 mb-4">Changes to This Privacy Policy</h3>
                <p className="text-gray-700">
                  We reserve the right to modify this Privacy Policy at any time. Any and all changes will be made here, 
                  to this Privacy Policy. We encourage you to check our Website frequently to see the current privacy policy.
                </p>
              </div>

              {/* Contact Information */}
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-xl font-semibold text-black-950 mb-3">Contacting Us</h3>
                <p className="text-gray-700 mb-4">
                  If you have any questions about your personal information or this Privacy Policy, please contact us by email at{' '}
                  <a href="mailto:info@insurmedix.com" className="text-orange-500 hover:underline font-semibold">
                    info@insurmedix.com
                  </a>
                </p>
                <p className="text-gray-600 text-sm">
                  Please print and retain a copy of this privacy policy for your records.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
