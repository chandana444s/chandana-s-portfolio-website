import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Certifications } from "./components/Certifications";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { motion } from "motion/react";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <Hero />
      <About />
      <Experience />
      <Certifications />
      <Projects />
      <Skills />
      <Education />
      <Contact />

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-black text-white py-8 px-4 border-t border-slate-800"
      >
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-500">
            © 2024 Chandana S. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </motion.footer>
    </div>
  );
};

export default App;
