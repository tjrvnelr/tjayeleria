import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCode, FiLayers, FiZap, FiUsers } from "react-icons/fi";

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "20+", label: "Happy Clients" },
  { value: "99%", label: "Satisfaction Rate" },
];

const traits = [
  {
    icon: FiCode,
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and well-documented code.",
  },
  {
    icon: FiLayers,
    title: "System Design",
    desc: "Architecting robust solutions from concept to production.",
  },
  {
    icon: FiZap,
    title: "Performance",
    desc: "Optimizing for speed, accessibility, and core web vitals.",
  },
  {
    icon: FiUsers,
    title: "Collaboration",
    desc: "Thriving in cross-functional teams with clear communication.",
  },
];

function AnimatedSection({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#F9F7F7] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3F72AF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <AnimatedSection>
          <div className="text-center mb-16">
            <span className="text-[#3F72AF] text-sm font-semibold uppercase tracking-widest">
              About Me
            </span>
            <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#112D4E] tracking-tight">
              Crafting Digital Experiences
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:mx-0">
                <img
                  src="/src/assets/image/1x1 ID.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/60 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 lg:right-0 w-36 h-36 rounded-2xl bg-[#112D4E] flex flex-col items-center justify-center shadow-xl">
                <span className="text-4xl font-bold text-[#F9F7F7]">5+</span>
                <span className="text-[#3F72AF] text-xs font-medium mt-1 text-center leading-tight">
                  Years of
                  <br />
                  Experience
                </span>
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl bg-[#3F72AF] flex items-center justify-center shadow-lg">
                <FiCode size={28} className="text-[#F9F7F7]" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-[#112D4E]/70 text-lg leading-relaxed">
                I'm a passionate full stack developer with over 5 years of
                experience building modern web applications. I specialize in
                React, TypeScript, and Node.js, with a deep love for creating
                seamless user experiences.
              </p>
              <p className="text-[#112D4E]/70 text-lg leading-relaxed">
                My philosophy is simple: write clean code, think about the user
                first, and never stop learning. I've worked with startups and
                enterprise teams alike, always bringing the same energy and
                attention to detail.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {traits.map(({ icon: Icon, title, desc }) => (
                  <motion.div
                    key={title}
                    className="p-4 rounded-xl bg-white border border-[#112D4E]/8 shadow-sm hover:shadow-md hover:border-[#3F72AF]/30 transition-all duration-300 group"
                    whileHover={{ y: -3 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#3F72AF]/10 flex items-center justify-center mb-3 group-hover:bg-[#3F72AF]/20 transition-colors duration-300">
                      <Icon size={18} className="text-[#3F72AF]" />
                    </div>
                    <h4 className="font-semibold text-[#112D4E] text-sm mb-1">
                      {title}
                    </h4>
                    <p className="text-[#112D4E]/50 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center p-6 rounded-2xl bg-white border border-[#112D4E]/8 shadow-sm hover:shadow-md hover:border-[#3F72AF]/30 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#3F72AF] to-[#112D4E] mb-2">
                  {value}
                </div>
                <div className="text-[#112D4E]/50 text-sm font-medium">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
