"use client";

import React from "react";
import { motion } from "framer-motion";
import FormField from "./formFiels";
import "@styles/porposal.css";

const FormPage = ({ formData, handleChange, handleSubmit }) => {
  return (
    <motion.div
      className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl px-5 py-8 shadow-xl border border-white border-opacity-20"
      // whileHover={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.5)" }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-[28px] md:text-3xl gradient-text font-bold  mb-6 text-center"
      >
        Create Your Proposal
      </motion.h1>

      <div className="space-y-6">
        <FormField
          label="Your Question"
          name="question"
          placeholder="Will you marry me?"
          value={formData.question}
          onChange={handleChange}
        />

        <FormField
          label="Accept Button Text"
          name="acceptButtonText"
          placeholder="Yes"
          value={formData.acceptButtonText}
          onChange={handleChange}
        />

        <FormField
          label="Reject Button Text"
          name="rejectButtonText"
          placeholder="No -- (This Button will move!)"
          value={formData.rejectButtonText}
          onChange={handleChange}
        />

        <FormField
          label="Result Message"
          name="resultText"
          placeholder="Thank you for accepting! I love you!"
          value={formData.resultText}
          onChange={handleChange}
          textarea={true}
        />

        <motion.button
          onClick={handleSubmit}
          className="w-full py-3 px-4 bg-gradient-to-r from-green-900 to-blue-900 text-white font-semibold rounded-lg shadow-md "
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={
            !formData.question ||
            !formData.acceptButtonText ||
            !formData.rejectButtonText ||
            !formData.resultText
          }
        >
          <span className="gradient-text-btn">Create Proposal</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default FormPage;
