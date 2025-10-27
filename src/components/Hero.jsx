import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-center px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative">
        <div className="relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white"
          >
            Learn AI with confidence
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-indigo-400 to-blue-300"> at Flame.Blue AI School</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-lg text-slate-300 max-w-xl"
          >
            A modern learning experience that blends human mentorship with AI-powered tools. Friendly curves, smooth interactions, and a fresh blue gradient theme keep it clean, youthful, and futuristic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#programs"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-indigo-500 to-blue-500 px-6 py-3 text-white font-semibold shadow-lg shadow-sky-500/20 hover:shadow-sky-500/30 transition-shadow"
            >
              Explore Programs
            </a>
            <a
              href="#portal"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-white font-semibold backdrop-blur hover:bg-white/10"
            >
              Student Portal
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-md"
          >
            {[
              ['10K+', 'Learners'],
              ['150+', 'Mentors'],
              ['97%', 'Satisfaction'],
            ].map(([kpi, label]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 text-center">
                <div className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
                  {kpi}
                </div>
                <div className="text-xs text-slate-300">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative h-[400px] sm:h-[500px] lg:h-[560px] rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
