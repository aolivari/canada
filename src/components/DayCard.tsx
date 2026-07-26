import type { Day } from "../data/tripData";
import ActivityCard from "./ActivityCard";

interface Props {
  day: Day;
}

export default function DayCard({ day }: Props) {
  const isSpecial = day.title.includes("Niagara") || day.title.includes("Clifton Hill") || day.title.includes("Despedida");

  return (
    <div className="mb-8">
      {/* Date badge + title */}
      <div className="flex items-start gap-3 mb-5 px-1">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xs leading-tight text-center flex-shrink-0 ${isSpecial ? "bg-tertiary" : "bg-primary"}`}>
          {day.date.split(" ")[0]}
          <br />
          {day.date.split(" ")[1]}
        </div>
        <div className="flex-1 min-w-0 pt-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold text-on-surface-variant/50 uppercase tracking-wider">{day.dayName}</span>
            {isSpecial && <span className="badge-top text-[9px]">⭐ top</span>}
          </div>
          <h3 className="font-display font-bold text-on-surface text-base leading-tight mt-0.5">
            {day.title}
          </h3>
          <p className="text-xs text-on-surface-variant/70 mt-0.5">{day.subtitle}</p>
        </div>
      </div>

      {/* Timeline container */}
      <div className="relative pl-7 space-y-4">
        {/* Vertical dotted line */}
        <div className="timeline-line" />

        {/* Activities */}
        {day.activities.map((act, i) => (
          <ActivityCard key={i} {...act} />
        ))}
      </div>
    </div>
  );
}
