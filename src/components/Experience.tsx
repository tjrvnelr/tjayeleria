import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiBriefcase, FiAward, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    type: "work",
    role: "Senior Frontend Engineer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2022 – Present",
    description:
      "Led the frontend architecture for a SaaS platform serving 50K+ users. Reduced bundle size by 45% and improved core web vitals to top 10% globally.",
    highlights: ["React", "TypeScript", "GraphQL", "AWS"],
  },
  {
    type: "work",
    role: "Full Stack Developer",
    company: "Innovate Labs",
    location: "Remote",
    period: "2020 – 2022",
    description:
      "Built and maintained 3 production applications from the ground up. Collaborated with design, product, and data teams to ship high-impact features monthly.",
    highlights: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    role: "Frontend Developer",
    company: "StartupXYZ",
    location: "New York, NY",
    period: "2019 – 2020",
    description:
      "Developed responsive web interfaces and internal tooling that improved operational efficiency by 30%. Mentored junior developers and established code review practices.",
    highlights: ["React", "Redux", "Sass", "Jest"],
  },
];

const achievements = [
  {
    icon: FiAward,
    title: "Best Developer Award",
    org: "TechCorp Solutions",
    year: "2023",
    desc: "Recognized for exceptional contributions to product performance.",
  },
  {
    icon: FiAward,
    title: "Open Source Contributor",
    org: "GitHub",
    year: "2022",
    desc: "500+ stars across public repositories, 3 accepted major PRs to React ecosystem.",
  },
  {
    icon: FiAward,
    title: "AWS Certified Developer",
    org: "Amazon Web Services",
    year: "2021",
    desc: "Associate level certification covering cloud architecture and services.",
  },
  {
    icon: FiAward,
    title: "Hackathon Winner",
    org: "SF Hackfest 2020",
    year: "2020",
    desc: "First place out of 120 teams for building an AI-driven accessibility tool.",
  },
];

function TimelineItem({
  item,
  index,
}: {
  item: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className={`relative flex gap-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-start`}
    >
      <div className="hidden md:flex w-1/2" />

      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#3F72AF] flex items-center justify-center shadow-lg shadow-[#3F72AF]/30">
          <FiBriefcase size={18} className="text-[#F9F7F7]" />
        </div>
      </div>

      <div className={`flex-1 md:w-1/2 pb-8 ${isEven ? "" : "md:text-right"}`}>
        <div
          className={`p-6 rounded-2xl bg-white border border-[#112D4E]/8 shadow-sm hover:shadow-lg hover:border-[#3F72AF]/30 transition-all duration-300 hover:-translate-y-1`}
        >
          <div
            className={`flex flex-wrap items-center gap-2 mb-1 ${isEven ? "" : "md:flex-row-reverse"}`}
          >
            <h3 className="font-bold text-[#112D4E] text-lg">{item.role}</h3>
            <span className="text-xs bg-[#3F72AF]/10 text-[#3F72AF] px-2 py-0.5 rounded-full font-medium">
              {item.company}
            </span>
          </div>

          <div
            className={`flex flex-wrap gap-3 text-[#112D4E]/40 text-xs mb-3 ${isEven ? "" : "md:flex-row-reverse"}`}
          >
            <span className="flex items-center gap-1">
              <FiCalendar size={11} /> {item.period}
            </span>
            <span className="flex items-center gap-1">
              <FiMapPin size={11} /> {item.location}
            </span>
          </div>

          <p className="text-[#112D4E]/60 text-sm leading-relaxed mb-4">
            {item.description}
          </p>

          <div
            className={`flex flex-wrap gap-1.5 ${isEven ? "" : "md:flex-row-reverse"}`}
          >
            {item.highlights.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-[#112D4E]/5 text-[#112D4E]/55 text-xs rounded-lg font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      className="py-28 bg-[#112D4E] relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#3F72AF]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#3F72AF] text-sm font-semibold uppercase tracking-widest">
            Journey
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#F9F7F7] tracking-tight">
            Experience & Achievements
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#F9F7F7]/30 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#F9F7F7]/50 text-xs font-semibold uppercase tracking-widest mb-8 flex items-center gap-2"
            >
              <FiBriefcase size={14} />
              Work History
            </motion.h3>

            <div className="relative">
              <div
                className="absolute left-6 top-6 bottom-0 w-px bg-gradient-to-b from-[#3F72AF]/40 to-transparent hidden md:block"
                style={{ left: "23px" }}
              />

              <div className="space-y-0">
                {experiences.map((exp, i) => (
                  <WorkItem key={exp.company} item={exp} index={i} />
                ))}
              </div>
            </div>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#F9F7F7]/50 text-xs font-semibold uppercase tracking-widest mb-8 flex items-center gap-2"
            >
              <FiAward size={14} />
              Awards & Certifications
            </motion.h3>

            <div className="space-y-4">
              {achievements.map((ach, i) => (
                <AchievementCard key={ach.title} item={ach} delay={i * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkItem({
  item,
  index,
}: {
  item: (typeof experiences)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative flex gap-5 pb-8"
    >
      <div className="relative z-10 flex-shrink-0 mt-1">
        <div className="w-10 h-10 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 flex items-center justify-center">
          <FiBriefcase size={14} className="text-[#3F72AF]" />
        </div>
      </div>

      <div className="flex-1 p-5 rounded-2xl bg-[#F9F7F7]/5 border border-[#F9F7F7]/8 hover:border-[#3F72AF]/30 transition-all duration-300 hover:bg-[#F9F7F7]/8">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
          <div>
            <h4 className="font-bold text-[#F9F7F7] text-base">{item.role}</h4>
            <span className="text-[#3F72AF] text-sm font-medium">
              {item.company}
            </span>
          </div>
          <div className="text-right text-xs text-[#F9F7F7]/40">
            <div className="flex items-center gap-1">
              <FiCalendar size={10} /> {item.period}
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <FiMapPin size={10} /> {item.location}
            </div>
          </div>
        </div>
        <p className="text-[#F9F7F7]/50 text-sm leading-relaxed mb-3">
          {item.description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {item.highlights.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-[#3F72AF]/15 text-[#3F72AF] text-xs rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function AchievementCard({
  item,
  delay,
}: {
  item: (typeof achievements)[0];
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="p-5 rounded-2xl bg-[#F9F7F7]/5 border border-[#F9F7F7]/8 hover:border-[#3F72AF]/30 transition-all duration-300 hover:bg-[#F9F7F7]/8 group"
      whileHover={{ x: 4 }}
    >
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-xl bg-[#3F72AF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3F72AF]/30 transition-colors duration-300">
          <FiAward size={16} className="text-[#3F72AF]" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-semibold text-[#F9F7F7] text-sm leading-tight">
              {item.title}
            </h4>
            <span className="text-[#3F72AF] text-xs bg-[#3F72AF]/15 px-2 py-0.5 rounded-full shrink-0">
              {item.year}
            </span>
          </div>
          <div className="text-[#F9F7F7]/40 text-xs mt-0.5 mb-2">
            {item.org}
          </div>
          <p className="text-[#F9F7F7]/50 text-xs leading-relaxed">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
