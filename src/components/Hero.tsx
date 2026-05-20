import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowRight } from "lucide-react";

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

// Robust Inline SVG for LinkedIn
const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  // Custom typing animation states
  const words = [
    "Final Year MCA Student",
    "App Developer",
    "Web Developer",
    "Data Science Enthusiast",
  ];
  const [wordIdx, setWordIdx] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    // Typing effect ticker
    let timer: any;
    const currentWord = words[wordIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && subText === currentWord) {
      // Pause before deleting
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && subText === "") {
      setIsDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setSubText(
          isDeleting
            ? currentWord.substring(0, subText.length - 1)
            : currentWord.substring(0, subText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, wordIdx]);

  useEffect(() => {
    // Interactive Canvas Particles setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor(width / 15), 75);
    const mouse = { x: -1000, y: -1000, radius: 150 };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      baseX: number;
      baseY: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
      }

      update() {
        // Drifting animation
        this.x += this.speedX;
        this.y += this.speedY;

        // Bounce off borders
        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        // Mouse interaction (Repulsion)
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * 1.5;
          const directionY = (dy / distance) * force * 1.5;
          this.x -= directionX;
          this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = "rgba(255, 30, 30, 0.4)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Populate particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint cybernetic background grid
      ctx.strokeStyle = "rgba(255, 30, 30, 0.02)";
      ctx.lineWidth = 1;
      const gridSize = 50;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw and connect particles
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Draw connections
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(255, 30, 30, ${0.15 - distance / 800})`;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-center bg-bg-primary overflow-hidden pt-20"
    >
      {/* Dynamic Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Cyber Grid Pattern Accent (CSS) */}
      <div className="absolute inset-0 cyber-radial-glow pointer-events-none z-0" />

      {/* Core Landing content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Bio Text Column */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          {/* Greeting Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-3 py-1 bg-neon-red/10 border border-neon-red/30 rounded text-xs font-mono text-neon-red tracking-widest uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neon-red animate-pulse" />
            SECURE LINK ONLINE // PORTFOLIO ACTIVATED
          </motion.div>

          {/* Name Header */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-cyber font-black text-4xl sm:text-6xl md:text-7xl text-white tracking-tight uppercase mb-2 select-none"
          >
            Hi, I'm{" "}
            <span className="text-neon-red glow-text-red glitch-hover relative inline-block cursor-none">
              Kushal M
            </span>
          </motion.h1>

          {/* Typing Subtitle */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-tech font-bold text-lg sm:text-2xl md:text-3xl text-neutral-200 tracking-wider uppercase h-10 mb-6 flex items-center"
          >
            <span className="text-neutral-300 mr-2">{">"}</span>
            <span className="text-white bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              {subText}
            </span>
            <span className="w-2.5 h-5 bg-neon-red ml-1.5 inline-block animate-pulse" />
          </motion.h2>

          {/* Intro Description */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-neutral-400 font-sans text-base sm:text-lg max-w-xl leading-relaxed mb-10"
          >
            A futuristic software engineer focused on architecting scalable application frameworks,
            highly interactive modern web experiences, and predictive data science pipelines. Pursuing
            my final year MCA at National College, and actively looking for software engineering and
            AI domain opportunities.
          </motion.p>

          {/* Buttons Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 w-full"
          >
            <button
              onClick={() => handleScrollTo("#projects")}
              className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-6 py-3.5 bg-neon-red text-black rounded hover:bg-transparent hover:text-white border border-neon-red hover:shadow-[0_0_20px_rgba(255,30,30,0.4)] transition-all duration-300 cursor-none select-none group"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button
              onClick={() => handleScrollTo("#contact")}
              className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-6 py-3.5 bg-transparent text-white border border-neutral-800 rounded hover:border-neon-red hover:shadow-[0_0_15px_rgba(255,30,30,0.2)] transition-all duration-300 cursor-none select-none"
            >
              Contact Me
            </button>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                alert("Simulating CV download: Kushal_M_CV.pdf loaded successfully!");
              }}
              className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-6 py-3.5 bg-neutral-900/60 backdrop-blur border border-neutral-800 text-neutral-300 rounded hover:text-white hover:border-neon-red/50 hover:bg-neutral-900 transition-all duration-300 cursor-none select-none"
            >
              <FileText className="w-4 h-4 text-neon-red" />
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* HUD Visual Deck Column */}
        <div className="lg:col-span-4 hidden lg:flex justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-72 h-72 rounded-full border border-neon-red/10 flex items-center justify-center relative shadow-[0_0_50px_rgba(255,30,30,0.05)]"
          >
            {/* Spinning Neon Accents */}
            <div className="absolute inset-0 rounded-full border-t border-b border-neon-red/40 animate-spin" style={{ animationDuration: "12s" }} />
            <div className="absolute inset-4 rounded-full border-l border-r border-neon-red/20 animate-spin" style={{ animationDuration: "8s", animationDirection: "reverse" }} />
            
            {/* Decorative Tech Grid inside circle */}
            <div className="w-48 h-48 rounded-full border border-neon-red/30 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center select-none shadow-[inset_0_0_30px_rgba(255,30,30,0.2)]">
              <div className="font-cyber text-neon-red text-xs tracking-widest font-black mb-1 glow-text-red uppercase">MCA_CORE</div>
              <div className="font-tech text-3xl font-black tracking-tight text-white uppercase">V_1.0.0</div>
              <div className="font-mono text-[9px] text-neutral-500 mt-2 uppercase tracking-tight leading-3">
                SECURE_SYS_CORE<br />
                ENCRYPTION_AES256<br />
                REGION_IN_SOUTH
              </div>
            </div>
            
            {/* Drifting nodes */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-red/10 border border-neon-red rounded flex items-center justify-center text-[9px] text-neon-red font-bold font-mono">JS</div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 w-4 h-4 bg-neon-red/10 border border-neon-red rounded flex items-center justify-center text-[9px] text-neon-red font-bold font-mono">PY</div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-4 h-4 bg-neon-red/10 border border-neon-red rounded flex items-center justify-center text-[9px] text-neon-red font-bold font-mono">DB</div>
          </motion.div>
        </div>
      </div>

      {/* Social Sidebar networks floating */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-10 hidden sm:flex items-center gap-6">
        <div className="flex gap-4">
          <a
            href="https://github.com/kushalm0234-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-neon-red hover:-translate-y-1 transition-all duration-300 cursor-none"
            aria-label="GitHub profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href="#contact"
            className="text-neutral-500 hover:text-neon-red hover:-translate-y-1 transition-all duration-300 cursor-none"
            aria-label="LinkedIn profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:kushalm0234@gmail.com"
            className="text-neutral-500 hover:text-neon-red hover:-translate-y-1 transition-all duration-300 cursor-none"
            aria-label="Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <div className="w-12 h-[1px] bg-neutral-800" />
        <span className="font-tech text-xs tracking-widest text-neutral-500 uppercase select-none">
          scroll dynamically
        </span>
      </div>
    </section>
  );
}
