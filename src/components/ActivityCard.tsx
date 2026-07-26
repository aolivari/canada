interface Props {
  time: string;
  title: string;
  description: string;
  icon: string;
  location?: { name: string; address: string; mapsUrl: string };
  isHighlight?: boolean;
  isHike?: boolean;
  isRestaurant?: boolean;
}

export default function ActivityCard({ time, title, description, icon, location, isHighlight, isHike, isRestaurant }: Props) {
  const borderColor = isHighlight
    ? "border-l-tertiary"
    : isHike
      ? "border-l-primary"
      : isRestaurant
        ? "border-l-secondary"
        : "border-l-outline-variant/30";

  return (
    <div className={`bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 border-l-4 ${borderColor} p-3.5`}>
      <div className="flex items-start gap-2.5">
        {/* Icono */}
        <span className="text-lg flex-shrink-0 mt-0.5">{icon}</span>
        <div className="flex-1 min-w-0">
          {/* Tiempo + badges */}
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[10px] font-bold text-on-surface-variant/40 uppercase tracking-wider">{time}</span>
            {isHighlight && <span className="text-[8px] font-bold bg-tertiary/10 text-tertiary px-1.5 py-0.5 rounded-full uppercase">🔥 imperdible</span>}
            {isHike && <span className="text-[8px] font-bold bg-primary/10 text-primary px-1.5 py-0.5 rounded-full uppercase">🥾 ruta</span>}
            {isRestaurant && !isHighlight && <span className="text-[8px] font-bold bg-secondary-container/50 text-on-secondary-container px-1.5 py-0.5 rounded-full uppercase">🍽️ comer</span>}
          </div>
          {/* Título */}
          <h4 className={`text-sm font-bold leading-snug ${isHighlight ? "text-tertiary" : "text-on-surface"}`}>{title}</h4>
          {/* Descripción */}
          {description && <p className="text-[11px] text-on-surface-variant/70 mt-0.5 leading-relaxed">{description}</p>}
          {/* Maps link */}
          {location && (
            <a href={location.mapsUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1 mt-1.5 text-[10px] text-[#1a73e8] hover:underline font-medium">
              <span className="material-symbols-outlined text-[13px]">location_on</span>
              {location.name}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
