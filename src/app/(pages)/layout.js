"use client";

import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <main className="">
      <motion.button
        onClick={() => router.push("/")}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="absolute top-2 left-2 flex items-center justify-center gap-2 bg-white border border-indigo-500 text-indigo-600 font-medium px-2 py-1 rounded-full shadow hover:bg-indigo-50 transition text-xs cursor-pointer"
      >
        <span className="text-lg">🏠</span>
        <span className="text-sm">Back to Home</span>
      </motion.button>
      {children}
    </main>
  );
};

export default Layout;
