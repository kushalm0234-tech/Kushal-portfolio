import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Dynamic bootup loader sequence */}
      <AnimatePresence mode="wait">
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative min-h-screen bg-bg-primary text-text-primary selection:bg-neon-red selection:text-black"
        >
          {/* Cyberpunk Scanline overlay */}
          <div className="scanlines" />

          {/* Interactive cursor pointer glow */}
          <CustomCursor />

          {/* Ambient Cyber Grid Backdrops */}
          <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none z-0" />
          <div className="absolute inset-0 cyber-radial-glow pointer-events-none z-0" />

          {/* Core Page Sections */}
          <Navbar />
          <main className="relative z-10 flex flex-col w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certificates />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  );
}
