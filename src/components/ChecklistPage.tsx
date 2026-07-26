import { useState, useEffect } from "react";
import type { ChecklistCategory } from "../data/tripData";

interface Props {
  categories: ChecklistCategory[];
}

const STORAGE_KEY = "canada-trip-checklist";

export default function ChecklistPage({ categories }: Props) {
  const [checked, setChecked] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [expandedCats, setExpandedCats] = useState<Set<number>>(() => {
    return new Set(categories.map((_, i) => i)); // all expanded initially
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...checked]));
  }, [checked]);

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const toggleCat = (idx: number) => {
    setExpandedCats((prev) => {
      const next = new Set(prev);
      if (next.has(idx)) next.delete(idx);
      else next.add(idx);
      return next;
    });
  };

  const totalItems = categories.reduce((a, c) => a + c.items.length, 0);
  const doneItems = checked.size;
  const pct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  // Category progress
  const catProgress = (catIndex: number, catItems: { item: string; note: string }[]) => {
    const done = catItems.filter((_, ii) => checked.has(`${catIndex}-${ii}`)).length;
    return { done, total: catItems.length };
  };

  return (
    <div className="pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <i className="fa-solid fa-clipboard-list text-primary text-lg" />
        </div>
        <div>
          <h2 className="font-display font-bold text-on-surface text-lg">Checklist</h2>
          <p className="text-xs text-on-surface-variant/60">Marca lo que ya tenéis listo</p>
        </div>
      </div>

      {/* Global progress */}
      <div className="mt-4 mb-6">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[11px] font-semibold text-on-surface-variant/70">Progreso total</span>
          <span className="text-[11px] font-bold text-primary">{doneItems} / {totalItems}</span>
        </div>
        <div className="bg-surface-container rounded-full h-3 overflow-hidden relative">
          <div
            className="bg-primary h-full rounded-full transition-all duration-500 ease-out relative"
            style={{ width: `${pct}%` }}
          >
            {pct > 5 && <div className="progress-shimmer absolute inset-0 rounded-full" />}
          </div>
        </div>
        <p className="text-[10px] text-on-surface-variant/40 text-center mt-1.5 font-bold">{pct}% completado</p>
      </div>

      {/* Categories */}
      {categories.map((cat, ci) => {
        const { done, total } = catProgress(ci, cat.items);
        const isExpanded = expandedCats.has(ci);
        const catDone = done === total && total > 0;

        return (
          <div key={ci} className="mb-3">
            {/* Category header — collapsible */}
            <button
              onClick={() => toggleCat(ci)}
              className={`w-full flex items-center gap-2.5 p-2.5 rounded-xl transition-all ${
                catDone ? "bg-primary/5" : "bg-surface-container-low"
              } hover:bg-surface-container`}
            >
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                catDone ? "bg-primary/15 text-primary" : "bg-surface-container text-on-surface-variant"
              }`}>
                <i className={`fa-solid ${cat.icon} text-sm`} />
              </div>
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2">
                  <h3 className={`font-bold text-sm ${catDone ? "text-primary" : "text-on-surface"}`}>{cat.name}</h3>
                  {catDone && <i className="fa-solid fa-circle-check text-primary text-xs" />}
                </div>
                <span className="text-[10px] text-on-surface-variant/50">{done}/{total}</span>
              </div>
              <i className={`fa-solid fa-chevron-down text-on-surface-variant/30 text-xs transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
            </button>

            {/* Items */}
            {isExpanded && (
              <div className="mt-1.5 space-y-1 ml-2 animate-fade-in">
                {cat.items.map((item, ii) => {
                  const key = `${ci}-${ii}`;
                  const isDone = checked.has(key);
                  return (
                    <button
                      key={ii}
                      onClick={() => toggle(key)}
                      className={`w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left transition-all duration-200 ${
                        isDone
                          ? "bg-primary/5 opacity-60"
                          : "bg-surface-container-lowest border border-outline-variant/10 hover:border-outline-variant/25"
                      }`}
                    >
                      {/* Checkbox */}
                      <div className={`w-[18px] h-[18px] rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all duration-200 ${
                        isDone ? "bg-primary border-primary scale-110" : "border-outline-variant bg-white hover:border-primary/50"
                      }`}>
                        {isDone && <i className="fa-solid fa-check text-white text-[9px]" />}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className={`text-xs font-medium leading-snug ${isDone ? "line-through text-on-surface-variant/50" : "text-on-surface"}`}>
                          {item.item}
                        </span>
                        {item.note && (
                          <span className="block text-[9px] text-on-surface-variant/50 mt-0.5">{item.note}</span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}

      {/* Reset button */}
      {doneItems > 0 && (
        <div className="text-center mt-6">
          <button
            onClick={() => { setChecked(new Set()); localStorage.removeItem(STORAGE_KEY); }}
            className="inline-flex items-center gap-1.5 text-[11px] text-on-surface-variant/40 hover:text-error transition-colors"
          >
            <i className="fa-solid fa-rotate-left text-[10px]" />
            Resetear todo
          </button>
        </div>
      )}
    </div>
  );
}
