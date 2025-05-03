'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FormPage from '@src/components/proposal/formPage';
import ProposalPage from '@src/components/proposal/proposalPage';
import ResultPage from '@src/components/proposal/resultPage';

// Main App Component
export default function ProposalApp() {
  const [step, setStep] = useState('form');
  const [formData, setFormData] = useState({
    question: '',
    rejectButtonText: '',
    acceptButtonText: '',
    resultText: ''
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep('proposal');
  };

  // Input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Accept proposal handler
  const handleAccept = () => {
    setStep('result');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#E17564] via-[#872341] to-[#09122C] p-4 overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'form' && (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <FormPage
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </motion.div>
        )}

        {step === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-xl"
          >
            <ProposalPage
              question={formData.question}
              rejectButtonText={formData.rejectButtonText}
              acceptButtonText={formData.acceptButtonText}
              onAccept={handleAccept}
            />
          </motion.div>
        )}

        {step === 'result' && (
          <motion.div
            key="result"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md"
          >
            <ResultPage resultText={formData.resultText} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}