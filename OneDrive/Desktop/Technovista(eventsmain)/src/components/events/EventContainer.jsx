import { useRef, useState } from 'react';
import { allEvents } from '../../data/eventData';
import { DaySelector } from './DaySelector';
import { Carousel3D } from './Carousel3D';
import { RegistrationModal } from './RegistrationModal';
import { EventDetailsModal } from './EventDetailsModal';

export const EventContainer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeDay, setActiveDay] = useState(1);

  const dayRefs = {
    1: useRef(null),
    2: useRef(null),
    3: useRef(null),
  };

  const scrollToDay = (day) => {
    setActiveDay(day);
    dayRefs[day].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="relative w-full">
      <div className="sticky top-0 z-50 flex justify-center py-6 backdrop-blur-md bg-[#0a0d12]/90 border-b border-white/5">
        <DaySelector selectedDay={activeDay} onSelectDay={scrollToDay} />
      </div>

      <div className="py-10">
        {[1, 2, 3].map((day) => (
          <section
            key={day}
            ref={dayRefs[day]}
            className="scroll-mt-24 px-4 py-16 sm:py-24 flex flex-col items-center justify-center"
          >
            <h2 className="text-5xl font-black text-white mb-10 tracking-[0.2em] opacity-50">DAY 0{day}</h2>

            <Carousel3D
              events={allEvents.filter((event) => event.day === day)}
              onViewDetails={(event) => {
                setSelectedEvent(event);
                setActiveModal('details');
              }}
              onRegister={(event) => {
                setSelectedEvent(event);
                setActiveModal('register');
              }}
            />
          </section>
        ))}
      </div>

      {activeModal === 'register' && selectedEvent && (
        <RegistrationModal event={selectedEvent} onClose={() => setActiveModal(null)} />
      )}

      {activeModal === 'details' && selectedEvent && (
        <EventDetailsModal event={selectedEvent} onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
};