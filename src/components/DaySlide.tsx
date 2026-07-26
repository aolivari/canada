import { useState, useEffect, useRef, useCallback } from "react";
import type { Day } from "../data/tripData";
import ActivityCard from "./ActivityCard";

interface Props {
  day: Day;
  isActive: boolean;
}

// Weather code → icon + label (using Font Awesome)
const weatherMap: Record<number, { label: string; icon: string }> = {
  0:  { label: "Despejado",     icon: "fa-sun" },
  1:  { label: "Casi despejado", icon: "fa-sun" },
  2:  { label: "Parcial nublado", icon: "fa-cloud-sun" },
  3:  { label: "Nublado",        icon: "fa-cloud" },
  45: { label: "Niebla",         icon: "fa-smog" },
  48: { label: "Niebla densa",   icon: "fa-smog" },
  51: { label: "Llovizna",       icon: "fa-cloud-sun-rain" },
  53: { label: "Llovizna",       icon: "fa-cloud-sun-rain" },
  55: { label: "Llovizna",       icon: "fa-cloud-rain" },
  61: { label: "Lluvia ligera",  icon: "fa-cloud-rain" },
  63: { label: "Lluvia",         icon: "fa-cloud-showers-heavy" },
  65: { label: "Lluvia fuerte",  icon: "fa-cloud-showers-heavy" },
  80: { label: "Chubascos",      icon: "fa-cloud-showers-heavy" },
  81: { label: "Chubascos",      icon: "fa-cloud-showers-heavy" },
  95: { label: "Tormenta",       icon: "fa-cloud-bolt" },
  96: { label: "Tormenta",       icon: "fa-cloud-bolt" },
};

// Parse time to determine period of day
function getTimePeriod(time: string): string {
  // Extract hour from time like "10:00", "~20:00", "13:30", or "22 ago"
  const match = time.match(/~?(\d{1,2})[:h]/);
  if (!match) return "mañana"; // fallback for dates like "22 ago"
  const hour = parseInt(match[1], 10);
  if (hour < 12) return "mañana";
  if (hour < 18) return "tarde";
  return "noche";
}

const periodConfig: Record<string, { label: string; icon: string; bg: string; text: string }> = {
  mañana: { label: "Mañana", icon: "fa-sun",        bg: "bg-amber-100/60", text: "text-amber-700" },
  tarde:  { label: "Tarde",  icon: "fa-cloud-sun",   bg: "bg-orange-100/60", text: "text-orange-700" },
  noche:  { label: "Noche",  icon: "fa-moon",        bg: "bg-indigo-100/60", text: "text-indigo-700" },
};

export default function DaySlide({ day, isActive }: Props) {
  const [weather, setWeather] = useState<{ tMax: number; tMin: number; label: string; icon: string } | null>(null);
  const [loadingW, setLoadingW] = useState(false);
  const loadedRef = useRef(false);

  const fetchWeather = useCallback(async () => {
    setLoadingW(true);
    try {
      const { lat, lon } = day.coords;
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=16`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.daily) {
        const tMax = Math.round(data.daily.temperature_2m_max[0]);
        const tMin = Math.round(data.daily.temperature_2m_min[0]);
        const wCode: number = data.daily.weathercode[0];
        const mapped = weatherMap[wCode] || { label: "Variable", icon: "fa-cloud-sun" };
        setWeather({ tMax, tMin, label: mapped.label, icon: mapped.icon });
      }
    } catch { /* silently fail */ }
    setLoadingW(false);
  }, [day.coords]);

  useEffect(() => {
    if (isActive && !loadedRef.current) {
      loadedRef.current = true;
      fetchWeather();
    }
  }, [isActive, fetchWeather]);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* ── HERO IMAGE ── */}
      <div className="relative flex-shrink-0 overflow-hidden bg-on-surface" style={{ height: "30%" }}>
        <img
          src={day.image}
          alt={day.title}
          className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/5" />

        {/* Weather badge */}
        <div className="absolute top-3 right-3 weather-badge rounded-2xl px-3 py-2 text-white text-center min-w-[72px]">
          {loadingW ? (
            <div className="flex flex-col items-center gap-1">
              <i className="fa-solid fa-spinner fa-spin text-sm opacity-60" />
              <span className="text-[9px] opacity-50">Cargando</span>
            </div>
          ) : weather ? (
            <>
              <i className={`fa-solid ${weather.icon} text-xl`} />
              <div className="text-base font-bold leading-tight mt-0.5">{weather.tMax}°</div>
              <div className="text-[8px] opacity-70 uppercase tracking-wider mt-0.5">
                {weather.label} · {weather.tMin}°/{weather.tMax}°
              </div>
            </>
          ) : (
            <span className="text-[10px] opacity-40">--°</span>
          )}
        </div>

        {/* Location badge */}
        <div className="absolute top-3 left-3 glass-dark rounded-full px-2.5 py-1 flex items-center gap-1.5">
          <i className="fa-solid fa-location-dot text-white/70 text-[10px]" />
          <span className="text-white/80 text-[10px] font-medium">{day.locationLabel}</span>
        </div>

        {/* Day info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white/50 text-[10px] font-bold uppercase tracking-widest">{day.dayName}</span>
            <span className="bg-white/15 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 rounded-full font-bold border border-white/10">
              {day.date}
            </span>
          </div>
          <h2 className="text-white text-xl font-extrabold font-display leading-tight">{day.title}</h2>
          <p className="text-white/60 text-[11px] mt-0.5 font-medium">{day.subtitle}</p>
        </div>
      </div>

      {/* ── TIMELINE ACTIVITIES ── */}
      <div className="flex-1 overflow-y-auto px-3 pt-3 pb-6 bg-background">
        <div className="stagger-children">
          {(() => {
            let lastPeriod = "";
            return day.activities.map((act, i) => {
              const period = getTimePeriod(act.time);
              const showHeader = period !== lastPeriod;
              lastPeriod = period;
              const periodInfo = periodConfig[period];

              return (
                <div key={i}>
                  {showHeader && (
                    <div className="flex items-center gap-2 mb-2 mt-1">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full ${periodInfo.bg}`}>
                        <i className={`fa-solid ${periodInfo.icon} text-[10px] ${periodInfo.text}`} />
                        <span className={`text-[10px] font-bold uppercase tracking-wider ${periodInfo.text}`}>
                          {periodInfo.label}
                        </span>
                      </div>
                      <div className="flex-1 h-[1px] bg-outline-variant/15" />
                    </div>
                  )}
                  <ActivityCard
                    {...act}
                    isFirst={i === 0 && !showHeader}
                    isLast={i === day.activities.length - 1}
                  />
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
  );
}

