import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';

const categories = ['All', 'Web App', 'Mobile', 'API', 'Design'];

const projects = [
  {
    id: 1,
    title: 'FinanceFlow Dashboard',
    category: 'Web App',
    description: 'A comprehensive financial analytics platform with real-time data visualization, budget tracking, and AI-powered insights.',
    tags: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
    image: 'https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 2,
    title: 'EduLearn Platform',
    category: 'Web App',
    description: 'Modern e-learning platform with interactive courses, progress tracking, and collaborative study rooms.',
    tags: ['Next.js', 'Tailwind', 'Supabase', 'WebSockets'],
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    id: 3,
    title: 'TaskMate Mobile',
    category: 'Mobile',
    description: 'Cross-platform productivity app with smart task scheduling, team collaboration, and offline sync.',
    tags: ['React Native', 'Redux', 'Firebase', 'Expo'],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 4,
    title: 'REST API Toolkit',
    category: 'API',
    description: 'Scalable REST API with authentication, rate limiting, caching, and comprehensive documentation.',
    tags: ['Node.js', 'Express', 'Redis', 'JWT', 'Swagger'],
    image: 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 5,
    title: 'BrandKit Design System',
    category: 'Design',
    description: 'Comprehensive design system with 200+ components, tokens, and interactive guidelines for enterprise teams.',
    tags: ['Figma', 'Storybook', 'React', 'CSS Variables'],
    image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    id: 6,
    title: 'ShopStream Commerce',
    category: 'Web App',
    description: 'High-performance e-commerce platform with AI recommendations, real-time inventory, and seamless checkout.',
    tags: ['Next.js', 'Stripe', 'Prisma', 'tRPC'],
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-[#F9F7F7] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3F72AF]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center mb-12"
        >
          <span className="text-[#3F72AF] text-sm font-semibold uppercase tracking-widest">Portfolio</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#112D4E] tracking-tight">
            Featured Projects
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#112D4E] rounded-full mx-auto" />
          <p className="mt-5 text-[#112D4E]/50 max-w-xl mx-auto text-base">
            A selection of projects that showcase my skills and passion for building great products.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-[#3F72AF] text-[#F9F7F7] shadow-lg shadow-[#3F72AF]/30'
                  : 'bg-white text-[#112D4E]/60 border border-[#112D4E]/10 hover:border-[#3F72AF]/40 hover:text-[#3F72AF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} delay={i * 0.08} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#3F72AF] font-semibold hover:gap-3 transition-all duration-300 group"
          >
            View all projects on GitHub
            <FiArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay }: { project: typeof projects[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      className="group rounded-2xl bg-white border border-[#112D4E]/8 shadow-sm hover:shadow-xl hover:border-[#3F72AF]/30 overflow-hidden transition-all duration-500 hover:-translate-y-2"
    >
      <div className="relative overflow-hidden aspect-[16/9]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#112D4E]/80 via-[#112D4E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute top-3 left-3">
          {project.featured && (
            <span className="px-2.5 py-1 bg-[#3F72AF] text-[#F9F7F7] text-xs font-semibold rounded-full">
              Featured
            </span>
          )}
        </div>

        <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-[#F9F7F7]/90 rounded-lg flex items-center justify-center text-[#112D4E] hover:bg-[#F9F7F7] transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FiGithub size={16} />
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 bg-[#3F72AF] rounded-lg flex items-center justify-center text-[#F9F7F7] hover:bg-[#3F72AF]/90 transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <FiExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-[#112D4E] text-lg leading-tight">{project.title}</h3>
          <span className="text-xs text-[#3F72AF] bg-[#3F72AF]/8 px-2 py-0.5 rounded-full shrink-0 ml-2">
            {project.category}
          </span>
        </div>
        <p className="text-[#112D4E]/55 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-[#112D4E]/5 text-[#112D4E]/60 text-xs rounded-lg font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
