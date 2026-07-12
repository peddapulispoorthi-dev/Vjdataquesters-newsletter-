// src/components/events/DaySelector.jsx
export const DaySelector = ({ onSelectDay, selectedDay }) => {
  const dayMetadata = {
    1: { title: 'KICKOFF', date: 'AUG 01', dayName: 'FRI' },
    2: { title: 'THE GRIND', date: 'AUG 02', dayName: 'SAT' },
    3: { title: 'SHOWDOWN', date: 'AUG 03', dayName: 'SUN' },
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 sm:gap-4 w-full px-4">
      {[1, 2, 3].map((day) => {
        const isActive = selectedDay === day;
        const meta = dayMetadata[day];

        return (
          <button
            key={day}
            onClick={() => onSelectDay(day)}
            className={`w-full sm:w-[200px] p-4 rounded-xl border text-left transition-all duration-300 ${
              isActive
                ? 'bg-[#12161e] border-cyan'
                : 'bg-[#12161e] border-white/10 hover:border-white/30'
            }`}
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan/70">Day 0{day}</div>
            <div className="mt-1 text-lg font-black uppercase text-white">{meta.title}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/50">
              {meta.date}, {meta.dayName}
            </div>
          </button>
        );
      })}
    </div>
  );
};