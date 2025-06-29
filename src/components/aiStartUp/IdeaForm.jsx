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
    <motion.div
      className="max-w-3xl mx-auto mt-16 px-4 text-center py-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Startup Idea Generator 🚀
      </motion.h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left font-semibold mb-2">
            Type your startup idea/goal:{" "}
            <small className="font-thin text-gray-600">
              (max 50 characters)
            </small>
          </label>
          <div className="flex flex-col md:flex-row gap-3 my-4">
            <input
              type="text"
              maxLength="50"
              placeholder="ex: I want to build a Cow Farm..."
              className="flex-2 w-full border px-4 py-2 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm md:text-base placeholder:text-sm"
              value={userIdea}
              onChange={(e) => setUserIdea(e.target.value)}
            />
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="w-full md:max-w-[85px] text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 transition-all duration-300 font-semibold p-2 rounded-md shadow-md text-xs"
            >
              🎲 Surprise
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-6 text-sm">
          <h3 className="font-medium">Choose Response Language?: </h3>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="lang"
              value="Bangla"
              checked={language === "Bangla"}
              onChange={() => setLanguage("Bangla")}
            />
            <span>বাংলা</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="lang"
              value="English"
              checked={language === "English"}
              onChange={() => setLanguage("English")}
            />
            <span>English</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md transition shadow-lg disabled:opacity-50"
        >
          {loading ? "Generating..." : "Generate Idea"}
        </button>
      </form>

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
  );
};

export default IdeaForm;
