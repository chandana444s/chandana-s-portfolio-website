import { GraduationCap, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

const education = [
  {
    degree: 'Master of Computer Application',
    institution: 'Chinmaya Institute of Technology Kannur',
    period: '2023 - 2025',
    description: 'Specialized in Artificial Intelligence and Machine Learning.'
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'IHRD College of Applied Science Thamarassery',
    period: '2020 - 2023',
    description: 'Focus on software engineering and web technologies.'
  }
];

export function Education() {
  return (
    <section id="education" className="py-20 px-4 bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">Education</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Academic background and continuous learning journey in technology.
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.2
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="relative"
            >
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 md:p-8 hover:border-blue-500/50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0"
                      >
                        <GraduationCap className="w-6 h-6 text-white" />
                      </motion.div>
                      <div>
                        <h3 className="text-2xl text-white mb-1">{edu.degree}</h3>
                        <p className="text-lg text-blue-400">{edu.institution}</p>
                      </div>
                    </motion.div>
                  </div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-2 text-slate-400"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </motion.div>
                </div>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="text-slate-300 mb-4"
                >
                  {edu.description}
                </motion.p>

                {edu.achievements && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex flex-wrap gap-2"
                  >
                    {edu.achievements.map((achievement, achIndex) => (
                      <motion.span
                        key={achIndex}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: 0.6 + index * 0.1 + achIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-sm border border-slate-700"
                      >
                        {achievement}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </div>
              
              {/* Connecting line for timeline effect */}
              {index < education.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="hidden md:block absolute left-6 top-full h-8 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 origin-top"
                  style={{ transform: 'translateX(-50%)' }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}