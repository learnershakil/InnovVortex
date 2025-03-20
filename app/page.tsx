"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import HeroSection from "@/components/hero-section"
import ProductSection from "@/components/product-section"
import ConsultancySection from "@/components/consultancy-section"
import ContactSection from "@/components/contact-section"
import Chatbot from "@/components/chatbot"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function Home() {
  const [showChatbot, setShowChatbot] = useState(false)
  const [chatbotMinimized, setChatbotMinimized] = useState(false)
  const [showChatbotIntro, setShowChatbotIntro] = useState(false)

  useEffect(() => {
    // Show chatbot intro after 5 seconds
    const timer = setTimeout(() => {
      setShowChatbotIntro(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const toggleChatbot = () => {
    if (showChatbot) {
      // If already showing, toggle between minimized and maximized
      setChatbotMinimized(!chatbotMinimized)
    } else {
      // If not showing, show it and ensure it's not minimized
      setShowChatbot(true)
      setChatbotMinimized(false)
      setShowChatbotIntro(false)
    }
  }

  const closeChatbot = () => {
    setShowChatbot(false)
    setChatbotMinimized(false)
  }

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
          type="robots"
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

      {/* Chatbot Toggle Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <button
          onClick={() => setShowChatbot(!showChatbot)}
          className="bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] text-[#0A2647] rounded-full p-4 shadow-lg flex items-center justify-center"
          aria-label="Toggle chat assistant"
        >
          {showChatbot ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot"
              >
                <path d="M12 8V4H8" />
                <rect width="16" height="12" x="4" y="8" rx="2" />
                <path d="M2 14h2" />
                <path d="M20 14h2" />
                <path d="M15 13v2" />
                <path d="M9 13v2" />
              </svg>
              <span className="absolute -top-2 -right-2 w-3 h-3 bg-green-500 rounded-full border-2 border-[#00B4C6]"></span>
            </div>
          )}
        </button>
      </motion.div>

      {/* Chatbot intro message */}
      {showChatbotIntro && !showChatbot && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-16 right-0 bg-white text-[#0A2647] p-3 rounded-lg shadow-lg w-64"
        >
          <div className="flex justify-between items-start">
            <p className="text-sm font-medium">Need help with robotics or IoT solutions?</p>
            <button onClick={() => setShowChatbotIntro(false)} className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-1">Chat with our AI assistant powered by Google Gemini</p>
        </motion.div>
      )}

      {/* Chatbot Component */}
      {showChatbot && !chatbotMinimized && <Chatbot onClose={closeChatbot} />}
    </main>
  )
}

