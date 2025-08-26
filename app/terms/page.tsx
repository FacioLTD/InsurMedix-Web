'use client'

import { motion } from 'framer-motion'
import { FileText, Scale, AlertTriangle, Shield, Globe, Clock, UserCheck } from 'lucide-react'

export default function TermsOfUse() {
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
              <FileText className="w-16 h-16 text-orange-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Use
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {/* Header Info */}
            <div className="bg-gray-50 p-8 rounded-2xl mb-12 border-l-4 border-orange-500">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-orange-500 mr-3" />
                <h2 className="text-3xl font-bold text-black-950 m-0">
                  InsurMedix Terms of Use
                </h2>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">Last updated:</span>
                <span className="ml-2">November 8, 2022</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                Introduction
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your access to and use of this site is subject to the following terms and conditions and all applicable laws.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using this site, you accept the following terms and conditions, without limitation or qualification.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-blue-500 mr-3" />
                Intellectual Property Rights
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless otherwise stated, the contents of this site including, but not limited to, the text and images contained herein and their arrangement are the property of InsurMedix Inc. All trademarks used or referred to in this website are the property of their respective owners.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Nothing contained in this site shall be construed as conferring by implication, estoppel, or otherwise, any license or right to any copyright, patent, trademark or other proprietary interest of InsurMedix or any third party. This site and the content provided in this site, including, but not limited to, graphic images, audio, video, html code, buttons, and text, may not be copied, reproduced, republished, uploaded, posted, transmitted, or distributed in any way, without the prior written consent of InsurMedix, except that you may download, display, and print one copy of the materials on any single computer solely for your personal, non-commercial use, provided that you do not modify the material in any way and you keep intact all copyright, trademark, and other proprietary notices.
              </p>
            </div>

            {/* External Links */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <Globe className="w-6 h-6 text-green-500 mr-3" />
                External Links and Third-Party Services
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Links on this site may lead to services or sites not operated by InsurMedix. No judgment or warranty is made with respect to such other services or sites and InsurMedix takes no responsibility for such other sites or services. A link to another site or service is not an endorsement of that site or service. Any use you make of the information provided on this site, or any site or service linked to by this site, is at your own risk.
              </p>
            </div>

            {/* Disclaimer */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                Disclaimer of Warranties
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                This site and its contents are provided "as is" and InsurMedix makes no representation or warranty of any kind with respect to this site or any site or service accessible through this site. InsurMedix expressly disclaims all express and implied warranties including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In no event will either InsurMedix or its third-party service providers be liable to any party for any direct, indirect, incidental, special, exemplary, consequential, or other damages (including, but not limited to, lost profits, business interruption, loss of programs or data) without regard to the form of action and whether in contract, tort, negligence, strict liability, or otherwise, arising out of or in connection with this site, any content on or accessed through this site or any site service linked to, or any copying, displaying, or use thereof.
              </p>
            </div>

            {/* Jurisdiction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <Scale className="w-6 h-6 text-purple-500 mr-3" />
                Jurisdiction and Governing Law
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                InsurMedix maintains this site in New York, U.S.A. and you agree that these terms of use and any legal action or proceeding relating to this site shall be governed by the laws of the State of New York without reference to its choice of law rules.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you attempt to bring any legal proceedings against InsurMedix you specifically acknowledge that InsurMedix is free to choose the jurisdiction of our preference as to where such action against us may be held. As you have agreed by using this site to choose the laws of the State of New York to govern any such proceedings, we will probably choose to defend any such action in New York and we can make this decision entirely as it suits us, without regard to where in the world you are located, or from wherein the world you visited this site.
              </p>
            </div>

            {/* User Responsibilities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-indigo-500 mr-3" />
                User Responsibilities and Compliance
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for complying with the laws of the jurisdiction from which you are accessing this site and you agree that you will not access or use the information on this site in violation of such laws.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unless expressly stated otherwise herein, any information submitted by you through this site shall be deemed non-confidential and non-proprietary. You represent that you have the lawful right to submit such information and agree that you will not submit any information unless you are legally entitled to do so.
              </p>
            </div>

            {/* Idea Submissions */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-black-950 mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-orange-500 mr-3" />
                Idea Submissions Policy
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                InsurMedix does not accept unauthorized idea submissions outside of established business relationships. To protect the interests of our current clients and ourselves, we must treat the issue of such submissions with great care. Importantly, without a clear business relationship, InsurMedix cannot and does not treat any such submissions in confidence.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Accordingly, please do not communicate unauthorized idea submissions to InsurMedix through this website. Any ideas disclosed to InsurMedix outside a pre-existing and documented confidential business relationship are not confidential and InsurMedix may therefore develop, use and freely disclose or publish similar ideas without compensating you or accounting to you.
              </p>
              <p className="text-gray-700 leading-relaxed">
                InsurMedix will make every reasonable effort to return or destroy any unauthorized idea submissions without detailed review of them. However, if a review is necessary in InsurMedix's sole discretion, it will be with the understanding that InsurMedix assumes no obligation to protect the confidentiality of your idea or compensate you for its disclosure or use. By submitting an idea or other detailed submission to InsurMedix through this website, you agree to be bound by the terms of this stated policy.
              </p>
            </div>


          </motion.div>
        </div>
      </section>
    </main>
  )
}
