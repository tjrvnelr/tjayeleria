import { motion } from 'framer-motion';
import { FiDownload, FiArrowDown } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { useEffect, useState } from 'react';

const roles = ['Full Stack Developer', 'UI/UX Enthusiast', 'React Specialist', 'Problem Solver'];

function ParticleBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: 60 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#3F72AF]"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.05,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.05, 0.4, 0.05],
          }}
          transition={{
            duration: Math.random() * 6 + 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const role = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < role.length) {
        timeout = setTimeout(() => setDisplayed(role.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#112D4E] flex items-center justify-center overflow-hidden"
    >
      <ParticleBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#3F72AF]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#3F72AF]/8 blur-3xl pointer-events-none" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3F72AF]/20 border border-[#3F72AF]/40 text-[#3F72AF] text-sm font-medium tracking-widest uppercase">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-[#F9F7F7] mb-4 leading-tight tracking-tight"
        >
          Hi, I'm{' '}
          <span className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3F72AF] to-[#F9F7F7]">
              Alex Morgan
            </span>
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="h-14 flex items-center justify-center mb-6">
          <span className="text-xl md:text-3xl text-[#F9F7F7]/70 font-light">
            {displayed}
            <span className="inline-block w-0.5 h-6 md:h-8 bg-[#3F72AF] ml-1 animate-pulse align-middle" />
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-[#F9F7F7]/50 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft elegant digital experiences with clean code and thoughtful design.
          Passionate about building products that make a real difference.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-3.5 bg-[#3F72AF] text-[#F9F7F7] font-semibold rounded-xl hover:bg-[#3F72AF]/90 transition-all duration-300 shadow-lg shadow-[#3F72AF]/30 hover:shadow-[#3F72AF]/50 hover:-translate-y-0.5"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
          </motion.button>
          <motion.a
            href="/resume.pdf"
            download
            className="group flex items-center gap-2 px-8 py-3.5 border border-[#3F72AF]/50 text-[#F9F7F7]/80 font-semibold rounded-xl hover:border-[#3F72AF] hover:text-[#F9F7F7] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#3F72AF]/10"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <FiDownload size={16} className="group-hover:animate-bounce" />
            Download CV
          </motion.a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-5">
          {[
            { icon: FiGithub, href: 'https://github.com', label: 'GitHub' },
            { icon: FiLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
            { icon: FiTwitter, href: 'https://twitter.com', label: 'Twitter' },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl bg-[#F9F7F7]/5 border border-[#F9F7F7]/10 flex items-center justify-center text-[#F9F7F7]/50 hover:text-[#3F72AF] hover:border-[#3F72AF]/50 hover:bg-[#3F72AF]/10 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#F9F7F7]/40 hover:text-[#3F72AF] transition-colors duration-300"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        aria-label="Scroll down"
      >
        <FiArrowDown size={24} />
      </motion.button>
    </section>
  );
}
