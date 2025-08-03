"use client"

import { motion } from "framer-motion";

export default function ScrollingTextBanner() {
  return (
    <div className="w-full bg-neutral-950 py-20 relative overflow-hidden">
      {/* First scrolling line */}
      <div className="relative -rotate-6">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="whitespace-nowrap inline-flex"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent px-4 mx-4">
            INNOVATIVE SOLUTIONS • CREATIVE DESIGNS • MODERN TECHNOLOGY •&nbsp;
          </span>
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent px-4 mx-4">
            INNOVATIVE SOLUTIONS • CREATIVE DESIGNS • MODERN TECHNOLOGY •&nbsp;
          </span>
        </motion.div>
      </div>

      {/* Second scrolling line */}
      <div className="relative rotate-6 mt-8">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
          className="whitespace-nowrap inline-flex"
        >
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent px-4 mx-4">
            DIGITAL EXCELLENCE • CUSTOM SOLUTIONS • FUTURE READY •&nbsp;
          </span>
          <span className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent px-4 mx-4">
            DIGITAL EXCELLENCE • CUSTOM SOLUTIONS • FUTURE READY •&nbsp;
          </span>
        </motion.div>
      </div>
    </div>
  );
}
