"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-[#0A2647] border-b border-[#00E8FC]/30 fixed w-full z-50 shadow-lg shadow-[#00E8FC]/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-white font-bold text-2xl flex items-center"
            >
              <span className="text-[#00E8FC] mr-1">Innov</span>Vortex
              <motion.div
                className="ml-2 w-2 h-2 bg-[#00E8FC] rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  boxShadow: ["0 0 0px #00E8FC", "0 0 8px #00E8FC", "0 0 0px #00E8FC"],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {["Home", "Products", "Services", "About", "Contact"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00E8FC] transition-all duration-300 font-medium relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00E8FC] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#contact"
                className="bg-[#00E8FC] text-[#0A2647] px-5 py-2.5 rounded-md font-medium hover:bg-[#00E8FC]/90 transition-all duration-300 shadow-md shadow-[#00E8FC]/20"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-[#00E8FC] transition-colors duration-300"
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? (
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
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              ) : (
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
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0A2647] border-t border-[#00E8FC]/20"
        >
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-5">
            {["Home", "Products", "Services", "About", "Contact"].map((item) => (
              <motion.div
                key={item}
                whileTap={{ scale: 0.97 }}
                className="border-b border-[#00E8FC]/10 pb-2"
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-[#00E8FC] transition-colors duration-300 py-2 block"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="#contact"
                className="bg-[#00E8FC] text-[#0A2647] px-4 py-3 rounded-md font-medium hover:bg-[#00E8FC]/90 transition-all duration-300 text-center block shadow-md shadow-[#00E8FC]/20"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </nav>
  )
}

