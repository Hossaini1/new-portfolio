"use client"
import { motion } from "framer-motion"
import { useState } from "react"

export default function RealisticAvatar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto aspect-square">
      {/* Background with outdoor atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-100 via-blue-50 to-amber-50 rounded-2xl overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full blur-xl"
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

        <motion.div
          className="absolute bottom-0 left-0 w-24 h-24 bg-amber-200/40 rounded-full blur-lg"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      {/* Main avatar container */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative w-4/5 h-4/5">
          {/* Realistic avatar illustration */}
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full drop-shadow-lg"
            style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.1))" }}
          >
            {/* Background circle */}
            <motion.circle
              cx="100"
              cy="100"
              r="95"
              fill="url(#backgroundGradient)"
              initial={{ scale: 0.9 }}
              animate={{
                scale: isHovered ? 1.05 : 1,
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="backgroundGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f0f9ff" className="dark:stop-color-slate-800" />
                <stop offset="100%" stopColor="#fef3c7" className="dark:stop-color-amber-900" />
              </linearGradient>
              <linearGradient id="skinGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#fef2e8" />
                <stop offset="100%" stopColor="#f4e4d1" />
              </linearGradient>
              <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f5f1e8" />
                <stop offset="100%" stopColor="#e8dcc6" />
              </linearGradient>
              <linearGradient id="hairGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2d2d2d" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
            </defs>

            {/* Shirt/Body */}
            <motion.path
              d="M50 140 C50 140 60 130 100 130 C140 130 150 140 150 140 L150 200 L50 200 Z"
              fill="url(#shirtGradient)"
              stroke="#d4c5a9"
              strokeWidth="1"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            />

            {/* Neck */}
            <motion.ellipse
              cx="100"
              cy="125"
              rx="12"
              ry="15"
              fill="url(#skinGradient)"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            />

            {/* Face */}
            <motion.ellipse
              cx="100"
              cy="90"
              rx="35"
              ry="40"
              fill="url(#skinGradient)"
              stroke="#e8dcc6"
              strokeWidth="0.5"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            />

            {/* Hair */}
            <motion.path
              d="M65 70 C65 45 80 35 100 35 C120 35 135 45 135 70 C135 75 133 80 130 85 L125 75 C125 75 120 40 100 40 C80 40 75 75 75 75 L70 85 C67 80 65 75 65 70 Z"
              fill="url(#hairGradient)"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
            />

            {/* Eyes */}
            <g>
              <motion.ellipse
                cx="88"
                cy="85"
                rx="4"
                ry="3"
                fill="#2d2d2d"
                animate={{
                  ry: isHovered ? [3, 1, 3] : 3,
                }}
                transition={{
                  duration: 0.3,
                  times: [0, 0.5, 1],
                }}
              />
              <motion.ellipse
                cx="112"
                cy="85"
                rx="4"
                ry="3"
                fill="#2d2d2d"
                animate={{
                  ry: isHovered ? [3, 1, 3] : 3,
                }}
                transition={{
                  duration: 0.3,
                  times: [0, 0.5, 1],
                }}
              />
              {/* Eye highlights */}
              <circle cx="89" cy="84" r="1" fill="white" opacity="0.8" />
              <circle cx="113" cy="84" r="1" fill="white" opacity="0.8" />
            </g>

            {/* Eyebrows */}
            <motion.path
              d="M82 78 C85 76 91 77 92 78"
              stroke="#2d2d2d"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: isHovered
                  ? ["M82 78 C85 76 91 77 92 78", "M82 77 C85 75 91 76 92 77", "M82 78 C85 76 91 77 92 78"]
                  : "M82 78 C85 76 91 77 92 78",
              }}
              transition={{ duration: 0.5 }}
            />
            <motion.path
              d="M108 78 C109 77 115 76 118 78"
              stroke="#2d2d2d"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: isHovered
                  ? ["M108 78 C109 77 115 76 118 78", "M108 77 C109 76 115 75 118 77", "M108 78 C109 77 115 76 118 78"]
                  : "M108 78 C109 77 115 76 118 78",
              }}
              transition={{ duration: 0.5 }}
            />

            {/* Nose */}
            <motion.path
              d="M98 90 C98 92 100 94 102 92"
              stroke="#d4c5a9"
              strokeWidth="1"
              strokeLinecap="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 1, delay: 0.8 }}
            />

            {/* Mouth */}
            <motion.path
              d="M92 105 C96 108 104 108 108 105"
              stroke="#c4a484"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              animate={{
                d: isHovered
                  ? [
                      "M92 105 C96 108 104 108 108 105",
                      "M92 106 C96 110 104 110 108 106",
                      "M92 105 C96 108 104 108 108 105",
                    ]
                  : "M92 105 C96 108 104 108 108 105",
              }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            />

            {/* Facial hair/stubble effect */}
            <motion.ellipse
              cx="100"
              cy="110"
              rx="15"
              ry="8"
              fill="#e8dcc6"
              opacity="0.3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1, delay: 1.2 }}
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating elements for atmosphere */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-2 h-2 bg-green-400/60 rounded-full"
        animate={{
          y: [-10, 10, -10],
          opacity: [0.4, 0.8, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-amber-400/60 rounded-full"
        animate={{
          y: [10, -10, 10],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Interactive glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl"
        animate={{
          boxShadow: isHovered ? "0 0 30px rgba(59, 130, 246, 0.3)" : "0 0 0px rgba(59, 130, 246, 0)",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}
