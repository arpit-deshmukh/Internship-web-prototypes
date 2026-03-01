import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Phone, Linkedin, Twitter, Github, Sparkles } from 'lucide-react';
import { cn } from '../utils/cn';
import Button from '../components/ui/Button';

const Contact = () => {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    { icon: <Mail size={20} />, label: "Direct Email", value: "julian@vanceglobal.com", href: "mailto:julian@vanceglobal.com" },
    { icon: <Phone size={20} />, label: "Office Line", value: "+1 (555) 789-0123", href: "tel:+15557890123" },
    { icon: <MapPin size={20} />, label: "HQ Location", value: "Manhattan, New York", href: "#" },
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, href: "#", color: "hover:text-blue-600" },
    { icon: <Twitter size={24} />, href: "#", color: "hover:text-sky-400" },
    { icon: <Github size={24} />, href: "#", color: "hover:text-black dark:hover:text-white" },
  ];

  return (
    <section id="contact" className="py-12 container mx-auto px-6 relative">
      <div className="section-card">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left: Contact Info */}
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 rounded-full bg-primary-100/50 dark:bg-primary-900/40 border border-border/50 text-[10px] font-black uppercase tracking-[0.3em] text-primary-600 dark:text-primary-300">
                Strategic Intake
              </div>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
                Let's architect <br />
                <span className="text-primary-600 dark:text-primary-400">your next phase.</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed max-w-lg font-medium">
                I am selective about the engagements I take on. Whether you are looking for long-term advisory or a high-impact sprint, let's start with a discovery form.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a 
                  key={info.label} 
                  href={info.href} 
                  className="flex items-center space-x-6 p-4 rounded-2xl hover:bg-muted transition-colors border border-transparent hover:border-border/50 transition-all duration-300 group"
                >
                  <div className="p-4 rounded-xl bg-muted group-hover:bg-primary-500 group-hover:text-white transition-all duration-300 shadow-sm shadow-black/5">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-black text-foreground/30 tracking-[0.4em] mb-1">{info.label}</p>
                    <p className="text-lg font-black tracking-tight">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-10 flex items-center space-x-10 text-foreground/40 border-t border-border/40">
              <div className="flex space-x-6">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} className={cn("transition-all duration-300 hover:scale-125", social.color)}>
                    {social.icon}
                  </a>
                ))}
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em]">Follow Julian Vance</p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-2xl space-y-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-foreground/40 uppercase tracking-widest ml-1">Full Name</label>
                    <input 
                      required 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-muted/30 border border-border/40 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold tracking-tight"
                      placeholder="Alex Mercer" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-foreground/40 uppercase tracking-widest ml-1">Business Email</label>
                    <input 
                      required 
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-muted/30 border border-border/40 rounded-2xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold tracking-tight"
                      placeholder="alex@company.com" 
                    />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-foreground/40 uppercase tracking-widest ml-1">Consultation Intent</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-muted/30 border border-border/40 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold tracking-tight appearance-none"
                  >
                    <option>Strategic Advisory</option>
                    <option>SaaS Scaling Project</option>
                    <option>AI Operations Audit</option>
                    <option>Other / General</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black text-foreground/40 uppercase tracking-widest ml-1">Engagement Details</label>
                  <textarea 
                    required 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-muted/30 border border-border/40 rounded-2xl px-6 py-5 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all font-bold tracking-tight resize-none"
                    placeholder="Briefly describe your current business bottleneck." 
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full py-6 rounded-[1.5rem] text-lg font-black tracking-tight shadow-xl shadow-primary-500/20"
                  disabled={status === 'loading' || status === 'success'}
                >
                  {status === 'loading' ? (
                    <motion.div 
                      animate={{ rotate: 360 }} 
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : status === 'success' ? (
                    <span className="flex items-center"><CheckCircle size={20} className="mr-2" /> Request Sent</span>
                  ) : (
                    <span className="flex items-center">Submit Intake Form <Sparkles size={20} className="ml-2" /></span>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
