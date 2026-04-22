import { useState, useEffect, useRef, useCallback } from 'react';
import { metrics } from '../data/metrics';

export function useCounterAnimation() {
  const [countersAnimated, setCountersAnimated] = useState(false);
  const countersRef = useRef<HTMLDivElement | null>(null);

  const animateCounters = useCallback(() => {
    if (countersAnimated) return;
    setCountersAnimated(true);

    const counters = countersRef.current?.querySelectorAll('.counter');
    counters?.forEach((counter: Element, index: number) => {
      const target = metrics[index].animatedValue;
      const suffix = metrics[index].suffix;
      let current = 0;
      const increment = target / 100;
      const stepTime = 2000 / 100;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        if (counter instanceof HTMLElement) {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    });
  }, [countersAnimated]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) observer.observe(countersRef.current);
    return () => observer.disconnect();
  }, [countersAnimated, animateCounters]);

  return { countersRef, countersAnimated };
}
