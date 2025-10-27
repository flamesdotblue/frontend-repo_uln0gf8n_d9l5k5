import { motion } from 'framer-motion';
import { Rocket, Cpu, Brain, Shield } from 'lucide-react';

const programs = [
  {
    icon: Rocket,
    title: 'Foundations of AI',
    desc: 'Math, Python, and core ML concepts for absolute clarity and confidence.',
    badge: 'Beginner',
  },
  {
    icon: Cpu,
    title: 'Applied Machine Learning',
    desc: 'End-to-end projects: data, models, evaluation, and deployment best practices.',
    badge: 'Intermediate',
  },
  {
    icon: Brain,
    title: 'Generative AI & LLMs',
    desc: 'Prompting, fine-tuning, RAG, and building AI apps with modern stacks.',
    badge: 'Advanced',
  },
];

const tools = [
  {
    icon: Brain,
    title: 'AI Study Coach',
    desc: 'Personalized guidance that adapts to each learner’s pace and style.',
  },
  {
    icon: Shield,
    title: 'Integrity Guard',
    desc: 'Ethical frameworks and safety rails for responsible AI use in class.',
  },
  {
    icon: Cpu,
    title: 'Lab Sandbox',
    desc: 'Hands-on playground with datasets, notebooks, and model dashboards.',
  },
];

export default function ProgramsTools() {
  return (
    <section id="programs" className="relative py-20 bg-gradient-to-b from-white via-blue-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            Programs built for every learner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-slate-600"
          >
            Curated, outcomes-first tracks with friendly pacing, mentorship, and real projects.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ icon: Icon, title, desc, badge }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white grid place-items-center shadow-md">
                  <Icon size={22} />
                </div>
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 rounded-full px-2 py-1">{badge}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <div id="tools" className="mt-20 text-center max-w-2xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-3xl font-extrabold text-slate-900"
          >
            AI-powered learning tools
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-slate-600"
          >
            Built-in assistants and labs make every session interactive and effective.
          </motion.p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white grid place-items-center shadow-md">
                <Icon size={22} />
              </div>
              <h4 className="mt-5 text-lg font-semibold text-slate-900">{title}</h4>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
