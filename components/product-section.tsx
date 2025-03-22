"use client"

import { motion } from "framer-motion"
import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import Hexapod from "@/public/hexapod.jpeg"
import Hexapod2 from "@/public/hexapod2.jpeg"
import RoboticArm from "@/public/robotic-arm.jpeg"

interface Product {
  id: number
  name: string
  description: string
  image: string | StaticImageData
  price: string
}

interface ProductSectionProps {
  title: string
  description: string
  type: "iot"
}

export default function ProductSection({ title, description, type }: ProductSectionProps) {
  const iotProducts: Product[] = [
    {
      id: 1,
      name: "Milhex",
      description: "Entry-level 6-legged robot platform with basic movement controls, perfect for STEM education and hobbyist programming projects.",
      image: Hexapod,
      price: "Starting at ₹14,999",
    },
    {
      id: 2,
      name: "Hexdoc",
      description: "Rugged hexapod with enhanced lighting, sensors and stabilization systems designed specifically for cave exploration and confined spaces.",
      image: Hexapod2,
      price: "Starting at ₹39,999",
    },
    {
      id: 3,
      name: "Ai Powered Arm",
      description: "Precision robotic arm with machine learning capabilities for adaptive object manipulation, computer vision integration, and automated task learning.",
      image: RoboticArm,
      price: "Starting at ₹59,999",
    },
  ]

  const products = type === "iot" ? iotProducts : []
  const sectionId = type

  return (
    <section id={sectionId} className="py-16 bg-gradient-to-b from-[#0A2647] to-[#081c36]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          <span className="text-[#00E8FC]">{title}</span>
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0A2647]/70 border border-[#00E8FC]/20 rounded-lg overflow-hidden hover:border-[#00E8FC]/80 transition-all duration-300 shadow-lg hover:shadow-[#00E8FC]/20"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647] to-transparent opacity-60"></div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">
                <span className="text-[#00E8FC]">{product.name}</span>
              </h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <p className="text-[#00E8FC] font-medium mb-4">{product.price}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="bg-[#00E8FC] text-[#0A2647] px-4 py-2 rounded-md font-medium inline-block hover:bg-[#00E8FC]/90 transition-colors duration-300 shadow-md"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

