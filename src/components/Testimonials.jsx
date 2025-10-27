import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Aarav’s Mom',
    text: 'My son’s confidence in math and coding has skyrocketed. The mentors are thoughtful and the AI tools make practice fun and effective.',
    rating: 5,
  },
  {
    name: 'Mia’s Dad',
    text: 'The projects are practical and engaging. She built a chatbot in weeks and now leads her school’s tech club!',
    rating: 5,
  },
  {
    name: 'Leo’s Guardian',
    text: 'A safe, supportive environment. The platform adapts to his pace, and the community events are wonderful.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-20 bg-gradient-to-b from-white via-indigo-50/40 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900"
          >
            Parents love the journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="mt-4 text-slate-600"
          >
            Real stories from families who trust Flame.Blue to spark curiosity and mastery.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="text-blue-600" size={20} />
              <p className="mt-4 text-slate-700">{t.text}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="font-semibold text-slate-900">{t.name}</div>
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
