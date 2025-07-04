"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ResponseCard from "./ResponseCard";
import axios from "axios";
import Toast from "@src/components/Toast";
import { surpriseIdeas } from "@src/constants/ai-startup";

const IdeaForm = () => {
  const [userIdea, setUserIdea] = useState("");
  const [language, setLanguage] = useState("Bangla");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userIdea || userIdea.length > 50) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await axios.post("/api/aiStartup", {
        userIdea,
        language,
      });
      if (!res.data.success || res.data.error) {
        setError(res.data.msg || "Failed to generate idea.");
        return;
      }
      setResponse(res.data.idea);
      setSuccess("Startup idea generated successfully!");
    } catch (error) {
      setError("Something went wrong! Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSurpriseMe = () => {
    const random =
      surpriseIdeas[Math.floor(Math.random() * surpriseIdeas.length)];
    setUserIdea(random.idea);
    setResponse("");
    setTimeout(() => {
      setResponse(random.response);
    }, 300);
    setSuccess("Idea loaded!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-100 to-white px-4 mb-2">
      <motion.div
        className="bg-white shadow-2xl rounded-3xl p-8 w-full max-w-xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-extrabold text-center text-gray-900 flex items-center justify-center gap-2">
          Startup Idea Generator <span className="text-3xl">🚀</span>
        </h1>
        <p className="text-center text-gray-600 mt-2">
          Turn any idea into a funny startup pitch
        </p>

        <div className="flex items-center gap-3 mt-6">
          <input
            type="text"
            value={userIdea}
            onChange={(e) => setUserIdea(e.target.value)}
            placeholder="ex: I want to build a Cow Farm..."
            maxLength={50}
            className="flex-1 p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <button
            onClick={handleSurpriseMe}
            className="text-pink-800 font-semibold underline text-xs hover:brightness-110 transition cursor-pointer"
          >
            🎲 Surprise
          </button>
        </div>

        <div className="mt-5 text-center">
          <p className="text-sm text-gray-700 mb-2">
            Choose Response Language:
          </p>
          <div className="flex justify-center gap-6">
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="lang"
                value="bn"
                checked={language === "Bangla"}
                onChange={() => setLanguage("Bangla")}
              />
              বাংলা
            </label>
            <label className="flex items-center gap-1 cursor-pointer">
              <input
                type="radio"
                name="lang"
                value="en"
                checked={language === "English"}
                onChange={() => setLanguage("English")}
              />
              English
            </label>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-2xl shadow-lg transition text-lg cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? "Generating..." : "Generate Idea"}
        </button>

        <AnimatePresence>
          {response && (
            <motion.div
              key="response"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ResponseCard text={response} />
            </motion.div>
          )}
        </AnimatePresence>

        {error && (
          <Toast type="error" message={error} onClose={() => setError("")} />
        )}
        {success && (
          <Toast
            type="success"
            message={success}
            onClose={() => setSuccess("")}
          />
        )}
      </motion.div>
    </div>
  );
};

export default IdeaForm;
