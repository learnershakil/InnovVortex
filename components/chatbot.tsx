"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { generateText } from "ai"
import { google } from "@ai-sdk/google"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

interface ChatbotProps {
  onClose: () => void
}

export default function Chatbot({ onClose }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hello! I'm the InnovVortex AI assistant. How can I help you with our robotics, IoT solutions, or consultancy services today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
    // Focus the input field when the chatbot opens
    inputRef.current?.focus()
  }, [messages])

  const generateSystemPrompt = () => {
    return `You are an AI assistant for InnovVortex, a company specializing in Robotics, IoT Products, and Consultancy Services.

Your role is to provide helpful, professional responses about InnovVortex's products and services:

1. Robotics: Industrial robots (IndustriBot X1), logistics robots (LogistiBot Pro), and healthcare robots (MediBot Assistant)
2. IoT Products: SmartSensor Pro, ConnectHub Enterprise, and DataFlow Analytics
3. Consultancy Services: Technology Assessment, Implementation Strategy, Training & Support, and ROI Analysis

Keep responses concise (max 3 sentences), professional, and focused on helping potential customers understand our offerings. If asked about pricing, suggest scheduling a consultation for detailed quotes. For technical questions beyond your knowledge, offer to connect them with a specialist.

Always maintain a helpful, professional tone aligned with our high-tech brand.`
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      // Create conversation history for context
      const conversationHistory = messages
        .map((msg) => `${msg.sender === "user" ? "User" : "Assistant"}: ${msg.text}`)
        .join("\n")

      // Generate response using Gemini API
      const { text } = await generateText({
        model: google("gemini-pro"),
        prompt: `${conversationHistory}\nUser: ${input}`,
        system: generateSystemPrompt(),
      })

      const botMessage: Message = {
        id: Date.now().toString(),
        text: text.trim(),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error generating response:", error)

      // Fallback response in case of API error
      const errorMessage: Message = {
        id: Date.now().toString(),
        text: "I apologize, but I'm having trouble connecting to our systems. Please try again or contact us directly at info@innovvortex.com.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-24 right-6 w-80 sm:w-96 h-[450px] bg-gradient-to-b from-[#0A2647] to-[#071A32] border border-[#00E8FC]/30 rounded-lg shadow-2xl flex flex-col z-50 overflow-hidden"
    >
      {/* Header */}
      <div className="bg-[#071A32] border-b border-[#00E8FC]/30 p-4 rounded-t-lg flex justify-between items-center">
        <div className="flex items-center">
          <div className="relative mr-3">
            <div className="w-8 h-8 bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A2647"
                strokeWidth="2.5"
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
            </div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#071A32]"></div>
          </div>
          <div>
            <h3 className="text-white font-medium">InnovVortex AI</h3>
            <p className="text-[#00E8FC] text-xs">Online | Powered by Gemini</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-white transition-colors duration-300 p-1 hover:bg-[#0A2647]/50 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
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

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-[#00E8FC]/20 scrollbar-track-transparent">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              {message.sender === "bot" && (
                <div className="w-8 h-8 bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] rounded-full flex items-center justify-center mr-2 flex-shrink-0 self-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0A2647"
                    strokeWidth="2.5"
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
                </div>
              )}

              <div
                className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                  message.sender === "user"
                    ? "bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] text-[#0A2647] rounded-tr-none"
                    : "bg-[#0A2647] text-white border border-[#00E8FC]/30 rounded-tl-none"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1 text-right">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              {message.sender === "user" && (
                <div className="w-8 h-8 bg-[#00E8FC]/20 rounded-full flex items-center justify-center ml-2 flex-shrink-0 self-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#00E8FC"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}

          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-start"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] rounded-full flex items-center justify-center mr-2 flex-shrink-0 self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0A2647"
                  strokeWidth="2.5"
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
              </div>
              <div className="bg-[#0A2647] text-white border border-[#00E8FC]/30 rounded-2xl rounded-tl-none px-4 py-3">
                <div className="flex space-x-1">
                  <motion.div
                    className="w-2 h-2 bg-[#00E8FC] rounded-full"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-[#00E8FC] rounded-full"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-[#00E8FC] rounded-full"
                    animate={{
                      y: [0, -5, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="border-t border-[#00E8FC]/30 p-4 bg-[#071A32]">
        <div className="flex items-center bg-[#0A2647] border border-[#00E8FC]/30 rounded-full overflow-hidden pl-4 pr-1 py-1 focus-within:border-[#00E8FC]/70 transition-colors duration-300">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about our products & services..."
            className="flex-1 bg-transparent border-none outline-none text-white text-sm"
          />
          <motion.button
            type="submit"
            disabled={isTyping || !input.trim()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#00E8FC] to-[#00B4C6] text-[#0A2647] p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </motion.button>
        </div>

        <div className="mt-2 text-center">
          <p className="text-xs text-gray-400">Powered by Google Gemini AI</p>
        </div>
      </form>
    </motion.div>
  )
}

