import { motion } from "framer-motion";
import { GraduationCap, Award, Laptop, Brain, ShieldAlert } from "lucide-react";

export default function About() {
  // Stats data
  const stats = [
    { label: "Technologies Learned", value: "12+", icon: <Laptop className="w-5 h-5 text-neon-red" /> },
    { label: "Certifications Done", value: "2", icon: <Award className="w-5 h-5 text-neon-red" /> },
    { label: "Projects Architected", value: "10+", icon: <GraduationCap className="w-5 h-5 text-neon-red" /> },
    { label: "Problem Solving Skills", value: "A+", icon: <Brain className="w-5 h-5 text-neon-red" /> },
  ];

  // Timeline events
  const educationTimeline = [
    {
      year: "2024 - Present",
      title: "Master of Computer Applications (MCA)",
      institution: "National College",
      description:
        "Specializing in Software Architectures, Advanced App Development, Web Technologies, and Data Science models. Gaining in-depth mastery in building end-to-end scalable enterprise apps.",
    },
    {
      year: "2021 - 2024",
      title: "Bachelor of Computer Applications (BCA)",
      institution: "National College",
      description:
        "Acquired deep foundations in object-oriented programming (Java, C++), database administration (SQL, Database design), structures, and data science theory.",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 w-full bg-bg-secondary overflow-hidden">
      {/* Background Cyber Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-neon-red/5 rounded-full filter blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-neon-red/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-tech text-xs tracking-widest text-neon-red uppercase font-extrabold select-none">[01]</span>
            <span className="w-8 h-[1px] bg-neon-red/50" />
          </div>
          <h2 className="font-cyber font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase select-none">
            ABOUT <span className="text-neon-red glow-text-red">ME</span>
          </h2>
        </div>

        {/* Narrative & Timeline Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Narrative Story & Stats Grid */}
          <div className="lg:col-span-6 flex flex-col gap-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-left flex flex-col gap-6"
            >
              <h3 className="font-cyber text-white text-xl font-bold tracking-wide flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-neon-red" />
                SYSTEM_PROFILE: KUSHAL_M
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed font-sans">
                I am a final-year **MCA student at National College** driven by an intense passion for modern software development, distributed systems, and predictive technologies. My primary focus lies at the intersection of robust App Development, immersive Web Development, and complex Data Science operations.
              </p>
              <p className="text-neutral-400 text-base leading-relaxed font-sans">
                With a rigorous problem-solving mindset and solid command over database architecture and analytics platforms, I specialize in engineering high-fidelity digital solutions that address actual user pain-points. I am highly motivated, responsive to feedback, and eagerly seeking professional opportunities in **software engineering** and **AI-related domains**.
              </p>
            </motion.div>

            {/* Stats Cards Dashboard Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism p-5 rounded relative overflow-hidden text-left flex flex-col gap-3 group border border-neutral-900 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] select-none hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Subtle red bottom indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neutral-900 group-hover:bg-neon-red transition-colors duration-300" />
                  
                  <div className="flex justify-between items-center">
                    {stat.icon}
                    <span className="font-tech font-black text-2xl text-white group-hover:text-neon-red group-hover:glow-text-red transition-all duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <span className="font-tech text-xs tracking-wider uppercase text-neutral-400">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic & Professional Timeline */}
          <div className="lg:col-span-6 flex flex-col text-left">
            <h3 className="font-cyber text-white text-xl font-bold tracking-wide mb-8 flex items-center gap-2 select-none">
              <GraduationCap className="w-5 h-5 text-neon-red" />
              ACADEMIC_CHRONOLOGY
            </h3>

            {/* Timeline Line */}
            <div className="relative border-l border-neutral-800 pl-6 ml-3 flex flex-col gap-10">
              {educationTimeline.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative group select-none"
                >
                  {/* Glowing Node Point */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-neutral-800 group-hover:border-neon-red group-hover:shadow-[0_0_10px_#FF1E1E] transition-all duration-300 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-neon-red transition-all duration-300" />
                  </span>

                  {/* Card Container */}
                  <div className="glassmorphism p-6 rounded hover:border-neon-red/30 transition-all duration-300 border border-neutral-900/60 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)]">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                      <span className="font-tech font-bold text-xs tracking-widest text-neon-red px-2 py-0.5 bg-neon-red/10 border border-neon-red/20 rounded uppercase">
                        {item.year}
                      </span>
                      <span className="font-mono text-xs text-neutral-500 uppercase">
                        {item.institution}
                      </span>
                    </div>
                    <h4 className="font-cyber font-bold text-base sm:text-lg text-white mb-2 group-hover:text-neon-red transition-colors duration-300 uppercase">
                      {item.title}
                    </h4>
                    <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
