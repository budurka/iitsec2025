const { useState, useEffect } = React;

// --- DATA ---
const dayData = [/* ... existing dayData ... */];
const techData = [
  { id: "nautical", name: "NAUTICAL", summary: "Accelerate training development with GenAI.", details: "Uses RAG and Chain-of-Thought prompting to reduce Speed to the Fleet." },
  { id: "whitecell", name: "White Cell In A Box", summary: "Portable assessment and AAR solution.", details: "Captures performance data for live and virtual exercises." },
  { id: "propel", name: "PROPEL", summary: "Tactical Action Officer precision learning.", details: "Data-driven scoring and personalized learning recommendations." },
  { id: "jitmma", name: "JITMMA", summary: "Personnel-to-mission matching.", details: "Matches personnel to tasks in dynamic environments." },
  { id: "forcegen", name: "FORCEGEN", summary: "AI-enabled training scenario generation.", details: "Rapidly generates mission-relevant scenarios using AI." },
  { id: "ai-wargaming", name: "AI for Wargaming", summary: "Kinetic and cognitive warfare scenarios.", details: "Delivers doctrinally aligned scenarios at machine speed." },
  { id: "fitforce", name: "FitForce", summary: "Offline-capable fitness platform.", details: "Scientific strength and conditioning practices for readiness." }
];
const internRoles = [
  { title: "Scientist Intern", location: "Remote", division: "Performance Augmentation Systems" },
  { title: "Software Engineer Intern", location: "Dayton, OH", division: "Performance Augmentation Systems" },
  { title: "AI Engineer Intern", location: "Remote", division: "Intelligent Performance Analytics" },
  { title: "Graphic Artist Intern", location: "Multi-Location", division: "Strategic Communications" }
];

const App = () => {
  const [activePanel, setActivePanel] = useState(null);
  const [activeDay, setActiveDay] = useState("mon");

  useEffect(() => {
    let timer;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => setActivePanel(null), 60000);
    };
    ['click', 'touchstart', 'mousemove'].forEach(e => window.addEventListener(e, resetTimer));
    resetTimer();
    return () => ['click', 'touchstart', 'mousemove'].forEach(e => window.removeEventListener(e, resetTimer));
  }, []);

  const Panel = ({ id, title, isOpen, children }) => (
    <div className={`fixed inset-0 z-50 flex items-end justify-center transition-all duration-500 ${isOpen ? 'bg-black/80 opacity-100' : 'bg-transparent opacity-0 pointer-events-none'}`}>
      <div className={`bg-[#0B1120] w-full max-w-4xl h-[85vh] rounded-t-3xl border-t-4 border-cyan-500 p-8 shadow-2xl transform transition-transform duration-500 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
          <h2 className="text-2xl font-black text-cyan-400 uppercase tracking-tighter">{title}</h2>
          <button onClick={() => setActivePanel(null)} className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-full font-bold transition-colors">Close ✕</button>
        </div>
        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scroll">{children}</div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-6 max-w-4xl mx-auto flex flex-col">
      <header className="flex justify-between items-start mb-10">
        <div className="space-y-2">
          <img src="2025-Aptima-Logomark.png" className="h-14" alt="Logo" />
          <h1 className="text-4xl font-black italic tracking-tighter">APTIMA @ I/ITSEC</h1>
          <p className="text-cyan-400 text-xs font-bold tracking-[0.2em] uppercase">The Future of Human Performance</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-3 rounded-2xl flex items-center gap-3">
          <img src="qr-aptima-website.jpeg" className="w-16 h-16 rounded bg-white p-1" />
          <p className="text-[10px] font-bold uppercase leading-tight opacity-70 w-20">Scan for Solutions</p>
        </div>
      </header>

      <div className="space-y-4 flex-1">
        <button onClick={() => setActivePanel('events')} className="w-full text-left p-8 rounded-2xl bg-gradient-to-r from-orange-600 to-orange-500 shadow-2xl border-t border-white/20 transition-transform active:scale-95">
          <div className="text-3xl font-black uppercase tracking-tighter">Daily Events</div>
          <p className="opacity-90 font-medium">Papers, Panels, & Special Presentations</p>
        </button>

        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setActivePanel('tech')} className="tile-secondary">Booth Demos</button>
          <button onClick={() => setActivePanel('intern')} className="tile-secondary">2026 Internships</button>
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-video relative group">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity">
            <source src="Aptima Intro-Promo Oct 2025.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <Panel id="events" title="Daily Schedule" isOpen={activePanel === 'events'}>
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4 no-scrollbar">
          {dayData.map(d => (
            <button key={d.id} onClick={() => setActiveDay(d.id)} className={`px-6 py-3 rounded-xl font-bold whitespace-nowrap border ${activeDay === d.id ? 'bg-orange-500 border-orange-400 shadow-lg' : 'bg-white/5 border-white/10 opacity-60'}`}>{d.label}</button>
          ))}
        </div>
        {dayData.find(d => d.id === activeDay).events.map((ev, i) => (
          <div key={i} className={`p-5 rounded-2xl border ${ev.highlight ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 bg-white/5'}`}>
            <div className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-1">{ev.time}</div>
            <div className="text-xl font-bold leading-tight mb-2">{ev.title}</div>
            <div className="text-sm opacity-60 italic">{ev.presenters}</div>
          </div>
        ))}
      </Panel>

      <Panel id="tech" title="Booth Demonstrations" isOpen={activePanel === 'tech'}>
        {techData.map((t, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-black text-cyan-400 mb-1">{t.name}</h3>
            <p className="font-bold text-sm mb-3 opacity-90">{t.summary}</p>
            <p className="text-sm opacity-60 leading-relaxed">{t.details}</p>
          </div>
        ))}
      </Panel>

      <Panel id="intern" title="2026 Opportunities" isOpen={activePanel === 'intern'}>
        <div className="bg-orange-600/20 border border-orange-500 p-6 rounded-2xl mb-6">
          <h3 className="font-black text-xl mb-1">Career Fair at I/ITSEC</h3>
          <p className="text-sm opacity-90">Wednesday, 13:00 – 16:00 • Room 210A</p>
        </div>
        {internRoles.map((role, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex justify-between items-center">
            <div>
              <div className="text-cyan-400 text-xs font-bold uppercase mb-1">{role.division}</div>
              <div className="text-lg font-bold">{role.title}</div>
            </div>
            <div className="text-xs font-bold bg-white/10 px-3 py-1 rounded-full">{role.location}</div>
          </div>
        ))}
      </Panel>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);