import { motion } from 'framer-motion';
import { Users, User, GraduationCap } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Lina Park',
    role: 'ML Researcher',
  },
  {
    name: 'Samir Rao',
    role: 'Data Scientist',
  },
  {
    name: 'Elena García',
    role: 'AI Product Lead',
  },
];

export default function AdmissionsFacultyPortal() {
  return (
    <section className="relative py-20" aria-label="Admissions, Faculty and Portal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="admissions" className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-blue-50 p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 text-blue-700 bg-blue-50 rounded-full px-3 py-1 text-sm font-semibold">
              <Users size={16} /> Admissions
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">Join the next cohort</h3>
            <p className="mt-2 text-slate-600">Rolling applications. Simple steps and supportive guidance to get started.</p>

            <div className="mt-6 grid sm:grid-cols-3 gap-3 text-sm">
              {['Apply', 'Interview', 'Enroll'].map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="rounded-2xl border border-slate-200 bg-white p-4"
                >
                  <div className="text-slate-900 font-semibold">{i + 1}. {step}</div>
                  <div className="text-slate-500 mt-1">A quick, friendly process.</div>
                </motion.div>
              ))}
            </div>

            <a
              href="#portal"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 px-6 py-3 text-white font-semibold shadow hover:shadow-blue-500/30 transition-shadow"
            >
              Start Application
            </a>
          </div>

          <div id="faculty" className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="inline-flex items-center gap-2 text-indigo-700 bg-indigo-50 rounded-full px-3 py-1 text-sm font-semibold">
              <GraduationCap size={16} /> Faculty
            </div>
            <h3 className="mt-4 text-2xl font-bold text-slate-900">Meet our mentors</h3>
            <p className="mt-2 text-slate-600">Industry experts and researchers guide you with care.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              {faculty.map((f) => (
                <div key={f.name} className="rounded-2xl border border-slate-200 p-4 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white grid place-items-center font-bold">
                    {f.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="mt-3 font-semibold text-slate-900">{f.name}</div>
                  <div className="text-sm text-slate-500">{f.role}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="portal" className="mt-12 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-indigo-900 p-8 text-white overflow-hidden">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(600px_200px_at_20%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(400px_200px_at_80%_120%,rgba(99,102,241,0.2),transparent)]" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 text-sky-300 bg-white/10 backdrop-blur rounded-full px-3 py-1 text-sm font-semibold">
              <User size={16} /> Student Portal
            </div>
            <h3 className="mt-4 text-2xl font-bold">Login to continue</h3>
            <p className="mt-1 text-white/70">Access your classes, projects, and progress dashboard.</p>

            <form className="mt-6 grid sm:grid-cols-3 gap-3">
              <input
                type="email"
                required
                placeholder="Email address"
                className="sm:col-span-1 col-span-3 rounded-xl bg-white text-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400"
              />
              <input
                type="password"
                required
                placeholder="Password"
                className="sm:col-span-1 col-span-3 rounded-xl bg-white text-slate-900 px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400"
              />
              <button
                type="submit"
                className="sm:col-span-1 col-span-3 rounded-xl bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-500 px-4 py-3 font-semibold text-white shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
