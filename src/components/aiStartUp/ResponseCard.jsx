'use client';
import { motion } from 'framer-motion';

export default function ResponseCard({ text }) {
  return (
    <motion.div
      className="mt-10 bg-white border shadow-xl rounded-xl p-6 max-w-2xl mx-auto"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="text-xl font-semibold mb-3">💡 Your Startup Idea</h2>
      <div className="text-gray-800 whitespace-pre-line">{text}</div>
    </motion.div>
  );
}
