import { useState, useRef, useCallback, useEffect } from "react";
import DaySlide from "./components/DaySlide";
import ChecklistPage from "./components/ChecklistPage";
import { days, checklist, tripTitle, tripSubtitle, tripDates } from "./data/tripData";

type Tab = "itinerario" | "checklist";

export default function App() {
  const [tab, setTab] = useState<Tab>("itinerario");
  const [currentDay, setCurrentDay] = useState(0);
  const [isChecklist, setIsChecklist] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Swipe horizontal
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 60) {
      if (diff > 0 && currentDay < days.length - 1) {
        setCurrentDay((p) => p + 1);
      } else if (diff < 0 && currentDay > 0) {
        setCurrentDay((p) => p - 1);
      }
    }
  };

  // Rueda del ratón
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        if (e.deltaX > 0 && currentDay < days.length - 1) {
          setCurrentDay((p) => p + 1);
        } else if (e.deltaX < 0 && currentDay > 0) {
          setCurrentDay((p) => p - 1);
        }
      }
    },
    [currentDay]
  );

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
      return () => el.removeEventListener("wheel", handleWheel);
    }
  }, [handleWheel]);

  // Teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" && currentDay < days.length - 1) setCurrentDay((p) => p + 1);
      if (e.key === "ArrowLeft" && currentDay > 0) setCurrentDay((p) => p - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentDay]);

  // Dots indicadores
  const goToDay = (i: number) => setCurrentDay(i);

  return (
    <div className="h-screen w-screen overflow-hidden bg-background flex flex-col">
      {/* ── TOP BAR ── */}
      <header className="flex-shrink-0 bg-background/95 backdrop-blur-md border-b border-outline-variant/10 z-20">
        <div className="px-4 py-2.5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-primary-container rounded-full flex items-center justify-center flex-shrink-0">
              <span className="material-symbols-outlined text-on-primary-container text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>sunny</span>
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="font-display font-bold text-on-surface text-sm leading-tight">{tripTitle}</h1>
              <p className="text-[9px] text-on-surface-variant/60 uppercase tracking-widest font-bold">{tripDates}</p>
            </div>
            <button
              onClick={() => setTab(tab === "itinerario" ? "checklist" : "itinerario")}
              className="text-[10px] font-bold text-primary bg-primary-container/30 px-3 py-1.5 rounded-full whitespace-nowrap hover:bg-primary-container/50 transition-colors"
            >
              {tab === "itinerario" ? "📋 Checklist" : "🗓️ Itinerario"}
            </button>
          </div>

          {tab === "itinerario" && (
            <div className="flex justify-center gap-1.5">
              {days.map((d, i) => (
                <button
                  key={i}
                  onClick={() => goToDay(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === currentDay ? "bg-primary w-6" : "bg-outline-variant/40 w-1.5"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ── CONTENT ── */}
      <main ref={containerRef} className="flex-1 overflow-hidden">
        {tab === "itinerario" ? (
          <div
            className="h-full flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${currentDay * 100}%)` }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {days.map((day, i) => (
              <div key={i} className="h-full w-full flex-shrink-0">
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

      {/* ── DAY NAV ── */}
      {tab === "itinerario" && (
        <div className="flex-shrink-0 flex justify-between items-center px-4 py-2 bg-background/95 backdrop-blur-md border-t border-outline-variant/10">
          <button
            onClick={() => currentDay > 0 && setCurrentDay((p) => p - 1)}
            disabled={currentDay === 0}
            className="text-xs font-bold text-on-surface-variant/60 disabled:opacity-20"
          >
            ← Anterior
          </button>
          <span className="text-[10px] text-on-surface-variant/40 font-mono">
            {currentDay + 1} / {days.length}
          </span>
          <button
            onClick={() => currentDay < days.length - 1 && setCurrentDay((p) => p + 1)}
            disabled={currentDay === days.length - 1}
            className="text-xs font-bold text-on-surface-variant/60 disabled:opacity-20"
          >
            Siguiente →
          </button>
        </div>
      )}
    </div>
  );
}
