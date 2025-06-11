"use client"
import { motion } from "framer-motion"

export default function AnimatedAvatar() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-amber-50 rounded-full opacity-50" />

      <motion.div
        className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-100 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Main Avatar Container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-4/5 h-4/5">
          {/* Avatar Base */}
          <motion.div
            className="absolute inset-0 bg-amber-100 rounded-full"
            initial={{ scale: 0.9 }}
            animate={{
              scale: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          {/* Stylized Avatar Elements */}
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 w-full h-full"
            style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Face Shape */}
            <motion.path
              d="M30,35 C30,20 45,15 50,15 C55,15 70,20 70,35 C70,50 65,70 50,75 C35,70 30,50 30,35 Z"
              fill="#f5efe7"
              stroke="#e8e0d5"
              strokeWidth="0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />

            {/* Hair */}
            <motion.path
              d="M25,35 C25,15 40,10 50,10 C60,10 75,15 75,35 C75,40 73,45 73,45 L70,30 C70,30 65,15 50,15 C35,15 30,30 30,30 L27,45 C27,45 25,40 25,35 Z"
              fill="#3a3a3a"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Shirt */}
            <motion.path
              d="M25,75 L30,60 C30,60 40,70 50,70 C60,70 70,60 70,60 L75,75 L75,100 L25,100 Z"
              fill="#e6dccf"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Eyes */}
            <g>
              <motion.ellipse
                cx="40"
                cy="40"
                rx="3"
                ry={3}
                fill="#3a3a3a"
                animate={{
                  ry: [3, 1, 3],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
              <motion.ellipse
                cx="60"
                cy="40"
                rx="3"
                ry={3}
                fill="#3a3a3a"
                animate={{
                  ry: [3, 1, 3],
                }}
                transition={{
                  duration: 6,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </g>

            {/* Eyebrows */}
            <motion.path
              d="M36,35 C36,35 38,33 42,34"
              stroke="#3a3a3a"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="transparent"
              animate={{
                d: ["M36,35 C36,35 38,33 42,34", "M36,36 C36,36 38,35 42,36", "M36,35 C36,35 38,33 42,34"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.path
              d="M58,35 C58,35 62,33 64,34"
              stroke="#3a3a3a"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="transparent"
              animate={{
                d: ["M58,35 C58,35 62,33 64,34", "M58,36 C58,36 62,35 64,36", "M58,35 C58,35 62,33 64,34"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Mouth */}
            <motion.path
              d="M43,55 C43,55 47,58 57,55"
              stroke="#3a3a3a"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="transparent"
              animate={{
                d: ["M43,55 C43,55 47,58 57,55", "M43,56 C43,56 47,59 57,56", "M43,55 C43,55 47,58 57,55"],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute -bottom-4 -right-4 w-1/4 h-1/4 bg-blue-200 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 7,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute left-0 bottom-0 w-1/5 h-1/5 bg-amber-200 rounded-full blur-lg"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
