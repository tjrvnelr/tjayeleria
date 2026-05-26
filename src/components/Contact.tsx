import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiSend, FiCheck } from 'react-icons/fi';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: FiPhone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: FiMapPin, label: 'Location', value: 'San Francisco, CA', href: null },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-28 bg-[#112D4E] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-96 h-96 rounded-full bg-[#3F72AF]/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-[#3F72AF] text-sm font-semibold uppercase tracking-widest">Get In Touch</span>
          <h2 className="mt-2 text-4xl md:text-5xl font-bold text-[#F9F7F7] tracking-tight">
            Let's Work Together
          </h2>
          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-[#3F72AF] to-[#F9F7F7]/30 rounded-full mx-auto" />
          <p className="mt-5 text-[#F9F7F7]/50 max-w-lg mx-auto text-base">
            Have a project in mind or want to collaborate? I'd love to hear from you. Let's build something great together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="text-[#F9F7F7] font-semibold text-xl mb-2">Contact Information</h3>
              <p className="text-[#F9F7F7]/40 text-sm leading-relaxed">
                Open to freelance opportunities, full-time roles, and interesting collaborations. Response time is usually within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-4 rounded-xl bg-[#F9F7F7]/5 border border-[#F9F7F7]/8 hover:border-[#3F72AF]/30 transition-all duration-300 group">
                  <div className="w-10 h-10 rounded-lg bg-[#3F72AF]/20 flex items-center justify-center shrink-0 group-hover:bg-[#3F72AF]/30 transition-colors duration-300">
                    <Icon size={16} className="text-[#3F72AF]" />
                  </div>
                  <div>
                    <div className="text-[#F9F7F7]/30 text-xs mb-0.5">{label}</div>
                    {href ? (
                      <a href={href} className="text-[#F9F7F7]/70 text-sm hover:text-[#3F72AF] transition-colors duration-200">
                        {value}
                      </a>
                    ) : (
                      <span className="text-[#F9F7F7]/70 text-sm">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xl bg-[#3F72AF]/10 border border-[#3F72AF]/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[#F9F7F7]/70 text-sm font-medium">Available for work</span>
              </div>
              <p className="text-[#F9F7F7]/40 text-xs leading-relaxed">
                Currently accepting new projects and full-time opportunities starting Q3 2026.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <InputField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="John Smith"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <InputField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Project collaboration"
                value={form.subject}
                onChange={handleChange}
                required
              />
              <div>
                <label className="block text-[#F9F7F7]/50 text-xs font-medium uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3.5 bg-[#F9F7F7]/5 border border-[#F9F7F7]/10 rounded-xl text-[#F9F7F7] placeholder-[#F9F7F7]/25 text-sm focus:outline-none focus:border-[#3F72AF]/60 focus:bg-[#F9F7F7]/8 transition-all duration-300 resize-none leading-relaxed"
                />
              </div>

              <motion.button
                type="submit"
                disabled={submitting || submitted}
                className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base transition-all duration-300 ${
                  submitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#3F72AF] text-[#F9F7F7] hover:bg-[#3F72AF]/90 shadow-lg shadow-[#3F72AF]/30 hover:shadow-[#3F72AF]/50'
                } disabled:opacity-70`}
                whileHover={!submitting && !submitted ? { scale: 1.02, y: -1 } : {}}
                whileTap={!submitting && !submitted ? { scale: 0.98 } : {}}
              >
                {submitted ? (
                  <>
                    <FiCheck size={18} />
                    Message Sent!
                  </>
                ) : submitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-[#F9F7F7]/30 border-t-[#F9F7F7] rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function InputField({
  label, name, type, placeholder, value, onChange, required,
}: {
  label: string; name: string; type: string; placeholder: string;
  value: string; onChange: React.ChangeEventHandler<HTMLInputElement>; required?: boolean;
}) {
  return (
    <div>
      <label className="block text-[#F9F7F7]/50 text-xs font-medium uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-3.5 bg-[#F9F7F7]/5 border border-[#F9F7F7]/10 rounded-xl text-[#F9F7F7] placeholder-[#F9F7F7]/25 text-sm focus:outline-none focus:border-[#3F72AF]/60 focus:bg-[#F9F7F7]/8 transition-all duration-300"
      />
    </div>
  );
}
