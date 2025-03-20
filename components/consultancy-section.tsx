"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Consultancy from "@/public/consultancy.jpg"

interface Service {
  id: number
  title: string
  description: string
  icon: React.ReactNode
}

export default function ConsultancySection() {
  const services: Service[] = [
    {
      id: 1,
      title: "Technology Assessment",
      description: "Comprehensive evaluation of your existing infrastructure tailored to Indian business requirements and regulatory frameworks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E8FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-clipboard-check"
        >
          <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
          <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
          <path d="m9 14 2 2 4-4" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Digital Transformation Strategy",
      description: "India-focused roadmap for integrating robotics and IoT solutions, considering local supply chains and market dynamics.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E8FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-route"
        >
          <circle cx="6" cy="19" r="3" />
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
          <circle cx="18" cy="5" r="3" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Skill Development & Support",
      description: "Specialized training programs in Hindi and English with ongoing technical support for your Indian team.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E8FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-graduation-cap"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Investment Analysis",
      description: "Cost-benefit analysis with ROI projections tailored for Indian economic conditions and business environment.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#00E8FC"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-bar-chart-3"
        >
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
    },
  ]

  return (
    <section id="services" className="py-16 bg-[#0A2647]/95">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#00E8FC] mb-4">Consultancy Services</h2>
        <p className="text-gray-100 max-w-2xl mx-auto">
          Expert guidance to help Indian businesses leverage innovative technologies for the digital economy.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0A2647] border-2 border-[#00E8FC]/20 rounded-lg p-6 hover:border-[#00E8FC]/70 transition-all duration-300 shadow-lg hover:shadow-[#00E8FC]/20"
          >
            <div className="flex items-start">
              <div className="text-[#00E8FC] mr-4 bg-[#0A2647]/80 p-3 rounded-full border border-[#00E8FC]/30">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00E8FC] mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-r from-[#0A2647] to-[#071A32] border-2 border-[#00E8FC]/30 rounded-lg p-8 max-w-7xl mx-auto shadow-xl shadow-[#00E8FC]/5 mx-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#00E8FC] mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-100 mb-6">
              Our team of experts understands the unique challenges of the Indian market. We help you navigate the 
              technology landscape with solutions designed for India&apos;s infrastructure, compliance requirements, and 
              business ecosystem. Let&apos;s build a future-ready business together.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-[#00E8FC] text-[#0A2647] px-6 py-3 rounded-md font-medium inline-block hover:bg-white transition-colors duration-300 shadow-lg shadow-[#00E8FC]/30"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden shadow-xl">
            <Image
              src= {Consultancy}
              alt="Tech Consultancy in India"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

