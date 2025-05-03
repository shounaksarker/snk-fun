"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const ProposalPage = ({
  question,
  rejectButtonText,
  acceptButtonText,
  onAccept,
}) => {
  const [rejectButtonPosition, setRejectButtonPosition] = useState({
    x: 0,
    y: 0,
  });

  const moveButton = () => {
    // Generate random positions within viewport bounds
    const m1 = Math.random();
    const m2 = Math.random();
    const x = m1 * 250 - 50; // 200-100
    const y = m2 * 250 - 50; // 200-100
    setRejectButtonPosition({ x, y });
  };

  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-8 shadow-xl border border-white border-opacity-20 flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2,
        }}
        className="mb-10 relative"
      >
        <motion.div
          className="absolute -inset-4"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 20px rgba(255,255,255,0.7)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <h1 className="text-3xl md:text-4xl font-bold gradient-text-white-bg text-center capitalize">
          {question}
        </h1>
      </motion.div>

      <div className="flex justify-center items-center gap-8 w-full">
        <motion.button
          className="cursor-pointer py-4 px-8 bg-green-500 text-white font-bold rounded-lg shadow-lg capitalize"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={onAccept}
        >
          {acceptButtonText}
        </motion.button>

        <motion.button
          className="cursor-pointer py-4 px-8 bg-red-500 text-white font-bold rounded-lg shadow-lg relative capitalize"
          animate={{
            x: rejectButtonPosition.x,
            y: rejectButtonPosition.y,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
          }}
          onClick={moveButton}
          onHoverStart={moveButton}
          whileHover={{ rotate: Math.random() * 20 - 10 }}
        >
          {rejectButtonText}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProposalPage;
