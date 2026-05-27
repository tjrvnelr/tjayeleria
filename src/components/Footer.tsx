import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
  FiHeart,
} from "react-icons/fi";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiMail, href: "mailto:tjayeleria9@gmail.com", label: "Email" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0c2240] border-t border-[#F9F7F7]/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start mb-10">
          <div>
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#hero");
              }}
              className="inline-block text-[#F9F7F7] font-bold text-2xl tracking-tight mb-3"
            >
              <span className="text-[#3F72AF]">&lt;</span>
              Tjay
              <span className="text-[#3F72AF]">/&gt;</span>
            </a>
            <p className="text-[#F9F7F7]/40 text-sm leading-relaxed max-w-xs">
              Building elegant digital experiences with clean code and
              thoughtful design.
            </p>
          </div>

          <div>
            <h4 className="text-[#F9F7F7]/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-[#F9F7F7]/50 text-sm hover:text-[#3F72AF] transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#F9F7F7]/30 text-xs font-semibold uppercase tracking-widest mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-[#F9F7F7]/5 border border-[#F9F7F7]/10 flex items-center justify-center text-[#F9F7F7]/40 hover:text-[#3F72AF] hover:border-[#3F72AF]/40 hover:bg-[#3F72AF]/10 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
            <a
              href="mailto:tjayeleria9@gmail.com"
              className="text-[#F9F7F7]/50 text-sm hover:text-[#3F72AF] transition-colors duration-200"
            >
              tjayeleria9@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-[#F9F7F7]/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#F9F7F7]/25 text-sm flex items-center gap-1.5">
            &copy; {new Date().getFullYear()} Tjay ELeria. Made with
            <FiHeart size={12} className="text-[#3F72AF]" />
            and clean code.
          </p>

          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-xl bg-[#3F72AF]/20 border border-[#3F72AF]/30 flex items-center justify-center text-[#3F72AF] hover:bg-[#3F72AF]/30 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
