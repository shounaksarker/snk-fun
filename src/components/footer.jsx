import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-4 md:py-8 bg-indigo-950 text-white text-center relative bottom-0 overflow-hidden">
      <div className="relative z-10">
        <p className="text-xl font-semibold">Made with ☕ 🧠 👨‍💻</p>
        <p className="mt-2 text-sm text-indigo-300">
          © {new Date().getFullYear()} SnkFun — Don&apos;t just code, make it
          fun!
        </p>
        <div className="mt-4 flex justify-center gap-4 text-lg">
          <a
            href="https://github.com"
            className="hover:text-red-400 transition-all"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-green-400 transition-all"
          >
            Twitter
          </a>
          <a
            href="mailto:you@example.com"
            className="hover:text-yellow-400 transition-all"
          >
            Email
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-yellow-400 to-green-400 animate-pulse"></div>
    </footer>
  );
};

export default Footer;
