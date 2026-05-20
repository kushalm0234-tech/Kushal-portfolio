import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Dynamic height & transparency on scroll
      setScrolled(window.scrollY > 20);

      // Compute scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }

      // Track active section on scroll
      const sections = navItems.map((item) => document.querySelector(item.href));
      const scrollPos = window.scrollY + 200;

      sections.forEach((sec) => {
        if (!sec) return;
        const top = (sec as HTMLElement).offsetTop;
        const height = (sec as HTMLElement).offsetHeight;
        const id = sec.getAttribute("id") || "";

        if (scrollPos >= top && scrollPos < top + height) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle smooth scroll on click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      // Manual set active
      setActiveSection(href.substring(1));
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-bg-secondary/80 backdrop-blur-md py-4 border-b border-neon-red/20 shadow-[0_4px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent py-6 border-b border-transparent"
        }`}
      >
        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-neutral-950">
          <div
            className="h-full bg-gradient-to-r from-neon-dark-red to-neon-red shadow-[0_0_8px_#FF1E1E]"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="font-cyber font-bold text-xl tracking-wider text-white flex items-center gap-1.5 group select-none"
          >
            <span className="bg-neon-red text-bg-primary px-1.5 py-0.5 rounded text-sm font-black group-hover:shadow-[0_0_10px_#FF1E1E] transition-shadow duration-300">
              K
            </span>
            <span className="text-white group-hover:text-neon-red transition-colors duration-300">
              USHAL<span className="text-neon-red group-hover:text-white">.tech</span>
            </span>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8 font-tech font-semibold tracking-wider text-base">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-2 py-1 text-sm uppercase transition-colors duration-300 hover:text-neon-red ${
                  activeSection === item.href.substring(1)
                    ? "text-neon-red"
                    : "text-neutral-400"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <motion.span
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-red shadow-[0_0_8px_#FF1E1E]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Action Call to Action */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-4 py-2 border border-neon-red text-white bg-transparent rounded hover:bg-neon-red hover:text-black hover:shadow-[0_0_15px_rgba(255,30,30,0.5)] transition-all duration-300 select-none group"
            >
              Hire Me
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-neutral-300 hover:text-neon-red p-1 cursor-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/95 z-40 md:hidden flex flex-col justify-center items-center"
          >
            {/* Background Grid Accent */}
            <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none" />

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="flex flex-col items-center gap-6 font-cyber"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  className={`text-2xl tracking-widest uppercase hover:text-neon-red transition-all duration-300 ${
                    activeSection === item.href.substring(1)
                      ? "text-neon-red font-extrabold glow-text-red"
                      : "text-neutral-400"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.08 }}
                className="mt-6"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-flex items-center gap-2 font-tech font-bold text-lg tracking-wider uppercase px-6 py-3 border border-neon-red text-white bg-transparent rounded hover:bg-neon-red hover:text-black transition-all duration-300"
                >
                  Hire Me
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
