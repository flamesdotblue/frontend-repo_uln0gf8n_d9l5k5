import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProgramsTools from './components/ProgramsTools';
import Testimonials from './components/Testimonials';
import AdmissionsFacultyPortal from './components/AdmissionsFacultyPortal';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <ProgramsTools />
        <Testimonials />
        <AdmissionsFacultyPortal />
      </main>
      <footer className="border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-500">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} Flame.Blue AI School. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#programs" className="hover:text-slate-700">Programs</a>
              <a href="#admissions" className="hover:text-slate-700">Admissions</a>
              <a href="#faculty" className="hover:text-slate-700">Faculty</a>
              <a href="#portal" className="hover:text-slate-700">Student Portal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
