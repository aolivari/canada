import { useState } from "react";
import type { ChecklistCategory } from "../data/tripData";

interface Props {
  categories: ChecklistCategory[];
  onBack: () => void;
}

export default function ChecklistPage({ categories, onBack }: Props) {
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
    <div className="pb-8">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 px-1">
        <button onClick={onBack} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors">
          <span className="material-symbols-outlined text-on-surface-variant">arrow_back</span>
        </button>
        <div>
          <h2 className="font-display font-bold text-on-surface text-lg">📋 Checklist</h2>
          <p className="text-xs text-on-surface-variant/70">Marca lo que ya tenéis listo</p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-surface-container rounded-full h-3 mb-5 overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <p className="text-xs text-on-surface-variant text-center mb-6 -mt-3">
        {doneItems} / {totalItems} · {pct}%
      </p>

      {/* Categories */}
      {categories.map((cat, ci) => (
        <div key={ci} className="mb-6">
          <h3 className="font-bold text-sm text-primary mb-2 px-1">{cat.name}</h3>
          <div className="space-y-1.5">
            {cat.items.map((item, ii) => {
              const key = `${ci}-${ii}`;
              const isDone = checked.has(key);
              return (
                <button
                  key={ii}
                  onClick={() => toggle(key)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                    isDone
                      ? "bg-primary-container/20 opacity-60"
                      : "bg-surface-container-lowest hover:bg-surface-container border border-outline-variant/10"
                  }`}
                >
                  {/* Checkbox */}
                  <div
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-colors ${
                      isDone
                        ? "bg-primary border-primary"
                        : "border-outline-variant bg-white"
                    }`}
                  >
                    {isDone && (
                      <span className="material-symbols-outlined text-white text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check
                      </span>
                    )}
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <span className={`text-sm font-medium ${isDone ? "line-through text-on-surface-variant/60" : "text-on-surface"}`}>
                      {item.item}
                    </span>
                    {item.note && (
                      <span className="block text-[10px] text-on-surface-variant/60 mt-0.5">{item.note}</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Reset */}
      {doneItems > 0 && (
        <div className="text-center mt-4">
          <button
            onClick={() => setChecked(new Set())}
            className="text-xs text-on-surface-variant/50 hover:text-on-surface-variant underline"
          >
            Resetear checklist
          </button>
        </div>
      )}
    </div>
  );
}
