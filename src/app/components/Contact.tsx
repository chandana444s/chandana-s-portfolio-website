import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'motion/react';

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Get In Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-white">Let's Connect</h3>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'chandanass4444@gmail.com', href: 'mailto:chandanass4444@gmail.com' },
                { icon: Github, label: 'GitHub', value: 'github.com/chandana', href: 'https://github.com/chandana444s' },
                { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/chandana', href: 'https://www.linkedin.com/in/chandana-s-821a502b2/' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-3"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5 text-blue-400" />
                    </motion.div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <a 
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-slate-200 hover:text-blue-400"
                      >
                        {item.value}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}