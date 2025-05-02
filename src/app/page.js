"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { name: "IELTS", path: "/ielts/listening", color: "bg-red-400" },
  { name: "IELTS", path: "/ielts/listening", color: "bg-red-400" },
  { name: "IELTS", path: "/ielts/listening", color: "bg-red-400" },
  // Add more projects here...
];

export default function Home() {
  const [loaded, setLoaded] = useState(true);

  return (
    <main className="min-h-[80vh] bg-gradient-to-tr from-indigo-200 via-purple-200 to-red-200 text-gray-900 flex flex-col items-center px-4">
      <section className="text-center mt-16 mb-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-xl text-indigo-600">
          Welcome to{" "}
          <span className="underline decoration-red-500">SNK FunLand 🎉</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed">
          Where boring projects go{" "}
          <span className="text-red-600 font-bold">fun mode</span> 😎
          <br />
          Click and explore — surprises await!
        </p>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16 w-full max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={loaded ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
          >
            <Link
              href={project.path}
              className={`block rounded-xl p-6 text-white text-center text-xl font-semibold shadow-lg hover:scale-105 transition-transform duration-300 ${project.color}`}
            >
              🚀 {project.name}
            </Link>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
