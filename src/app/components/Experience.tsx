import { motion } from "motion/react";

const experiences = [
  {
    role: "AI & Automation Intern",
    company: "Actionfi Technologies",
    duration: "Mar 2025 - May 2025",
    description:
      "Worked on AI-driven solutions, data preprocessing, and model integration. Gained hands-on experience with real-world AI applications."
  }
];

export function Experience() {
  return (
    <section className="py-20 px-4 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Experience
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-slate-800 rounded-xl p-6 bg-slate-900"
            >
              <h3 className="text-xl font-semibold">
                {exp.role}
              </h3>
              <p className="text-slate-400">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-slate-300 mt-3">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
