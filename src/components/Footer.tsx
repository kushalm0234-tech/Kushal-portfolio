import { useEffect, useState } from "react";
import { ChevronUp, Mail, Cpu } from "lucide-react";

// Robust Inline SVG for GitHub
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-bg-secondary border-t border-neutral-900 py-12 select-none">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section: Copyright */}
        <div className="text-center md:text-left flex flex-col gap-1">
          <div className="font-cyber font-bold text-sm tracking-wider text-white">
            KUSHAL M <span className="text-neon-red font-black">PORTFOLIO</span>
          </div>
          <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-wider">
            © 2026 KUSHAL_M. ALL RIGHTS SECURED.
          </span>
        </div>

        {/* Middle Section: Tech Badges */}
        <div className="flex items-center gap-2 text-neutral-400 font-tech text-xs tracking-widest uppercase">
          <Cpu className="w-4 h-4 text-neon-red animate-pulse" />
          <span>React</span>
          <span className="text-neutral-800">•</span>
          <span>Tailwind</span>
          <span className="text-neutral-800">•</span>
          <span>Framer Motion</span>
          <span className="text-neutral-800">•</span>
          <span>TS</span>
        </div>

        {/* Right Section: Social shortcuts */}
        <div className="flex gap-4">
          <a
            href="https://github.com/kushalm0234-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-900/40 border border-neutral-800 rounded hover:border-neon-red/30 hover:text-neon-red transition-all duration-300 cursor-none text-neutral-400"
            aria-label="GitHub Link"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href="mailto:kushalm0234@gmail.com"
            className="p-2 bg-neutral-900/40 border border-neutral-800 rounded hover:border-neon-red/30 hover:text-neon-red transition-all duration-300 cursor-none text-neutral-400"
            aria-label="Email Link"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Floating Scroll to Top button */}
      {showScrollTop && (
        <button
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 p-3 bg-neutral-950 border border-neon-red/20 text-neon-red rounded-full hover:border-neon-red hover:shadow-[0_0_15px_#FF1E1E] transition-all duration-300 cursor-none shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5 animate-bounce" />
        </button>
      )}
    </footer>
  );
}
