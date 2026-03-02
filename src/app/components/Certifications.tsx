import { motion } from "motion/react";

interface Certification {
  title: string;
  issuer: string;
  issued: string;
  link: string;
}

const certifications: Certification[] = [ 
  {
    title: "Data Analysis with Python",
    issuer: "Cognitive Class",
    issued: "Jan 2026",
    link: "https://courses.cognitiveclass.ai/certificates/30a52dc6a9344bfcb0b49da17ccf9556", 
  },
  {
    title: "Data Analyst",
    issuer: "NeoRoadmap",
    issued: "Jan 2026",
    link: "https://oneroadmap.io/skills/da/certificate/CERT-77BC8621", 
  },
  {
    title: "Deloitte Australia – Technology Job Simulation",
    issuer: "Forage",
    issued: "Jan 2026",
    link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_690a247387c4783a0b113fc1_1767248037019_completion_certificate.pdf",
  },
  {
    title: "Power BI Micro Course",
    issuer: "SkillCourse",
    issued: "Jan 2026",
    link: "https://exam.skillcourse.in/student/view_certificate?uid=SC-72CB9BDB1C",
  },
  {
    title: "Data Analytics for Beginners",
    issuer: "IBM SkillsBuild",
    issued: "Dec 2025",
    link: "https://skills.yourlearning.ibm.com/certificate/share/cbdf0180f8ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgIm9iamVjdElkIiA6ICJVUkwtWldBU0RWUFBGRlciLAogICJsZWFybmVyQ05VTSIgOiAiNTg5NzM4MVJFRyIKfQba9f5a852d-10",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    issued: "Jan 2026",
    link: "https://www.hackerrank.com/certificates/e9c73620f316",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
    issued: "Dec 2025",
    link: "https://www.hackerrank.com/certificates/533b2087e804",
  },
  {
    title: "Tata – GenAI Powered Data Analytics Job Simulation",
    issuer: "Forage",
    issued: "Dec 2025",
    link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_690a247387c4783a0b113fc1_1766407809306_completion_certificate.pdf",
  },
  {
    title: "What is Generative AI?",
    issuer: "LinkedIn Learning",
    issued: "Jan 2025",
    link: "https://www.linkedin.com/learning/certificates/ec2d131e287811a81552558b268005b4af02f6bc3225a3885b6f3b899b61693f?trk=share_certificate",
  },
];

export function Certifications() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="certifications">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          Certifications
        </h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 border-2 border-blue-500 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 shadow-lg shadow-blue-500/20"
        >
          <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-2">
            🎓 Google Data Analytics Professional Certificate
          </h3>

          <p className="text-slate-300 mb-3">
            Issued by Google via Coursera • Feb 2026
          </p>

          <p className="text-slate-400 text-sm mb-4">
            Completed an 8-course professional program covering data cleaning,
            analysis, visualization, SQL, R, and business problem solving.
          </p>

          <a
            href="YOUR-COURSERA-CERTIFICATE-LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-sm transition"
          >
            View Professional Credential
          </a>
        </motion.div>

        <div className="space-y-5">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-slate-800 bg-slate-900 rounded-lg p-5"
            >
              <div>
                <h3 className="text-lg font-semibold">{cert.title}</h3>
                <p className="text-slate-400 text-sm">
                  {cert.issuer} • Issued {cert.issued}
                </p>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm px-4 py-2 border border-slate-700 rounded-md text-white hover:bg-slate-800 transition"
              >
                View Credential
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
