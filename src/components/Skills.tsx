import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiPython,
  SiFigma,
  SiVercel,
  SiGraphql,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiJavascript,
} from "react-icons/si";

const techStack = [
  { icon: SiReact, label: "React", level: 95, color: "#61DAFB" },
  { icon: SiTypescript, label: "TypeScript", level: 90, color: "#3178C6" },
  { icon: SiNextdotjs, label: "Next.js", level: 88, color: "#000000" },
  { icon: SiNodedotjs, label: "Node.js", level: 85, color: "#339933" },
  { icon: SiJavascript, label: "JavaScript", level: 95, color: "#F7DF1E" },
  { icon: SiTailwindcss, label: "Tailwind", level: 92, color: "#06B6D4" },
  { icon: SiPostgresql, label: "PostgreSQL", level: 80, color: "#4169E1" },
  { icon: SiMongodb, label: "MongoDB", level: 78, color: "#47A248" },
  { icon: SiGraphql, label: "GraphQL", level: 75, color: "#E10098" },
  { icon: SiPython, label: "Python", level: 72, color: "#3776AB" },
  { icon: SiDocker, label: "Docker", level: 80, color: "#2496ED" },
  { icon: SiVercel, label: "Vercel", level: 85, color: "#000000" },
  { icon: SiRedis, label: "Redis", level: 72, color: "#DC382D" },
  { icon: SiKubernetes, label: "Kubernetes", level: 60, color: "#326CE5" },
  { icon: SiGit, label: "Git", level: 93, color: "#F05032" },
  { icon: SiFigma, label: "Figma", level: 82, color: "#F24E1E" },
];

function SkillCard({
  icon: Icon,
  label,
  level,
  color,
  delay,
}: {
  icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>;
  label: string;
  level: number;
  color: string;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="group relative p-5 rounded-2xl bg-white border border-[#112D4E]/8 shadow-sm hover:shadow-lg hover:border-[#3F72AF]/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <span className="text-xs font-bold text-[#3F72AF] bg-[#3F72AF]/8 px-2 py-1 rounded-lg">
          {level}%
        </span>
      </div>

      <h4 className="font-semibold text-[#112D4E] text-sm mb-3">{label}</h4>

      <div className="h-1.5 bg-[#112D4E]/8 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}60, ${color})` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      className="py-28 bg-[#112D4E] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#3F72AF]/5 blur-3xl" />
        <div className="absolute bottom-1/3 left-0 w-64 h-64 rounded-full bg-[#3F72AF]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="text-[#3F72AF] text-sm font-semibold uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#F9F7F7] tracking-tight">
            Skills & Technologies
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#F9F7F7]/30 rounded-full mx-auto" />
          <p className="mt-5 text-[#F9F7F7]/50 max-w-xl mx-auto text-base">
            A curated set of tools and technologies I use to build world-class
            products.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {techStack.map((skill, i) => (
            <SkillCard key={skill.label} {...skill} delay={i * 0.04} />
          ))}
        </div>
      </div>
    </section>
  );
}
