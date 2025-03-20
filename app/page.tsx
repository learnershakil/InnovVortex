"use client"

import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import ProductSection from "@/components/product-section"
import ConsultancySection from "@/components/consultancy-section"
import ContactSection from "@/components/contact-section"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A2647] to-[#071A32]">
      <Navbar />
      <HeroSection />

      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#00E8FC]">Solutions</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover how InnovVortex is revolutionizing industries with cutting-edge robotics, IoT solutions, and expert
            consultancy services.
          </p>
        </motion.div>

        <ProductSection
          title="Robots for Sale"
          description="Advanced robotics solutions designed for industrial and commercial applications."
          type="iot"
        />

        <ProductSection
          title="IoT Products"
          description="Smart devices that connect and optimize your business operations."
          type="iot"
        />

        <ConsultancySection />
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}

