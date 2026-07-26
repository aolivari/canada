import { useState, useRef, useEffect } from "react";
import DaySlide from "./components/DaySlide";
import ChecklistPage from "./components/ChecklistPage";
import { days, checklist, tripTitle, tripDates } from "./data/tripData";

type Tab = "itinerario" | "checklist";

// Short labels for mobile tabs
const dayLabels = days.map((d) => {
  const num = d.date.split(" ")[0]; // "21", "22–26", etc.
  // Short location names for active pill
  const loc = d.title.split("—")[0].split("+")[0].trim().split(" ").slice(0, 2).join(" ");
  return { num, loc };
});

export default function App() {
  const [tab, setTab] = useState<Tab>("itinerario");
  const [currentDay, setCurrentDay] = useState(0);
  const pillsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll active pill into view
  useEffect(() => {
    const el = pillsRef.current;
    if (el) {
      const child = el.children[currentDay] as HTMLElement;
      if (child) {
        child.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }
  }, [currentDay]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      {/* ── HEADER ── */}
      <header className="flex-shrink-0 bg-background/95 backdrop-blur-md z-20">
        {/* Top row */}
        <div className="flex items-center justify-between px-3 py-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
              <i className="fa-solid fa-leaf text-on-primary text-[11px]" />
            </div>
            <div className="min-w-0">
              <h1 className="font-display font-extrabold text-on-surface text-[13px] leading-none">{tripTitle}</h1>
              <p className="text-[8px] text-on-surface-variant/50 uppercase tracking-widest font-bold mt-0.5">{tripDates}</p>
            </div>
          </div>
          <button
            onClick={() => setTab(tab === "itinerario" ? "checklist" : "itinerario")}
            className="flex items-center gap-1 text-[10px] font-bold text-primary bg-primary-fixed/25 px-2.5 py-1.5 rounded-lg whitespace-nowrap hover:bg-primary-fixed/40 active:scale-95 transition-all"
          >
            <i className={`fa-solid ${tab === "itinerario" ? "fa-clipboard-list" : "fa-calendar-days"} text-[9px]`} />
            {tab === "itinerario" ? "Checklist" : "Itinerario"}
          </button>
        </div>

        {/* ── DAY PILLS ── */}
        {tab === "itinerario" && (
          <div
            ref={pillsRef}
            className="flex gap-1 overflow-x-auto no-scrollbar px-3 pb-2 pt-0.5"
          >
            {days.map((d, i) => {
              const isActive = i === currentDay;
              const label = dayLabels[i];
              return (
                <button
                  key={i}
                  onClick={() => setCurrentDay(i)}
                  className={`flex-shrink-0 flex items-center gap-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "bg-primary text-on-primary pl-1 pr-3 py-1 shadow-sm"
                      : "bg-surface-container text-on-surface-variant/60 hover:bg-surface-container-high hover:text-on-surface-variant px-1 py-1"
                  }`}
                >
                  {/* Day number circle */}
                  <div className={`flex items-center justify-center rounded-full font-bold transition-all duration-300 ${
                    isActive
                      ? "w-6 h-6 bg-on-primary/20 text-[10px]"
                      : "w-6 h-6 text-[10px]"
                  }`}>
                    {label.num}
                  </div>
                  {/* Expanded label — only on active */}
                  {isActive && (
                    <span className="text-[10px] font-bold whitespace-nowrap animate-fade-in">
                      {label.loc}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* ── CONTENT ── */}
      <main className="flex-1 overflow-hidden">
        {tab === "itinerario" ? (
          <div className="h-full">
            {days.map((day, i) => (
              <div key={i} className={`h-full ${i === currentDay ? "block animate-fade-in" : "hidden"}`}>
                <DaySlide day={day} isActive={i === currentDay} />
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full overflow-y-auto px-4 pt-4 pb-8">
            <ChecklistPage categories={checklist} />
          </div>
        )}
      </main>
    </div>
  );
}
