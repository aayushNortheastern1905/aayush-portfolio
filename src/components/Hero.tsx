import { ChevronDown } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';
import { useCounterAnimation } from '../hooks/useCounterAnimation';
import { metrics } from '../data/metrics';
import { BookCall } from './BookCall';

export function Hero() {
  const currentRole = useTypewriter();
  const { countersRef } = useCounterAnimation();

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-base pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          <div className="space-y-8 sm:space-y-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-primary">
              <span
                className="block text-secondary min-h-[1.2em] break-words"
                style={{ fontFamily: 'Monaco, "SF Mono", "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}
              >
                {currentRole}
                <span className="animate-pulse ml-2 text-primary">|</span>
              </span>
            </h1>
            <div className="space-y-6">
              <p className="text-xl sm:text-2xl lg:text-3xl font-light text-primary max-w-4xl mx-auto leading-relaxed">
                Founding Engineer at VoiceERP building the world's first voice AI dispatcher
              </p>
              <p className="text-base sm:text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed">
                Building scalable systems, AI platforms, and community-driven applications that serve thousands of users worldwide
              </p>
            </div>
          </div>

          <div ref={countersRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-16 sm:pt-20">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="counter text-3xl sm:text-4xl lg:text-5xl font-light text-primary">
                  0{metric.suffix}
                </div>
                <div className="text-sm sm:text-base text-primary font-medium">{metric.label}</div>
                <div className="text-xs sm:text-sm text-muted hidden sm:block max-w-32 mx-auto leading-relaxed">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12 sm:pt-16">
            <a
              href="#projects"
              className="px-8 sm:px-10 py-3 sm:py-4 bg-accent text-accent-fg hover:opacity-80 transition-all duration-300 text-sm font-medium rounded-lg text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 sm:px-10 py-3 sm:py-4 border border-border text-primary hover:border-border-hover hover:bg-card transition-all duration-300 text-sm font-medium rounded-lg text-center"
            >
              Get in Touch
            </a>
            <BookCall />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <ChevronDown className="w-5 h-5 text-muted" />
      </div>
    </section>
  );
}
