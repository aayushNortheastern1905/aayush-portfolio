import { useKeyboardNav } from './hooks/useKeyboardNav';
import { Nav } from './components/Nav';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Recommendations } from './components/Recommendations';
import { Writing } from './components/Writing';
import { Footer } from './components/Footer';

export default function App() {
  useKeyboardNav();

  return (
    <div className="antialiased min-h-screen font-mono">
      <div className="max-w-4xl mx-auto px-4 pt-4 pb-32">
        <Nav />
        <Header />
        <Projects />
        <Experience />
        <Education />
        <Skills />
        <Recommendations />
        <Writing />
      </div>
      <Footer />
    </div>
  );
}
