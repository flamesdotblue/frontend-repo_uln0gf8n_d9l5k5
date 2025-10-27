import { useState } from 'react';
import { Menu, X, GraduationCap, User } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Admissions', href: '#admissions' },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Tools', href: '#tools' },
    { label: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-500 to-cyan-400 grid place-items-center text-white shadow-lg shadow-blue-500/30">
              <GraduationCap size={20} />
            </div>
            <div className="leading-tight">
              <div className="font-semibold text-slate-900">
                Flame.Blue AI School
              </div>
              <div className="text-xs text-slate-500 -mt-0.5">Learn the future</div>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#portal"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:shadow-blue-500/30 transition-shadow"
            >
              <User size={16} /> Student Portal
            </a>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#portal"
              onClick={() => setOpen(false)}
              className="block text-center px-3 py-2 rounded-lg bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white font-semibold"
            >
              <div className="inline-flex items-center gap-2 justify-center">
                <User size={16} /> Student Portal
              </div>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
