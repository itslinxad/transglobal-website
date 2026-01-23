import { useEffect, useState } from 'react';
import type { Stat } from '../../types';

const stats: Stat[] = [
  { id: '1', value: 25, suffix: '+', label: 'Years in Business', icon: 'fa-calendar-alt' },
  { id: '2', value: 10000, suffix: '+', label: 'Shipments Delivered', icon: 'fa-box' },
  { id: '3', value: 50, suffix: '+', label: 'Countries Served', icon: 'fa-globe' },
  { id: '4', value: 5000, suffix: '+', label: 'Satisfied Clients', icon: 'fa-users' },
];

const StatsSection = () => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.value / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setCounters((prev) => {
                const newCounters = [...prev];
                newCounters[index] = Math.floor(current);
                return newCounters;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [hasAnimated]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  };

  return (
    <section id="stats-section" className="py-16 md:py-20 bg-primary text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={stat.id} className="text-center">
              <div className="mb-3">
                <i className={`fas ${stat.icon} text-4xl text-secondary`}></i>
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {formatNumber(counters[index])}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
