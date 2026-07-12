import { EventContainer } from './components/events/EventContainer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0d12] text-white selection:bg-cyan/30">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan/10 via-transparent to-transparent pointer-events-none"></div>

      <header className="relative z-10 pt-16 pb-8 text-center flex flex-col items-center">
        <h1 className="text-6xl font-black uppercase tracking-[0.3em] mb-8">
          TECHNOVISTA 2K26
        </h1>

        <div className="relative group w-full max-w-sm">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>

          <img
            src="poster.png"
            alt="Technovista Poster"
            className="relative w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </header>

      <main className="relative z-10 mt-10">
        <EventContainer />
      </main>
    </div>
  );
}

export default App;