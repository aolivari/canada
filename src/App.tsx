import { useState } from "react";
import DayCard from "./components/DayCard";
import ChecklistPage from "./components/ChecklistPage";
import { days, checklist, tripTitle, tripSubtitle, tripDates } from "./data/tripData";

type Tab = "itinerario" | "checklist";

export default function App() {
  const [tab, setTab] = useState<Tab>("itinerario");

  return (
    <div className="min-h-screen bg-background">
      {/* ── TOP APP BAR ── */}
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-outline-variant/10">
        <div className="max-w-lg mx-auto px-4 py-3">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="w-10 h-10 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>
                sunny
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-on-surface text-base leading-tight">{tripTitle}</h1>
              <p className="text-[10px] text-on-surface-variant/60 uppercase tracking-widest font-bold mt-0.5">{tripDates}</p>
            </div>
            {/* Family badge */}
            <span className="text-[10px] font-bold text-secondary bg-secondary-container/50 px-2.5 py-1 rounded-full whitespace-nowrap">
              {tripSubtitle}
            </span>
          </div>

          {/* ── TABS ── */}
          <div className="flex gap-1 mt-3 bg-surface-container rounded-lg p-1">
            <button
              onClick={() => setTab("itinerario")}
              className={`flex-1 py-2 rounded-md text-xs font-bold transition-all ${
                tab === "itinerario"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant/60 hover:text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-[16px] align-middle mr-1">map</span>
              Itinerario
            </button>
            <button
              onClick={() => setTab("checklist")}
              className={`flex-1 py-2 rounded-md text-xs font-bold transition-all ${
                tab === "checklist"
                  ? "bg-surface-container-lowest text-primary shadow-sm"
                  : "text-on-surface-variant/60 hover:text-on-surface-variant"
              }`}
            >
              <span className="material-symbols-outlined text-[16px] align-middle mr-1">checklist</span>
              Checklist
            </button>
          </div>
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main className="max-w-lg mx-auto px-4 pt-5 pb-20">
        {tab === "itinerario" ? (
          <div>
            {days.map((day, i) => (
              <DayCard key={i} day={day} />
            ))}
            {/* Footer */}
            <div className="text-center mt-6 pb-4">
              <p className="text-[10px] text-on-surface-variant/40">🍁 Viaje familiar a Canadá — Agosto 2026</p>
            </div>
          </div>
        ) : (
          <ChecklistPage categories={checklist} onBack={() => setTab("itinerario")} />
        )}
      </main>
    </div>
  );
}
