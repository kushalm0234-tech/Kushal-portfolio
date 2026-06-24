import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, ShieldCheck, X, Calendar, User, Fingerprint } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  skillsAcquired: string[];
  description: string;
  pdfUrl?: string;
}

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const certificatesData: Certificate[] = [
    {
      id: "ai-fundamentals",
      title: "Artificial Intelligence Fundamentals",
      issuer: "Industry Standard Certification",
      date: "August 2025",
      credentialId: "CRT-AIF-98214309",
      skillsAcquired: [
        "Neural Networks Basics",
        "Supervised & Unsupervised Learning",
        "NLP Fundamentals",
        "Ethical AI Frameworks"
      ],
      description:
        "Validates fundamental competence in artificial intelligence methodologies, including core supervised and unsupervised machine learning algorithms, deep learning neural architectures, and natural language processing patterns."
    },
    {
      id: "customer-engagement",
      title: "Customer Engagement: Problem Solving & Process Controls",
      issuer: "Professional Quality Control Board",
      date: "November 2025",
      credentialId: "CRT-CEPS-11547802",
      skillsAcquired: [
        "Process Operations Control",
        "Collaborative Problem Solving",
        "Workflow Automation Metrics",
        "Data-driven Engagement Diagnostics"
      ],
      description:
        "Certifies advanced capabilities in identifying structural system bottlenecks, implementing data-driven operational process controls, and utilizing structured problem-solving methodologies to optimize end-to-end customer engagements."
    },
    {
      id: "data-analytics-internship",
      title: "Data Analytics Internship",
      issuer: "Internship Studio",
      date: "May 2026",
      credentialId: "ISDTAI3003186",
      skillsAcquired: [
        "Data Analytics",
        "Data Visualization",
        "Python & SQL",
        "Exploratory Data Analysis (EDA)"
      ],
      description:
        "Completed a comprehensive hands-on Data Analytics internship at Internship Studio from 20th February, 2026 to 26th May, 2026. Gained experience in data preparation, EDA, visualization, and building diagnostic reports for business insights.",
      pdfUrl: "/Kushal_M_Data_Analytics_Internship_Certificate.pdf"
    }
    , {
        id: "deloitte-data-analytics",
        title: "Data Analytics Course",
        issuer: "Deloitte",
        date: "June 2026",
        credentialId: "DLT-DA-2026",
        skillsAcquired: [
          "Data Analysis",
          "Data Visualization",
          "Excel & SQL",
          "Business Intelligence"
        ],
        description:
          "Completed Deloitte's Data Analytics course covering practical analytics workflows, visualization techniques, and business reporting.",
        pdfUrl: "/Deloitte_Data_Analytics_Certificate.pdf"
      }
  ];

  return (
    <section id="certificates" className="relative py-24 sm:py-32 w-full bg-bg-primary overflow-hidden">
      {/* Glow ambient particles */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-red/3 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-tech text-xs tracking-widest text-neon-red uppercase font-extrabold select-none">[04]</span>
            <span className="w-8 h-[1px] bg-neon-red/50" />
          </div>
          <h2 className="font-cyber font-extrabold text-3xl sm:text-5xl text-white tracking-wider uppercase select-none">
            CREDENTIALS <span className="text-neon-red glow-text-red">& CERTIFICATIONS</span>
          </h2>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glassmorphism p-6 sm:p-8 rounded flex flex-col justify-between border border-neutral-900 shadow-[0_0_20px_-3px_rgba(0,0,0,0.6)] select-none group cursor-none hover:border-neon-red/40 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden text-left"
              onClick={() => setSelectedCert(cert)}
            >
              {/* Top Accent Icon */}
              <div className="flex justify-between items-start gap-4 mb-6">
                <div className="p-3 bg-neon-red/10 border border-neon-red/20 rounded">
                  <Award className="w-6 h-6 text-neon-red" />
                </div>
                <div className="flex items-center gap-1.5 font-mono text-[9px] text-neutral-500 tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                  VERIFIED_SECURE
                </div>
              </div>

              {/* Body */}
              <div className="flex-1">
                <span className="font-tech font-bold text-[10px] tracking-widest text-neon-red uppercase block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="font-cyber font-extrabold text-lg sm:text-xl text-white group-hover:text-neon-red transition-colors duration-300 uppercase leading-snug mb-3">
                  {cert.title}
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm font-sans leading-relaxed line-clamp-3 mb-6">
                  {cert.description}
                </p>
              </div>

              {/* Bottom tag */}
              <div className="border-t border-neutral-900/80 pt-4 mt-4 flex justify-between items-center text-xs font-tech font-semibold tracking-wider text-neutral-500 group-hover:text-neon-red transition-colors duration-300">
                <span>Credential Spec: {cert.credentialId}</span>
                <span className="underline">View Decrypted Badge</span>
              </div>
              {cert.pdfUrl && (
                <div className="mt-3 flex justify-end">
                  <a
                    href={cert.pdfUrl}
                    download
                    className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-4 py-2 bg-neon-red text-black border border-neon-red rounded hover:bg-transparent hover:text-white transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download Certificate
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal Preview Overlay */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="glassmorphism w-full max-w-xl rounded border border-neon-red/30 bg-bg-secondary p-6 sm:p-8 relative overflow-y-auto cursor-default shadow-[0_0_50px_rgba(255,30,30,0.25)] select-none text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neon-red p-1 rounded-full border border-transparent hover:border-neon-red/30 transition-all duration-300 cursor-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Certificate Template Header */}
              <div className="flex items-center gap-3 border-b border-neutral-900 pb-5 mb-6">
                <Award className="w-8 h-8 text-neon-red" />
                <div>
                  <div className="text-[9px] font-mono text-neutral-500 uppercase tracking-widest leading-3">
                    DIGITAL_CREDENTIAL_SECURE_VAULT
                  </div>
                  <h3 className="font-cyber font-black text-xl text-white uppercase tracking-wider">
                    VERIFIED CERTIFICATE
                  </h3>
                </div>
              </div>

              {/* Core Certificate Mock Design */}
              <div className="p-6 bg-black border border-neutral-900 rounded mb-6 flex flex-col gap-6 relative overflow-hidden shadow-[inset_0_0_20px_rgba(255,30,30,0.15)]">
                {/* Tech scan background overlay */}
                <div className="absolute inset-0 cyber-grid opacity-5 pointer-events-none" />

                {/* Recipient */}
                <div className="flex flex-col gap-1 z-10">
                  <span className="font-tech font-bold text-[9px] text-neutral-500 tracking-wider uppercase">
                    GRANTED_TO:
                  </span>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-neon-red" />
                    <span className="font-cyber font-extrabold text-base sm:text-lg text-white uppercase tracking-wide">
                      Kushal M
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="flex flex-col gap-1 z-10">
                  <span className="font-tech font-bold text-[9px] text-neutral-500 tracking-wider uppercase">
                    CERTIFICATE_OF_COMPLETION:
                  </span>
                  <span className="font-cyber font-black text-sm sm:text-base text-neon-red uppercase tracking-wider leading-relaxed">
                    {selectedCert.title}
                  </span>
                </div>

                {/* Meta details footer */}
                <div className="grid grid-cols-2 gap-4 border-t border-neutral-900/60 pt-4 z-10">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech font-bold text-[8px] text-neutral-500 tracking-wider uppercase">
                      ISSUED_ON:
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-300">
                      <Calendar className="w-3 h-3 text-neon-red" />
                      {selectedCert.date}
                    </div>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-tech font-bold text-[8px] text-neutral-500 tracking-wider uppercase">
                      CREDENTIAL_SIGNATURE:
                    </span>
                    <div className="flex items-center gap-1.5 font-mono text-[10px] text-neutral-300">
                      <Fingerprint className="w-3 h-3 text-neon-red" />
                      {selectedCert.credentialId}
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills acquired in this credential */}
              <div className="flex flex-col gap-3">
                <h4 className="font-cyber font-bold text-xs uppercase tracking-widest text-white select-none">
                  VALIDATED_SPECIALIZATION_CORES:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCert.skillsAcquired.map((skill) => (
                    <span
                      key={skill}
                      className="font-tech font-bold text-xs tracking-wider uppercase px-2.5 py-1 bg-neutral-900 border border-neutral-800 text-neutral-300 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {selectedCert.pdfUrl && (
                  <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-end">
                    <a
                      href={selectedCert.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-tech font-bold text-sm tracking-wider uppercase px-5 py-2.5 bg-neon-red text-black border border-neon-red rounded hover:bg-transparent hover:text-white transition-all duration-300 cursor-none"
                    >
                      View Decrypted Badge
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
