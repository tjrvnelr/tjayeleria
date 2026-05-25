import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiCheckCircle,
  FiCode,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import {
  SiCss,
  SiFigma,
  SiFirebase,
  SiFramer,
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import "./App.css";

const sections = ["home", "about", "stack", "projects", "services", "contact"];

const skills = [
  "Product UI",
  "Design Systems",
  "React Architecture",
  "API Integration",
  "Performance",
  "Accessibility",
];

const stackGroups = [
  {
    title: "Frontend",
    items: [
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "CSS", icon: SiCss },
    ],
  },
  {
    title: "Motion & Product",
    items: [
      { name: "Framer", icon: SiFramer },
      { name: "Figma", icon: SiFigma },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
];

const projects = [
  {
    title: "Nova Analytics",
    category: "SaaS Dashboard",
    description:
      "A conversion dashboard with clean data views, role-aware navigation, and fast-loading charts.",
    tags: ["React", "Tailwind", "Charts"],
    accent: "from-cyan-400 to-emerald-400",
  },
  {
    title: "Orbit Studio",
    category: "Creative Platform",
    description:
      "A collaborative project workspace with motion-rich previews, asset boards, and client review flows.",
    tags: ["Framer Motion", "Firebase", "UX"],
    accent: "from-violet-400 to-rose-400",
  },
  {
    title: "Pulse Commerce",
    category: "E-commerce UI",
    description:
      "A premium storefront experience focused on visual merchandising, accessibility, and checkout clarity.",
    tags: ["React", "A11y", "Performance"],
    accent: "from-amber-300 to-orange-500",
  },
];

const services = [
  {
    icon: FiCode,
    title: "Frontend Engineering",
    body: "Responsive React interfaces, reusable components, and production-ready interaction states.",
  },
  {
    icon: FiBriefcase,
    title: "Product Experience",
    body: "Focused flows, information architecture, and UI systems that make complex products easier to use.",
  },
  {
    icon: FiCheckCircle,
    title: "Optimization",
    body: "Performance tuning, accessibility reviews, and code quality improvements for smoother releases.",
  },
];

const achievements = [
  "Shipped 20+ production web experiences",
  "Improved product conversion through UX refinements",
  "Built maintainable component systems for scaling teams",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });

  const navItems = useMemo(
    () =>
      sections.map((section) => ({
        id: section,
        label:
          section === "stack"
            ? "Tech Stack"
            : section[0].toUpperCase() + section.slice(1),
      })),
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) =>
      setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-slate-100 transition-colors duration-500">
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div
        className="interactive-cursor hidden lg:block"
        style={{
          transform: `translate3d(${cursor.x - 12}px, ${cursor.y - 12}px, 0)`,
        }}
      />
      <ParticleField />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <button
            className="text-left"
            onClick={() => scrollTo("home")}
            aria-label="Go to home"
          >
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              TJ
            </span>
            <span className="text-base font-semibold">Tjay Eleria</span>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-pill ${activeSection === item.id ? "active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              className="icon-button md:hidden"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <motion.div
            className="mx-5 mb-4 grid gap-2 rounded-2xl border border-white/10 bg-slate-900/95 p-3 shadow-2xl md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-200"
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </header>

      <main>
        <section id="home" className="section hero-section">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pt-36">
            <Reveal>
              <p className="eyebrow">Available for select projects</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-tight text-white md:text-7xl">
                Building elegant web experiences with precise interaction
                design.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I craft fast, accessible, and visually polished React interfaces
                for founders, agencies, and product teams who care about
                details.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  className="primary-button"
                  onClick={() => scrollTo("projects")}
                >
                  View Projects <FiArrowUpRight />
                </button>
                <a className="secondary-button" href="/resume.pdf" download>
                  Resume <FiDownload />
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="profile-card">
                <div className="profile-glow" />
                <img
                  src="/profile-portrait.svg"
                  alt="Abstract portrait of Tjay Eleria"
                  loading="lazy"
                  className="relative z-10 w-full"
                />
                <div className="profile-stat left-5 top-6">
                  <span>5+</span>
                  Years building UI
                </div>
                <div className="profile-stat bottom-6 right-5">
                  <span>98</span>
                  Lighthouse focus
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="about" className="section">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
            <SectionIntro
              eyebrow="About Me"
              title="A pragmatic developer with a designer's eye."
            />
            <Reveal>
              <div className="glass-panel p-6 md:p-8">
                <p className="text-lg leading-8 text-slate-300">
                  I specialize in turning product ideas into calm, polished web
                  interfaces. My work blends React engineering, visual systems,
                  motion, and performance so every screen feels intentional from
                  first load to final interaction.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <div key={skill} className="skill-chip">
                      <FiCheckCircle /> {skill}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="stack" className="section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Tech Stack"
              title="Tools I use to ship refined experiences."
            />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {stackGroups.map((group, groupIndex) => (
                <Reveal key={group.title} delay={groupIndex * 0.08}>
                  <div className="glass-panel p-6">
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                      {group.items.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <motion.div
                            key={item.name}
                            className="tech-tile"
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 18,
                            }}
                          >
                            <Icon className="text-3xl text-cyan-300" />
                            <span>{item.name}</span>
                            <small>{String(index + 1).padStart(2, "0")}</small>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <SectionIntro
                eyebrow="Projects"
                title="Selected work with thoughtful interaction."
              />
              <a
                className="text-link"
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                More on GitHub <FiArrowUpRight />
              </a>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 0.08}>
                  <motion.article
                    className="project-card"
                    whileHover={{ y: -10 }}
                  >
                    <div
                      className={`project-preview bg-gradient-to-br ${project.accent}`}
                    >
                      <div className="preview-window">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="preview-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <p className="mt-6 text-sm uppercase tracking-[0.25em] text-cyan-300">
                      {project.category}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold">
                      {project.title}
                    </h3>
                    <p className="mt-4 leading-7 text-slate-300">
                      {project.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-7 flex gap-3">
                      <a
                        className="project-link"
                        href="https://example.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live <FiArrowUpRight />
                      </a>
                      <a
                        className="project-link"
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code <FiGithub />
                      </a>
                    </div>
                  </motion.article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionIntro
              eyebrow="Expertise"
              title="Clear strategy, careful execution."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Reveal key={service.title} delay={index * 0.08}>
                    <div className="service-card">
                      <Icon className="text-3xl text-cyan-300" />
                      <h3>{service.title}</h3>
                      <p>{service.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="achievement">
                  <FiCheckCircle /> {achievement}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section pb-16">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <div>
              <SectionIntro eyebrow="Contact" title="Have a project in mind?" />
              <p className="mt-6 max-w-xl leading-8 text-slate-300">
                Send a note about the product, timeline, and goals. I usually
                respond within one business day.
              </p>
              <div className="mt-8 flex gap-3">
                <a
                  className="icon-button"
                  href="mailto:hello@example.com"
                  aria-label="Email"
                >
                  <FiMail />
                </a>
                <a
                  className="icon-button"
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  className="icon-button"
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
            <Reveal>
              <form className="glass-panel grid gap-4 p-5 md:p-7">
                <label>
                  <span>Name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                  />
                </label>
                <label>
                  <span>Email</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about the project"
                  />
                </label>
                <button className="primary-button justify-center" type="submit">
                  Send Message <FiArrowUpRight />
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()} Tjay Eleria. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            {navItems.slice(0, 5).map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 18 }).map((_, index) => (
        <span
          key={index}
          style={{
            "--i": index,
            left: `${(index * 13 + 8) % 100}%`,
            top: `${(index * 19 + 12) % 100}%`,
          }}
        />
      ))}
    </div>
  );
}

function SectionIntro({ eyebrow, title }) {
  return (
    <Reveal>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight text-white md:text-5xl">
          {title}
        </h2>
      </div>
    </Reveal>
  );
}

function Reveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default App;
