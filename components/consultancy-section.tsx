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
      title: "3D Designing & Prototyping",
      description: "We specialize in creating high-quality functional and 3D-printable designs for various applications. Whether you need custom mechanical parts, enclosures, or complex assemblies, we ensure precision and efficiency in our designs.",
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
          className="lucide lucide-cube"
        >
          <path d="m21 16-9 5-9-5V8l9-5 9 5v8z" />
          <path d="m3 8 9 5 9-5" />
          <path d="M12 3v10" />
        </svg>
      ),
    },
    {
      id: 2,
      title: "Robotics Education & Training",
      description: "We offer hands-on robotics training for schools, colleges, and professionals, bridging the gap between theory and practical application. Our programs cover robotics, automation, and AI-driven technologies, equipping learners with the skills needed to develop and operate intelligent robotic systems.",
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
          className="lucide lucide-cpu"
        >
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M15 2v2" />
          <path d="M15 20v2" />
          <path d="M2 15h2" />
          <path d="M2 9h2" />
          <path d="M20 15h2" />
          <path d="M20 9h2" />
          <path d="M9 2v2" />
          <path d="M9 20v2" />
        </svg>
      ),
    },
    {
      id: 3,
      title: "IoT & Smart Device Development",
      description: "We design and develop IoT-enabled smart devices, integrating sensors and wireless communication for real-time data monitoring and automation. Whether it's for industrial automation or commercial use, our solutions are customized to the needs of the customer.",
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
          className="lucide lucide-wifi"
        >
          <path d="M12 20h.01" />
          <path d="M17 14a5 5 0 0 0-10 0" />
          <path d="M19.071 8.929A10 10 0 0 0 4.93 8.93" />
          <path d="M22 4A16 16 0 0 0 2 4" />
        </svg>
      ),
    },
    {
      id: 4,
      title: "End-to-End Product Development",
      description: "From concept to a fully functional prototype, we handle the entire product design and development process. Our team integrates mechanical, electronic, and software components to create innovative solutions tailored to your specific needs.",
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
          className="lucide lucide-package"
        >
          <path d="M16.5 9.4 7.55 4.24" />
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
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

