import { motion } from "framer-motion";
import { Code2, Database, BarChart3, AppWindow, Cpu } from "lucide-react";

interface SkillItem {
  name: string;
  level: number; // percentage
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: SkillItem[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-neon-red" />,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "SQL", level: 92 },
        { name: "C", level: 80 },
        { name: "JavaScript", level: 82 },
      ],
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-5 h-5 text-neon-red" />,
      skills: [
        { name: "MySQL", level: 88 },
        { name: "PostgreSQL", level: 84 },
        { name: "SQL Server", level: 85 },
      ],
    },
    {
      title: "Analytics & BI Tools",
      icon: <BarChart3 className="w-5 h-5 text-neon-red" />,
      skills: [
        { name: "Power BI", level: 86 },
        { name: "Data Science (NumPy/Pandas)", level: 80 },
        { name: "Predictive Analytics", level: 75 },
      ],
    },
    {
      title: "Development & Frameworks",
      icon: <AppWindow className="w-5 h-5 text-neon-red" />,
      skills: [
        { name: "App Development", level: 82 },
        { name: "Web Development", level: 88 },
        { name: "React.js / TS", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ],
    },
  ];

  // Core specializations for circular indicators
  const specializations = [
    { name: "App Dev", score: 85, desc: "Mobile & Core architectures" },
    { name: "Web Dev", score: 90, desc: "Modern dynamic SPAs" },
    { name: "Data Science", score: 80, desc: "Models & Data dashboards" },
  ];

  return (
    <section id="skills" className="relative py-24 sm:py-32 w-full bg-bg-primary overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-neon-red/3 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-tech text-xs tracking-widest text-neon-red uppercase font-extrabold select-none">[02]</span>
            <span className="w-8 h-[1px] bg-neon-red/50" />
          </div>
          <h2 className="font-cyber font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase select-none">
            CORE <span className="text-neon-red glow-text-red">SKILLS</span>
          </h2>
        </div>

        {/* Part 1: Circular Core Specializations */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8 select-none">
            <Cpu className="w-4 h-4 text-neon-red" />
            <h3 className="font-cyber text-sm tracking-widest text-white uppercase font-bold">
              SYSTEM_ENGINES: DOMAIN_WEIGHTS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specializations.map((spec, idx) => {
              // Standard SVG circumference calculation
              const radius = 50;
              const circumference = 2 * Math.PI * radius;
              const offset = circumference - (spec.score / 100) * circumference;

              return (
                <motion.div
                  key={spec.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glassmorphism p-6 rounded flex items-center gap-6 border border-neutral-900 shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] select-none group"
                >
                  {/* SVG Circle Indicator */}
                  <div className="relative w-24 h-24 flex items-center justify-center shrink-0">
                    <svg className="w-full h-full transform -rotate-95">
                      {/* Grey Track */}
                      <circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-neutral-900"
                        strokeWidth="6"
                        fill="transparent"
                      />
                      {/* Red Dash fill */}
                      <motion.circle
                        cx="48"
                        cy="48"
                        r={radius}
                        className="stroke-neon-red"
                        strokeWidth="6"
                        fill="transparent"
                        strokeDasharray={circumference}
                        initial={{ strokeDashoffset: circumference }}
                        whileInView={{ strokeDashoffset: offset }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                      />
                    </svg>
                    {/* Inner score label */}
                    <div className="absolute font-tech font-black text-lg text-white">
                      {spec.score}%
                    </div>
                  </div>

                  {/* Text details */}
                  <div className="text-left flex flex-col gap-1">
                    <h4 className="font-cyber font-bold text-base text-white group-hover:text-neon-red transition-colors duration-300 uppercase">
                      {spec.name}
                    </h4>
                    <p className="text-neutral-400 text-xs leading-relaxed font-sans">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Categorized Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.15 }}
              className="glassmorphism p-6 sm:p-8 rounded border border-neutral-900 text-left shadow-[0_0_15px_-3px_rgba(0,0,0,0.5)] select-none group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 border-b border-neutral-900 pb-4 mb-6">
                {cat.icon}
                <h3 className="font-cyber font-bold text-base text-white tracking-wide uppercase">
                  {cat.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="flex flex-col gap-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-1.5 w-full">
                    {/* Skill Info */}
                    <div className="flex justify-between items-center text-sm font-tech font-bold uppercase tracking-wider">
                      <span className="text-neutral-300 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                      <span className="text-neon-red">{skill.level}%</span>
                    </div>

                    {/* Progress Bar Container */}
                    <div className="w-full h-1.5 bg-neutral-950 rounded-full overflow-hidden border border-neutral-900">
                      <motion.div
                        className="h-full bg-gradient-to-r from-neon-dark-red to-neon-red"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
