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
        : "border-l-outline-variant";

  return (
    <div className={`relative flex gap-4 group`}>
      {/* Timeline dot */}
      <div className={`timeline-dot ${isHighlight ? "bg-tertiary" : isHike ? "bg-primary" : isRestaurant ? "bg-secondary-container" : "bg-primary-fixed-dim"}`} />

      {/* Card */}
      <div className={`flex-1 bg-surface-container-lowest p-4 rounded-lg shadow-sm border border-outline-variant/10 hover:shadow-md transition-all group-hover:-translate-y-0.5 duration-200 ${borderColor} border-l-4`}>
        {/* Header */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2">
            <span className="text-lg">{icon}</span>
            <span className="text-[10px] font-bold text-on-surface-variant/60 uppercase tracking-wider font-body">{time}</span>
          </div>
          {isHighlight && <span className="badge-top">🔥 imperdible</span>}
          {isHike && <span className="badge-hike">🥾 ruta</span>}
          {isRestaurant && !isHighlight && <span className="badge-eat">🍽️ comer</span>}
        </div>

        {/* Title */}
        <h4 className="font-bold text-on-surface text-sm leading-tight">{title}</h4>

        {/* Description */}
        {description && (
          <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">{description}</p>
        )}

        {/* Location / Maps link */}
        {location && (
          <a
            href={location.mapsUrl}
            target="_blank"
            rel="noopener"
            className="maps-btn mt-2"
          >
            <span className="material-symbols-outlined text-[14px]">location_on</span>
            {location.name}
          </a>
        )}
      </div>
    </div>
  );
}
