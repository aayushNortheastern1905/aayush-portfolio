import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Recommendations } from './components/Recommendations';
import { Writing } from './components/Writing';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function Portfolio() {
  return (
    <div
      className="min-h-screen bg-base text-primary relative"
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Display", Inter, system-ui, sans-serif',
        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(128,128,128,0.15) 1px, transparent 0)',
        backgroundSize: '20px 20px',
      }}
    >
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Recommendations />
      <Writing />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  );
}
