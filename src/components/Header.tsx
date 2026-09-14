"use client";

import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="fixed top-0 z-50">
      <div className="py-2 xl:py-3 px-4 xl:px-5">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center bg-primary/80 backdrop-blur-2xl border border-white/[0.08] px-5 py-2.5 xl:px-7 xl:py-3 rounded-2xl shadow-card"
        >
          <a href="#home" className="cursor-pointer group">
            <h1 className="font-display text-xl xl:text-2xl font-bold tracking-tight">
              Uzair
              <span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,229,160,0.8)] transition-all">
                .
              </span>
            </h1>
          </a>

          <div className="hidden xl:flex items-center gap-2">
            <Navbar />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
