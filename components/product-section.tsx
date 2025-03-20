"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

interface Product {
  id: number
  name: string
  description: string
  image: string
  price: string
}

interface ProductSectionProps {
  title: string
  description: string
  type: "robots" | "iot"
}

export default function ProductSection({ title, description, type }: ProductSectionProps) {
  const robotProducts: Product[] = [
    {
      id: 1,
      name: "IndustriBot X1",
      description: "Industrial automation robot with advanced precision control and AI capabilities.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $12,999",
    },
    {
      id: 2,
      name: "LogistiBot Pro",
      description: "Warehouse logistics robot designed for efficient inventory management and transport.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $9,499",
    },
    {
      id: 3,
      name: "MediBot Assistant",
      description: "Healthcare assistant robot for patient monitoring and medical supply delivery.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $15,999",
    },
  ]

  const iotProducts: Product[] = [
    {
      id: 1,
      name: "SmartSensor Pro",
      description: "Industrial-grade IoT sensors with real-time monitoring and predictive analytics.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $499",
    },
    {
      id: 2,
      name: "ConnectHub Enterprise",
      description: "Centralized IoT management system for seamless device integration and control.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $1,299",
    },
    {
      id: 3,
      name: "DataFlow Analytics",
      description: "Advanced IoT data processing platform with customizable dashboards and insights.",
      image: "/placeholder.svg?height=400&width=600",
      price: "Starting at $899",
    },
  ]

  const products = type === "robots" ? robotProducts : iotProducts
  const sectionId = type === "robots" ? "robots" : "iot"

  return (
    <section id={sectionId} className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">{description}</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0A2647]/50 border border-[#00E8FC]/20 rounded-lg overflow-hidden hover:border-[#00E8FC]/50 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <p className="text-[#00E8FC] font-medium mb-4">{product.price}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="bg-[#00E8FC] text-[#0A2647] px-4 py-2 rounded-md font-medium inline-block hover:bg-[#00E8FC]/80 transition-colors duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="#contact"
            className="bg-transparent text-[#00E8FC] border border-[#00E8FC] px-6 py-3 rounded-md font-medium inline-block hover:bg-[#00E8FC]/10 transition-colors duration-300"
          >
            View All {type === "robots" ? "Robots" : "IoT Products"}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

