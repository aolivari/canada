interface Props {
  time: string;
  title: string;
  description: string;
  icon: string;
  location?: { name: string; address: string; mapsUrl: string };
  isHighlight?: boolean;
  isHike?: boolean;
  isRestaurant?: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

const dotColor = (h?: boolean, hk?: boolean, r?: boolean) => {
  if (h) return "bg-tertiary border-tertiary-fixed";
  if (hk) return "bg-primary border-primary-fixed";
  if (r) return "bg-secondary border-secondary-container";
  return "bg-outline-variant border-surface-container";
};

const cardBg = (h?: boolean, hk?: boolean, r?: boolean) => {
  if (h) return "bg-tertiary-fixed/15 border-tertiary/12";
  if (hk) return "bg-primary-fixed/15 border-primary/12";
  if (r) return "bg-secondary-container/25 border-secondary/8";
  return "bg-surface-container-lowest border-outline-variant/10";
};

const iconStyle = (h?: boolean, hk?: boolean, r?: boolean) => {
  if (h) return "bg-tertiary/12 text-tertiary";
  if (hk) return "bg-primary/12 text-primary";
  if (r) return "bg-secondary/10 text-secondary";
  return "bg-surface-container text-on-surface-variant/60";
};

const titleColor = (h?: boolean) => h ? "text-tertiary" : "text-on-surface";

const badgeInfo = (h?: boolean, hk?: boolean, r?: boolean) => {
  if (h) return { label: "imperdible", icon: "fa-fire", cls: "text-tertiary bg-tertiary/10" };
  if (hk) return { label: "ruta", icon: "fa-person-hiking", cls: "text-primary bg-primary/10" };
  if (r && !h) return { label: "comer", icon: "fa-utensils", cls: "text-secondary bg-secondary/10" };
  return null;
};

export default function ActivityCard({ time, title, description, icon, location, isHighlight, isHike, isRestaurant, isFirst, isLast }: Props) {
  const badge = badgeInfo(isHighlight, isHike, isRestaurant);

  return (
    <div className="relative flex gap-3">
      {/* ── TIMELINE COLUMN ── */}
      <div className="flex flex-col items-center flex-shrink-0 w-5">
        {/* Line above dot */}
        <div className={`w-[2px] flex-1 ${isFirst ? "bg-transparent" : "bg-outline-variant/20"}`} />
        {/* Dot */}
        <div className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${dotColor(isHighlight, isHike, isRestaurant)}`} />
        {/* Line below dot */}
        <div className={`w-[2px] flex-1 ${isLast ? "bg-transparent" : "bg-outline-variant/20"}`} />
      </div>

      {/* ── CARD ── */}
      <div className={`flex-1 rounded-2xl border p-3 mb-2 transition-all duration-200 hover:shadow-card ${cardBg(isHighlight, isHike, isRestaurant)}`}>
        <div className="flex items-start gap-2.5">
          {/* Icon */}
          <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${iconStyle(isHighlight, isHike, isRestaurant)}`}>
            <i className={`fa-solid ${icon} text-[13px]`} />
          </div>

          <div className="flex-1 min-w-0">
            {/* Time + badge row */}
            <div className="flex items-center gap-1.5 mb-0.5 flex-wrap">
              <span className="text-[9px] font-bold text-on-surface-variant/40 uppercase tracking-wider">
                {time}
              </span>
              {badge && (
                <span className={`inline-flex items-center gap-1 text-[7px] font-bold px-1.5 py-0.5 rounded-full ${badge.cls}`}>
                  <i className={`fa-solid ${badge.icon} text-[6px]`} />
                  {badge.label}
                </span>
              )}
            </div>

            {/* Title */}
            <h4 className={`text-[13px] font-bold leading-snug ${titleColor(isHighlight)}`}>{title}</h4>

            {/* Description */}
            {description && (
              <p className="text-[11px] text-on-surface-variant/55 mt-0.5 leading-relaxed">{description}</p>
            )}

            {/* Maps */}
            {location && (
              <a
                href={location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-1.5 text-[10px] text-[#1a73e8] hover:text-[#1558b0] font-medium group"
              >
                <i className="fa-solid fa-location-dot text-[10px] group-hover:scale-110 transition-transform" />
                {location.name}
                <i className="fa-solid fa-arrow-up-right-from-square text-[7px] opacity-40" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
