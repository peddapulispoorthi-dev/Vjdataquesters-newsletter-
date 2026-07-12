// src/components/events/Carousel3D.jsx
import { useEffect, useState } from 'react';
import { EventCard3D } from './EventCard3D';

export const Carousel3D = ({ events, onRegister, onViewDetails }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [events]);

  const handleNext = () => setActiveIndex(prev => Math.min(events.length - 1, prev + 1));
  const handlePrev = () => setActiveIndex(prev => Math.max(0, prev - 1));

  return (
    <div className="relative w-full h-[650px] flex flex-col items-center justify-center overflow-hidden px-4 [perspective:2000px]">
      <div className="absolute inset-0 z-10 flex">
        <div className="relative w-[20%] h-full cursor-w-resize group" onClick={handlePrev}>
          <div className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="animate-pulse text-white/70">❮</span>
          </div>
          <div className="absolute left-0 top-0 w-[40%] h-full bg-gradient-to-r from-cyan-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
        <div className="w-[60%] h-full pointer-events-none" />
        <div className="relative w-[20%] h-full cursor-e-resize group" onClick={handleNext}>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="animate-pulse text-white/70">❯</span>
          </div>
          <div className="absolute right-0 top-0 w-[40%] h-full bg-gradient-to-l from-cyan-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="relative z-20 w-[400px] h-[550px] [transform-style:preserve-3d]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none transition-opacity duration-1000" style={{ opacity: activeIndex !== null ? 1 : 0 }} />

        {events.map((event, index) => {
          const isActive = index === activeIndex;
          const offset = index - activeIndex;

          return (
            <div
              key={event.id}
              className={`absolute transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] w-[400px] ${isActive ? 'pointer-events-auto animate-wiggle' : 'pointer-events-none'}`}
              style={{
                transform: `translateX(${offset * 60}px) scale(${1 - Math.abs(offset) * 0.1})`,
                zIndex: events.length - Math.abs(offset),
                opacity: Math.abs(offset) > 2 ? 0 : 1 - Math.abs(offset) * 0.4,
                filter: isActive ? 'blur(0px) brightness(1)' : 'blur(4px) brightness(0.5)',
              }}
            >
              <EventCard3D
                event={event}
                onClick={() => onViewDetails(event)}
                onRegister={() => onRegister(event)}
                isActive={isActive}
              />
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-10 flex gap-3 z-30">
        {events.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? 'w-8 bg-cyan' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};