import { BarChart3, Database, Settings } from "lucide-react";
import { motion } from "motion/react";

const skillCategories = [
  {
    icon: BarChart3,
    title: "Data Analysis & Visualization",
    skills: [
      "Data Cleaning & Validation",
      "Exploratory Data Analysis (EDA)",
      "Microsoft Excel",
      "Power BI",
      "Data Visualization",
      "KPI & Dashboard Reporting",
    ],
  },
  {
    icon: Database,
    title: "Data & Querying",
    skills: [
      "SQL",
      "Joins & Subqueries",
      "Data Aggregation",
      "Data Modeling",
      "Relational Databases",
      "Data Accuracy & Consistency",
    ],
  },
  {
    icon: Settings,
    title: "Tools, Automation & Workflow",
    skills: [
      "Python (Pandas, NumPy)",
      "Workflow Documentation",
      "Process Optimization",
      "Data Verification & Testing",
      "Stakeholder Coordination",
      "Reporting & Insights",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A data-focused skill set built through academic learning,
            certifications, and hands-on project experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index === 0 ? -50 : index === 2 ? 50 : 0,
                  y: index === 1 ? 50 : 0,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="bg-slate-950 border border-slate-800 rounded-lg p-8 shadow-sm hover:shadow-md hover:shadow-blue-500/20 transition-shadow"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>

                <h3 className="text-2xl mb-4 text-white">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.3 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-slate-800 text-slate-200 rounded-full text-sm"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
