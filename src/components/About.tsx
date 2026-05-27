import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiCode,
  FiLayers,
  FiMousePointer,
  FiZap,
  FiUsers,
} from "react-icons/fi";
import tjayPic from "../assets/image/tjaypic.jpg";

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
    detail:
      "I focus on reusable components, readable structure, and practical solutions that are easy to improve later.",
  },
  {
    icon: FiLayers,
    title: "System Design",
    desc: "Architecting robust solutions from concept to production.",
    detail:
      "I like turning broad ideas into clear flows, simple data structures, and interfaces that feel organized.",
  },
  {
    icon: FiZap,
    title: "Performance",
    desc: "Optimizing for speed, accessibility, and core web vitals.",
    detail:
      "I pay attention to smooth loading, responsive layouts, and interactions that feel fast on real devices.",
  },
  {
    icon: FiMousePointer,
    title: "Minimalist UI/UX",
    desc: "Creating clean and intuitive user interfaces.",
    detail:
      "I value direct communication, feedback, and building features that make sense for the people using them.",
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
  const [activeTrait, setActiveTrait] = useState(0);
  const active = traits[activeTrait];

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
              Creative Developer
            </h2>
            <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full mx-auto" />
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-20  items-center mb-20">
          <AnimatedSection delay={0.1}>
            <div className="relative">
              <motion.div
                className="absolute -inset-5 rounded-[2rem] border border-[#3F72AF]/20"
                animate={{ rotate: [0, 1.5, 0], scale: [1, 1.02, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-w-sm mx-auto lg:ml-auto lg:mr-0">
                <img
                  className="w-full h-full object-cover"
                  alt="Profile"
                  src={tjayPic}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/60 via-transparent to-transparent" />
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="space-y-6">
              <p className="text-[#112D4E]/70 text-lg leading-relaxed">
                I am an aspiring software engineer who enjoys creating modern 
                and interactive digital projects. I am passionate about web 
                development, UI/UX design, and learning new technologies. I like 
                building clean and minimalist designs that improve user experience.
                I always aim to develop skills that can help me grow as a professional
                  software engineer.
              </p>
              <p className="text-[#112D4E]/70 text-lg leading-relaxed">
                I enjoy exploring creative ideas and turning them into
                functional digital solutions. I am motivated to continuously
                improve my coding and design abilities through practice and
                experience. I value innovation, creativity, and problem-solving
                in every project I create. My goal is to build impactful systems
                that are both useful and visually appealing.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {traits.map(({ icon: Icon, title, desc }, index) => (
                  <motion.button
                    key={title}
                    type="button"
                    aria-pressed={activeTrait === index}
                    onClick={() => setActiveTrait(index)}
                    className={`text-left p-4 rounded-xl bg-white border shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#3F72AF]/40 ${
                      activeTrait === index
                        ? "border-[#3F72AF]/50 shadow-md"
                        : "border-[#112D4E]/8 hover:border-[#3F72AF]/30"
                    }`}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 transition-colors duration-300 ${
                        activeTrait === index
                          ? "bg-[#3F72AF] text-white"
                          : "bg-[#3F72AF]/10 text-[#3F72AF] group-hover:bg-[#3F72AF]/20"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={
                          activeTrait === index ? "text-white" : "text-[#3F72AF]"
                        }
                      />
                    </div>
                    <h4 className="font-semibold text-[#112D4E] text-sm mb-1">
                      {title}
                    </h4>
                    <p className="text-[#112D4E]/50 text-xs leading-relaxed">
                      {desc}
                    </p>
                  </motion.button>
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
