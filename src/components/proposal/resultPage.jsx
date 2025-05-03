'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ResultPage = ({ resultText }) => {
  return (
    <motion.div 
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white border-opacity-20 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div 
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="relative mb-8">
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{ 
              boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 30px rgba(255,192,203,0.8)", "0 0 0px rgba(255,255,255,0)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            // animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-4 border-dashed border-pink-300 border-opacity-50"
          />
          <motion.div
            className="relative z-10 h-32 w-32 flex items-center justify-center bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-5xl"
            >
              😍
            </motion.span>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.h1 
            className="text-3xl font-bold text-white mb-6"
            animate={{ 
              color: ["#000", "#ffcccc", "#000"] 
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Thank You!
          </motion.h1>
          
          <motion.p 
            className="text-xl gradient-text-white-bg"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              textShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 10px rgba(255,255,255,0.5)", "0 0 0px rgba(255,255,255,0)"] 
            }}
            transition={{ 
              opacity: { delay: 1.2 },
              textShadow: { duration: 2, repeat: Infinity }
            }}
          >
            {resultText}
          </motion.p>
          
          <motion.div
            className="mt-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.5, type: "spring" }}
          >
            <motion.div
              className="inline-block"
              animate={{ 
                y: [0, -10, 0] 
              }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="text-5xl">🎉</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ResultPage;