import { useState, useEffect, useRef, useCallback } from "react";
import type { Day } from "../data/tripData";
import ActivityCard from "./ActivityCard";

interface Props {
  day: Day;
  isActive: boolean;
}

// Coordenadas de cada destino para el clima
const weatherCoords: Record<string, { lat: number; lon: string }> = {
  "21 ago": { lat: 43.6532, lon: "-79.3832" },    // Toronto / Sarnia
  "22-26 ago": { lat: 42.9748, lon: "-82.4062" },  // Sarnia
  "27 ago": { lat: 43.0828, lon: "-79.0742" },     // Niagara Falls
  "28 ago": { lat: 43.2557, lon: "-79.8711" },     // Hamilton
  "29 ago": { lat: 43.6532, lon: "-79.3832" },     // Toronto
  "30 ago": { lat: 43.6532, lon: "-79.3832" },     // Toronto
  "31 ago": { lat: 43.5836, lon: "-79.6373" },     // Mississauga
};

export default function DaySlide({ day, isActive }: Props) {
  const [weather, setWeather] = useState<{ temp: number; cond: string; icon: string } | null>(null);
  const [loadingW, setLoadingW] = useState(false);
  const loadedRef = useRef(false);

  const fetchWeather = useCallback(async () => {
    const coords = weatherCoords[day.date];
    if (!coords) return;
    setLoadingW(true);
    try {
      const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto&forecast_days=16`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.daily) {
        const idx = 0; // hoy / día más cercano
        const tMax = Math.round(data.daily.temperature_2m_max[idx]);
        const tMin = Math.round(data.daily.temperature_2m_min[idx]);
        const wCode = data.daily.weathercode[idx];
        const condMap: Record<number, { cond: string; icon: string }> = {
          0: { cond: "Despejado", icon: "☀️" },
          1: { cond: "Mayormente soleado", icon: "🌤️" },
          2: { cond: "Parcialmente nublado", icon: "⛅" },
          3: { cond: "Nublado", icon: "☁️" },
          45: { cond: "Niebla", icon: "🌫️" },
          51: { cond: "Llovizna", icon: "🌦️" },
          61: { cond: "Lluvia", icon: "🌧️" },
          80: { cond: "Chubascos", icon: "🌦️" },
          95: { cond: "Tormenta", icon: "⛈️" },
        };
        const w = condMap[wCode] || { cond: "Variable", icon: "🌤️" };
        setWeather({ temp: tMax, cond: w.cond, icon: w.icon });
      }
    } catch {
      // Silencio
    }
    setLoadingW(false);
  }, [day.date]);

  useEffect(() => {
    if (isActive && !loadedRef.current) {
      loadedRef.current = true;
      fetchWeather();
    }
  }, [isActive, fetchWeather]);

  return (
    <div className="h-full w-full flex flex-col overflow-hidden">
      {/* Hero con foto de fondo */}
      <div
        className="relative h-52 flex-shrink-0 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15), rgba(0,0,0,0.7)), url(${day.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Weather badge */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 text-white text-center border border-white/20">
          {loadingW ? (
            <span className="text-xs opacity-70">Cargando...</span>
          ) : weather ? (
            <>
              <div className="text-2xl">{weather.icon}</div>
              <div className="text-lg font-bold leading-tight">{weather.temp}°</div>
              <div className="text-[10px] opacity-80 uppercase tracking-wider">{weather.cond}</div>
            </>
          ) : (
            <span className="text-xs opacity-50">--°</span>
          )}
        </div>

        {/* Date / title */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-white/60 text-[11px] font-bold uppercase tracking-widest">{day.dayName}</span>
            <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{day.date}</span>
          </div>
          <h2 className="text-white text-xl font-bold font-display leading-tight">{day.title}</h2>
          <p className="text-white/70 text-xs mt-0.5">{day.subtitle}</p>
        </div>
      </div>

      {/* Scroll de actividades */}
      <div className="flex-1 overflow-y-auto px-4 pt-4 pb-6 bg-background">
        <div className="space-y-3">
          {day.activities.map((act, i) => (
            <ActivityCard key={i} {...act} />
          ))}
        </div>
      </div>
    </div>
  );
}
