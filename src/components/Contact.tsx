import React, { useState } from "react";
import { motion as motionFM, AnimatePresence as AnimatePresenceFM } from "framer-motion";
import { Mail, Phone, Send, ShieldAlert, Sparkles } from "lucide-react";

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate terminal transmission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Auto dismiss after 5s
      setTimeout(() => setSuccess(false), 5000);
    }, 1800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactChannels = [
    {
      label: "Direct Email",
      value: "kushalm0234@gmail.com",
      icon: <Mail className="w-5 h-5 text-neon-red" />,
      href: "mailto:kushalm0234@gmail.com",
    },
    {
      label: "Secure Line",
      value: "+91 9108864734",
      icon: <Phone className="w-5 h-5 text-neon-red" />,
      href: "tel:+919108864734",
    },
    {
      label: "GitHub Source",
      value: "kushalm0234-tech",
      icon: <GithubIcon className="w-5 h-5 text-neon-red" />,
      href: "https://github.com/kushalm0234-tech",
    },
  ];

  return (
    <section id="contact" className="relative py-24 sm:py-32 w-full bg-bg-primary overflow-hidden">
      {/* Background cyber glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-neon-red/3 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-60 h-60 bg-neon-red/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-tech text-xs tracking-widest text-neon-red uppercase font-extrabold select-none">[05]</span>
            <span className="w-8 h-[1px] bg-neon-red/50" />
          </div>
          <h2 className="font-cyber font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase select-none">
            CONTACT <span className="text-neon-red glow-text-red">ME</span>
          </h2>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-stretch">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <motionFM.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left flex flex-col gap-5 h-full justify-center"
            >
              <h3 className="font-cyber text-white text-xl font-bold tracking-wide flex items-center gap-2 select-none">
                <ShieldAlert className="w-5 h-5 text-neon-red" />
                TRANSMISSION_CHANNELS
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed font-sans mb-4">
                Have an internship, placement slot, project initiative, or just want to query about my tech stack? Feel free to deploy a secure message using the terminal prompt, or establish a link directly through my social channels. I usually respond within 12 hours.
              </p>

              {/* Channels list */}
              <div className="flex flex-col gap-4">
                {contactChannels.map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    target={channel.label !== "Secure Line" ? "_blank" : undefined}
                    rel={channel.label !== "Secure Line" ? "noopener noreferrer" : undefined}
                    className="glassmorphism p-4 rounded border border-neutral-900 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] flex items-center gap-4 hover:border-neon-red/30 hover:-translate-x-1 duration-300 transition-all cursor-none group"
                  >
                    <div className="p-2.5 bg-neon-red/10 border border-neon-red/20 rounded group-hover:bg-neon-red/20 group-hover:border-neon-red/40 transition-colors duration-300">
                      {channel.icon}
                    </div>
                    <div className="text-left flex flex-col">
                      <span className="font-tech font-bold text-[9px] tracking-widest text-neutral-500 uppercase">
                        {channel.label}
                      </span>
                      <span className="font-tech text-base font-bold text-white group-hover:text-neon-red transition-colors duration-300">
                        {channel.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </motionFM.div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="lg:col-span-7">
            <motionFM.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glassmorphism p-6 sm:p-8 rounded border border-neutral-900 shadow-[0_0_25px_rgba(0,0,0,0.6)] h-full flex flex-col justify-center relative overflow-hidden"
            >
              {/* Scan overlay */}
              <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

              <h3 className="font-cyber text-white text-base font-bold tracking-widest mb-6 flex items-center gap-2 uppercase select-none z-10">
                <Send className="w-4 h-4 text-neon-red" />
                terminal_secure_mail_box
              </h3>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-left z-10">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="font-tech text-xs tracking-wider uppercase text-neutral-400 font-bold">
                    Sender Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your credential name..."
                    className="w-full bg-black/60 border border-neutral-800 focus:border-neon-red rounded px-4 py-3 text-sm text-white font-sans outline-none focus:ring-1 focus:ring-neon-red/30 transition-all duration-300 placeholder:text-neutral-600 cursor-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="font-tech text-xs tracking-wider uppercase text-neutral-400 font-bold">
                    Link Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="name@organization.com"
                    className="w-full bg-black/60 border border-neutral-800 focus:border-neon-red rounded px-4 py-3 text-sm text-white font-sans outline-none focus:ring-1 focus:ring-neon-red/30 transition-all duration-300 placeholder:text-neutral-600 cursor-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-tech text-xs tracking-wider uppercase text-neutral-400 font-bold">
                    Secure Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type details to transmit..."
                    className="w-full bg-black/60 border border-neutral-800 focus:border-neon-red rounded px-4 py-3 text-sm text-white font-sans outline-none focus:ring-1 focus:ring-neon-red/30 resize-none transition-all duration-300 placeholder:text-neutral-600 cursor-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting || success}
                  className="w-full inline-flex items-center justify-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-6 py-3.5 bg-neon-red text-black rounded hover:bg-transparent hover:text-white border border-neon-red hover:shadow-[0_0_20px_rgba(255,30,30,0.4)] disabled:opacity-5 transition-all duration-300 cursor-none mt-2 select-none"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-1" />
                      TRANSMITTING ENCRYPTED DATA...
                    </>
                  ) : (
                    <>
                      Transmit Message
                      <Send className="w-4 h-4 ml-1" />
                    </>
                  )}
                </button>
              </form>

              {/* Toast Success Message */}
              <AnimatePresenceFM>
                {success && (
                  <motionFM.div
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 15, scale: 0.95 }}
                    className="absolute inset-x-6 bottom-6 p-4 bg-black border border-green-500/50 rounded flex items-center gap-3 z-20 shadow-[0_0_30px_rgba(34,197,94,0.15)] select-none text-left"
                  >
                    <div className="p-2 bg-green-500/10 border border-green-500/20 rounded">
                      <Sparkles className="w-5 h-5 text-green-500 animate-pulse" />
                    </div>
                    <div>
                      <div className="font-tech font-bold text-xs text-green-500 tracking-wider uppercase">
                        TRANSMISSION COMPLETE
                      </div>
                      <p className="font-mono text-[10px] text-neutral-400 mt-0.5 uppercase tracking-tight">
                        MESSAGE ROUTED &amp; SAVED IN KUSHAL_M SECURITY LINK!
                      </p>
                    </div>
                  </motionFM.div>
                )}
              </AnimatePresenceFM>
            </motionFM.div>
          </div>
        </div>
      </div>
    </section>
  );
}
