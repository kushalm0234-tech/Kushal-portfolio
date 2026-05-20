import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);
  const [consoleLines, setConsoleLines] = useState<string[]>([]);
  const [isDone, setIsDone] = useState(false);

  const lines = [
    "&gt; INITIALIZING SECURE LINK TO KUSHAL_M...",
    "&gt; CONNECTION ESTABLISHED // PROTOCOL SECURE_TLS_V1.3",
    "&gt; MOUNTING MODULES: [APP_DEV] [WEB_DEV] [DATA_SCIENCE]...",
    "&gt; RETRIEVING EDUCATION RECORD: NATIONAL COLLEGE (MCA)...",
    "&gt; DETECTING PROFESSIONAL CERTIFICATIONS...",
    "&gt; LOADING CORE ASSETS &amp; GRAPHIC CONTEXTS...",
    "&gt; SYSTEM STATE: READY",
    "&gt; BOOTING PORTFOLIO_V1.0.0..."
  ];

  useEffect(() => {
    // Increment loading bar
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setIsDone(true);
          return 100;
        }
        const diff = Math.floor(Math.random() * 12) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 120);

    return () => clearInterval(progressTimer);
  }, []);

  useEffect(() => {
    // Add terminal text lines sequentially based on progress
    const linesToAdd = Math.min(
      Math.floor((progress / 100) * lines.length) + 1,
      lines.length
    );

    if (consoleLines.length < linesToAdd) {
      setConsoleLines(lines.slice(0, linesToAdd));
    }
  }, [progress, consoleLines.length]);

  useEffect(() => {
    if (isDone) {
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(exitTimer);
    }
  }, [isDone, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-bg-primary z-[99999] flex flex-col justify-between p-6 sm:p-12 font-mono select-none"
        initial={{ opacity: 1 }}
        exit={{ 
          opacity: 0, 
          scale: 1.05,
          filter: "blur(10px)",
          transition: { duration: 0.6, ease: "easeInOut" }
        }}
      >
        {/* Top bar */}
        <div className="flex justify-between items-center border-b border-neutral-900 pb-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-neon-red animate-ping" />
            <span>SECURE SYSTEM MODULE</span>
          </div>
          <div>EST_TIME: 2026.05.20</div>
        </div>

        {/* Center terminal lines */}
        <div className="flex-1 my-8 overflow-y-auto max-w-3xl w-full mx-auto flex flex-col justify-start gap-3 pt-6 text-sm md:text-base">
          {consoleLines.map((line, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className={
                idx === lines.length - 1
                  ? "text-neon-red glow-text-red font-bold"
                  : "text-neutral-300"
              }
              dangerouslySetInnerHTML={{ __html: line }}
            />
          ))}
          {progress < 100 && (
            <span className="w-2.5 h-5 bg-neutral-400 inline-block animate-pulse ml-1" />
          )}
        </div>

        {/* Bottom loading progress */}
        <div className="max-w-3xl w-full mx-auto border-t border-neutral-900 pt-6">
          <div className="flex justify-between items-center text-xs text-neutral-400 mb-2">
            <span className="tracking-wider">DECRYPTING PROFILE STORAGE</span>
            <span className="text-neon-red font-bold font-tech text-sm">{progress}%</span>
          </div>
          
          {/* Progress bar container */}
          <div className="w-full h-1.5 bg-neutral-950 rounded-full overflow-hidden border border-neutral-900">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-dark-red to-neon-red shadow-[0_0_10px_#FF1E1E]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeInOut", duration: 0.1 }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
