import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiDownload, FiEye, FiFileText } from "react-icons/fi";

export default function Resume() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="resume"
      className="py-24 bg-[#F9F7F7] relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3F72AF]/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-gradient-to-br from-[#112D4E] to-[#1a3d63] overflow-hidden p-10 md:p-14 text-center shadow-2xl shadow-[#112D4E]/20"
        >
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#3F72AF]/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-[#3F72AF]/8 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative z-10 w-20 h-20 rounded-2xl bg-[#3F72AF]/20 border border-[#3F72AF]/30 flex items-center justify-center mx-auto mb-6"
          >
            <FiFileText size={32} className="text-[#3F72AF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative z-10 text-3xl md:text-4xl font-bold text-[#F9F7F7] mb-4 tracking-tight"
          >
            Download My Resume
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative z-10 text-[#F9F7F7]/50 text-base md:text-lg mb-8 max-w-lg mx-auto leading-relaxed"
          >
            Get a comprehensive overview of my skills, experience, and
            achievements. Available in PDF format — always up to date.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="/src/resume.pdf"
              download
              className="group flex items-center gap-3 px-8 py-4 bg-[#3F72AF] text-[#F9F7F7] font-semibold rounded-xl hover:bg-[#3F72AF]/90 transition-all duration-300 shadow-lg shadow-[#3F72AF]/40 hover:shadow-[#3F72AF]/60 w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiDownload size={18} className="group-hover:animate-bounce" />
              Download PDF
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-6 text-[#F9F7F7]/30 text-sm"
          >
            <span>Updated May 2026</span>
            <span className="w-1 h-1 rounded-full bg-[#F9F7F7]/20" />
            <span>1 pages</span>
            <span className="w-1 h-1 rounded-full bg-[#F9F7F7]/20" />
            <span>PDF format</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
