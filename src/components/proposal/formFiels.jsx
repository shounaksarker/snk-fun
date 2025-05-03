"use client";

import React from "react";
import { motion } from "framer-motion";
import "@styles/porposal.css";

const FormField = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  textarea = false,
}) => {
  return (
    <div className="relative">
      <motion.h1
        className="gradient-text block font-bold mb-1"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {label}
      </motion.h1>
      <motion.div
        className="relative"
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {textarea ? (
          <div className="animated-border p-1 rounded">
            <textarea
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="block rounded bg-white p-2 font-medium w-full placeholder:text-sm"
              rows={3}
            />
          </div>
        ) : (
          <div className="animated-border p-1 rounded-full">
            <input
              type="text"
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className="block rounded-full bg-white p-2 font-medium w-full placeholder:text-sm text-blue-950"
            />
          </div>
        )}
        <motion.span
          className="absolute inset-0 rounded-lg pointer-events-none"
          animate={{
            boxShadow: [
              "0 0 0px rgba(255,255,255,0)",
              "0 0 10px rgba(255,255,255,0.5)",
              "0 0 0px rgba(255,255,255,0)",
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default FormField;
