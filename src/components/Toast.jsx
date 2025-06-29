'use client';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Toast({ type = 'error', message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    error: {
      bg: 'bg-red-600',
      emoji: '⚠️',
    },
    success: {
      bg: 'bg-green-600',
      emoji: '🎉',
    },
  };

  const { bg, emoji } = styles[type];

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.3 }}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 ${bg} text-white px-6 py-3 rounded-md shadow-lg max-w-[80vw] w-fit`}
        >
          <div className="flex items-center justify-between space-x-4">
            <p className="truncate max-w-[75vw]">
              <span className="mr-2">{emoji}</span>
              {message}
            </p>
            <button onClick={onClose} className="font-bold text-white">×</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
