import { useState } from "react";
import type { ChecklistCategory } from "../data/tripData";

interface Props {
  categories: ChecklistCategory[];
}

export default function ChecklistPage({ categories }: Props) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const totalItems = categories.reduce((a, c) => a + c.items.length, 0);
  const doneItems = checked.size;
  const pct = totalItems > 0 ? Math.round((doneItems / totalItems) * 100) : 0;

  return (
    <div className="pb-4">
      <h2 className="font-display font-bold text-on-surface text-lg mb-1">📋 Checklist</h2>
      <p className="text-xs text-on-surface-variant/60 mb-4">Marca lo que ya tenéis listo</p>

      {/* Progress */}
      <div className="bg-surface-container rounded-full h-2.5 mb-2 overflow-hidden">
        <div className="bg-primary h-full rounded-full transition-all duration-500 ease-out" style={{ width: `${pct}%` }} />
      </div>
      <p className="text-[10px] text-on-surface-variant/50 text-center mb-5">{doneItems} / {totalItems} · {pct}%</p>

      {categories.map((cat, ci) => (
        <div key={ci} className="mb-5">
          <h3 className="font-bold text-sm text-primary mb-2">{cat.name}</h3>
          <div className="space-y-1">
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`;
              const isDone = checked.has(key);
              return (
                <button
                  key={ii}
                  onClick={() => toggle(key)}
                  className={`w-full flex items-center gap-2.5 p-2.5 rounded-lg text-left transition-all ${
                    isDone ? "bg-primary-container/10 opacity-60" : "bg-surface-container-lowest border border-outline-variant/10"
                  }`}
                >
                  <div className={`w-4 h-4 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDone ? "bg-primary border-primary" : "border-outline-variant bg-white"
                  }`}>
                    {isDone && (
                      <span className="material-symbols-outlined text-white text-[11px]" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className={`text-xs font-medium ${isDone ? "line-through text-on-surface-variant/50" : "text-on-surface"}`}>
                      {item.item}
                    </span>
                    {item.note && <span className="block text-[9px] text-on-surface-variant/50 mt-0.5">{item.note}</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {doneItems > 0 && (
        <div className="text-center mt-2">
          <button onClick={() => setChecked(new Set())} className="text-[10px] text-on-surface-variant/40 hover:text-on-surface-variant underline">
            Resetear
          </button>
        </div>
      )}
    </div>
  );
}
