import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Globe, LineChart, ExternalLink, X, ArrowUpRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string;
  category: "App Dev" | "Web Dev" | "Data Science";
  icon: React.ReactNode;
  shortDesc: string;
  longDesc: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  link: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const projectsData: ProjectItem[] = [
    {
      id: "aerocare",
      title: "AeroCare",
      category: "App Dev",
      icon: <Phone className="w-6 h-6 text-neon-red" />,
      shortDesc: "A premium mobile health-telemetry app tracking respiratory wellness and telemetry metrics.",
      longDesc: "AeroCare is a cross-platform mobile application designed to track and analyze user respiratory metrics, oxygen saturation, and ambient air quality telemetry in real-time.",
      challenge: "Processing high-frequency raw telemetry inputs from wearable sensors and displaying latency-free wellness alerts on mobile devices.",
      solution: "Engineered using React Native and Expo with a fast SQLite local data cache. Integrated asynchronous thread computing to process telemetry arrays and output predictive graphs.",
      features: [
        "Real-time bluetooth sensor integrations",
        "Offline-first sync using lightweight SQLite",
        "Instant air pollution GIS mapping API feeds",
        "Custom glowing medical metrics charts"
      ],
      stack: ["React Native", "Expo", "SQLite", "Bluetooth BLE API", "Tailwind CSS"],
      link: "https://github.com/kushalm0234-tech/aerocare"
    },
    {
      id: "cybertext",
      title: "CyberText",
      category: "Web Dev",
      icon: <Globe className="w-6 h-6 text-neon-red" />,
      shortDesc: "A beautiful, real-time collaborative code & document editor styled with modern glassmorphism.",
      longDesc: "CyberText is a futuristic collaborative workspace that allows multiple developers to write, edit, and compile code blocks simultaneously with absolute synchronization.",
      challenge: "Handling concurrent document write-conflicts and ensuring zero lag in synchronization over dynamic browser sessions.",
      solution: "Utilized React, TypeScript, and Tailwind CSS on the frontend. Architected the backend using Node.js and Socket.io with Operational Transformation (OT) conflict resolution engines.",
      features: [
        "Real-time cursor tracking for multiple users",
        "Instant HTML/CSS compiler sandbox",
        "Sleek customizable cybertech text themes",
        "Secure peer-to-peer room connections"
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Node.js", "Socket.io", "Express"],
      link: "https://github.com/kushalm0234-tech/cybertext"
    },
    {
      id: "neurotrend",
      title: "NeuroTrend",
      category: "Data Science",
      icon: <LineChart className="w-6 h-6 text-neon-red" />,
      shortDesc: "An AI-driven neural forecasting engine and dashboard analyzing high-frequency telemetry trends.",
      longDesc: "NeuroTrend is a data science prediction dashboard that ingests system performance telemetry and forecasts web traffic, market trends, and transaction anomalies using custom neural networks.",
      challenge: "Parsing massive non-linear datasets and translating ML prediction coefficients into recruiter-friendly charts.",
      solution: "Configured prediction pipelines in Python utilizing NumPy, Pandas, and TensorFlow. Served forecasts via a responsive FastAPI layer visualized inside a glassmorphic React dashboard.",
      features: [
        "Deep Learning LSTM forecasting model",
        "Real-time FastAPI live telemetry feeds",
        "Comprehensive visual reports (Power BI style)",
        "Anomaly alerts via automated webhooks"
      ],
      stack: ["Python", "TensorFlow", "Pandas & NumPy", "FastAPI", "Power BI", "React"],
      link: "https://github.com/kushalm0234-tech/neurotrend"
    }
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 w-full bg-bg-secondary overflow-hidden">
      {/* Dynamic light glows */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neon-red/3 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-tech text-xs tracking-widest text-neon-red uppercase font-extrabold select-none">[03]</span>
            <span className="w-8 h-[1px] bg-neon-red/50" />
          </div>
          <h2 className="font-cyber font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase select-none">
            FEATURED <span className="text-neon-red glow-text-red">PROJECTS</span>
          </h2>
        </div>

        {/* Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="glassmorphism p-6 rounded flex flex-col justify-between border border-neutral-900 shadow-[0_0_20px_-3px_rgba(0,0,0,0.6)] select-none group cursor-none hover:border-neon-red/40 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
              onClick={() => setSelectedProject(project)}
            >
              {/* Corner Tag */}
              <div className="absolute top-0 right-0 bg-neutral-900 border-l border-b border-neutral-800 text-[10px] font-tech font-bold uppercase tracking-wider text-neutral-400 px-3 py-1 group-hover:bg-neon-red group-hover:text-black group-hover:border-neon-red transition-all duration-300">
                {project.category}
              </div>

              {/* Card Body */}
              <div className="text-left mt-4 flex flex-col gap-4">
                <div className="p-3 bg-neon-red/10 border border-neon-red/20 w-fit rounded">
                  {project.icon}
                </div>
                <h3 className="font-cyber font-extrabold text-xl text-white group-hover:text-neon-red transition-colors duration-300 uppercase">
                  {project.title}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed font-sans">
                  {project.shortDesc}
                </p>
              </div>

              {/* Action trigger */}
              <div className="mt-8 flex justify-between items-center text-xs font-tech font-bold uppercase tracking-wider text-neon-red">
                <span>View System Specs</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glassmorphism w-full max-w-2xl rounded border border-neon-red/30 bg-bg-secondary p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto cursor-default shadow-[0_0_50px_rgba(255,30,30,0.25)] select-none text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neon-red p-1 rounded-full border border-transparent hover:border-neon-red/30 transition-all duration-300 cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2.5 bg-neon-red/10 border border-neon-red/20 rounded">
                  {selectedProject.icon}
                </div>
                <div>
                  <div className="text-[10px] font-tech font-bold uppercase tracking-widest text-neon-red">
                    {selectedProject.category} // PROJECT_DEEP_DIVE
                  </div>
                  <h3 className="font-cyber font-black text-2xl sm:text-3xl text-white uppercase tracking-wider">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Overview */}
              <div className="flex flex-col gap-6 text-sm text-neutral-300 font-sans">
                <div>
                  <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-white mb-2 select-none">
                    [01] SYSTEM_DESCRIPTION
                  </h4>
                  <p className="leading-relaxed text-neutral-400">{selectedProject.longDesc}</p>
                </div>

                {/* Challenge & Solution Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-black/60 rounded border border-neutral-900">
                    <h5 className="font-tech font-bold text-xs text-neon-red uppercase tracking-wider mb-1">
                      CHALLENGE
                    </h5>
                    <p className="text-neutral-400 text-xs leading-relaxed">{selectedProject.challenge}</p>
                  </div>
                  <div className="p-4 bg-black/60 rounded border border-neutral-900">
                    <h5 className="font-tech font-bold text-xs text-green-500 uppercase tracking-wider mb-1">
                      SOLUTION
                    </h5>
                    <p className="text-neutral-400 text-xs leading-relaxed">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Core Features */}
                <div>
                  <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-white mb-2 select-none">
                    [02] KEY_CAPABILITIES
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-none">
                    {selectedProject.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-neutral-400 text-xs">
                        <span className="w-1.5 h-1.5 bg-neon-red rounded-full shadow-[0_0_5px_#FF1E1E]" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Badge list */}
                <div>
                  <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-white mb-3 select-none">
                    [03] TECH_STACK_MODULES
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.stack.map((badge) => (
                      <span
                        key={badge}
                        className="font-tech font-bold text-xs tracking-wider uppercase px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded group-hover:border-neon-red/30"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="mt-8 pt-6 border-t border-neutral-900 flex justify-end">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-5 py-2.5 bg-neon-red text-black border border-neon-red rounded hover:bg-transparent hover:text-white transition-all duration-300 cursor-none"
                >
                  <ExternalLink className="w-4 h-4" />
                  View GitHub Source
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
