export interface Location {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  icon: string;
  location?: Location;
  isHighlight?: boolean;
  isHike?: boolean;
  isRestaurant?: boolean;
}

export interface Day {
  date: string;
  dayName: string;
  title: string;
  subtitle: string;
  image: string;
  gradient: string;
  activities: Activity[];
}

export interface ChecklistCategory {
  name: string;
  items: { item: string; note: string }[];
}

export const tripTitle = "🇨🇦 Canadá 2026";
export const tripSubtitle = "Antonio, Mujer e Hijo (10 años)";
export const tripDates = "21 agosto → 1 septiembre 2026";

export const days: Day[] = [
  {
    date: "21 ago",
    dayName: "Viernes",
    title: "✈️ Barcelona → Sarnia",
    subtitle: "Vuelo + llegada al primo",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    gradient: "from-blue-900 via-blue-700 to-blue-500",
    activities: [
      { time: "10:00", title: "Salida al aeropuerto", description: "Llegar con 3h. Barcelona-El Prat", icon: "🚗" },
      { time: "13:15", title: "✈️ VUELO BCN → YYZ", description: "Directo ~8h. Llegada 16:00 local (-6h España)", icon: "✈️", isHighlight: true },
      { time: "16:00", title: "Llegada Toronto Pearson", description: "Maletas, aduanas, recoger coche", icon: "🛬", location: { name: "Toronto Pearson (YYZ)", address: "6301 Silver Dart Dr, Mississauga, ON", mapsUrl: "https://www.google.com/maps?q=Toronto+Pearson+International+Airport" } },
      { time: "17:00", title: "🚗 Road trip a Sarnia (~3h)", description: "Autopista 401 al oeste", icon: "🚗" },
      { time: "~20:00", title: "🏠 Llegada casa del primo", description: "Cena familiar bienvenida 🎉", icon: "🏠", isHighlight: true },
    ],
  },
  {
    date: "22-26 ago",
    dayName: "Sáb-Mié",
    title: "🏠 Sarnia — Días en familia",
    subtitle: "5 días con el primo en el lago Hurón",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",
    gradient: "from-emerald-900 via-emerald-600 to-teal-400",
    activities: [
      { time: "22 ago", title: "🥞 Desayuno + playa", description: "Canatara Park, lago Hurón 🌊", icon: "🌊", isHighlight: true, location: { name: "Canatara Park", address: "1200 Lake Chipico Dr, Sarnia, ON", mapsUrl: "https://www.google.com/maps?q=Canatara+Park+Sarnia" } },
      { time: "23 ago", title: "Día en familia", description: "Barbacoa, paseo, lo que surja", icon: "🏠" },
      { time: "24 ago", title: "🌲 Point Pelee", description: "Punto más sur de Canadá mainland", icon: "🌲", location: { name: "Point Pelee", address: "1118 Point Pelee Dr, Leamington, ON", mapsUrl: "https://www.google.com/maps?q=Point+Pelee+National+Park" } },
      { time: "25 ago", title: "Día libre", description: "Playa, senderos, relax", icon: "☀️" },
      { time: "26 ago", title: "Preparar maletas", description: "Mañana: NIAGARA 💥", icon: "🧳" },
    ],
  },
  {
    date: "27 ago",
    dayName: "Jueves",
    title: "🚗💥 NIAGARA FALLS",
    subtitle: "Journey + Hornblower + 🎆",
    image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80",
    gradient: "from-cyan-900 via-blue-600 to-cyan-400",
    activities: [
      { time: "7:30", title: "🚗 Salida Sarnia", description: "Desayuno en ruta (Tim Hortons 🍩)", icon: "🚗" },
      { time: "11:30", title: "🏠 Check-in Airbnb", description: "5395 River Rd, L2E 3H1. Cocina 🍳", icon: "🏠", isHighlight: true, location: { name: "Airbnb Niagara", address: "5395 River Road, Niagara Falls, ON", mapsUrl: "https://www.google.com/maps?q=5395+River+Road+Niagara+Falls" } },
      { time: "12:30", title: "🏔️ Journey Behind the Falls", description: "Túneles tras la catarata. Poncho incluido", icon: "🏔️", isHighlight: true, location: { name: "Journey Behind Falls", address: "6650 Niagara Pkwy, Niagara Falls, ON", mapsUrl: "https://www.google.com/maps?q=Journey+Behind+the+Falls" } },
      { time: "13:30", title: "🍝 Weinkeller (junto Airbnb)", description: "Pasta artesanal, pizzas. A 2 min", icon: "🍝", isRestaurant: true, location: { name: "Weinkeller", address: "5395 River Rd, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Weinkeller+Niagara+Falls" } },
      { time: "15:00", title: "🎡 Clifton Hill", description: "SkyWheel, mini golf, tiendas", icon: "🎡", location: { name: "Clifton Hill", address: "Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Clifton+Hill+Niagara+Falls" } },
      { time: "16:30", title: "🚢 HORNBLOWER 🌊", description: "Bolsa hermética. SALÍIS EMPAPADOS", icon: "🚢", isHighlight: true, location: { name: "Hornblower", address: "5920 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Hornblower+Niagara+Cruises" } },
      { time: "17:30", title: "🏠 Ducha en Airbnb", description: "Ropa seca de repuesto", icon: "🏠" },
      { time: "19:00", title: "🌟 Table Rock House Restaurant", description: "Cocina canadiense con VISTAS. Reservar", icon: "🌟", isHighlight: true, isRestaurant: true, location: { name: "Table Rock", address: "6650 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Table+Rock+House+Restaurant" } },
      { time: "22:00", title: "🎆 FUEGOS ARTIFICIALES", description: "Queen Victoria Park. Llegar 21:30", icon: "🎆", isHighlight: true, location: { name: "Queen Victoria Park", address: "6345 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Queen+Victoria+Park+Niagara+Falls" } },
    ],
  },
  {
    date: "28 ago",
    dayName: "Viernes",
    title: "🕹️ Clifton Hill + 🌲 Ruta",
    subtitle: "Karting 🏁 + The Blind Pig 🍔 + Hamilton 💦",
    image: "https://images.unsplash.com/photo-1570488344390-4bb98f3144c1?w=800&q=80",
    gradient: "from-orange-900 via-amber-600 to-yellow-400",
    activities: [
      { time: "9:00", title: "🥞 Desayuno Airbnb", description: "Cocina. Recoger maletas después", icon: "🥞" },
      { time: "10:00", title: "🕹️ Ripley's Believe It or Not", description: "Rarezas, ilusiones, Clifton Hill", icon: "🕹️", location: { name: "Ripley's", address: "4960 Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Ripley+Believe+it+or+not+Niagara+Falls" } },
      { time: "11:00", title: "🏎️ Karting Niagara Speedway 🏁", description: "Montaña rusa + karting 2 pisos. EL NIÑO FLIPA", icon: "🏎️", isHighlight: true, location: { name: "Niagara Speedway", address: "4960 Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Niagara+Speedway" } },
      { time: "12:00", title: "🥇 The Blind Pig", description: "Mejores hamburguesas de Niagara 🏆", icon: "🍔", isRestaurant: true, location: { name: "The Blind Pig", address: "6689 Lundy's Lane, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=The+Blind+Pig+Niagara+Falls" } },
      { time: "13:00", title: "🚗 A Hamilton (20 min)", description: "Por la QEW", icon: "🚗" },
      { time: "13:30", title: "🌲 Albion + Buttermilk Falls", description: "3.7 km fácil. Parking gratis Mountain Brow Blvd", icon: "🥾", isHighlight: true, isHike: true, location: { name: "Albion Falls", address: "Mountain Brow Blvd, Hamilton, ON", mapsUrl: "https://www.google.com/maps?q=Mountain+Brow+Blvd+Hamilton+Albion+Falls" } },
      { time: "15:30", title: "🚗 Hamilton → Mississauga", description: "~~16:30 llegada Airbnb Atwater Ave", icon: "🚗" },
    ],
  },
  {
    date: "29 ago",
    dayName: "Sábado",
    title: "🏙️ Toronto Full",
    subtitle: "GO Train Weekend Pass $10 • Niño gratis 🎉",
    image: "https://images.unsplash.com/photo-1517093602195-b40af9688771?w=800&q=80",
    gradient: "from-slate-900 via-blue-800 to-indigo-500",
    activities: [
      { time: "8:30", title: "🚶 Port Credit GO (5 min)", description: "Atwater Ave → estación", icon: "🚶", location: { name: "Port Credit GO", address: "30 Queen St E, Mississauga", mapsUrl: "https://www.google.com/maps?q=Port+Credit+GO+Station" } },
      { time: "9:00", title: "🚂 GO → Union Station (25 min)", description: "Weekend Pass $10. Niño GRATIS 🎉", icon: "🚂", isHighlight: true },
      { time: "10:00", title: "🏛️ CN Tower + Aquarium", description: "Túnel de tiburones 🦈", icon: "🏛️", location: { name: "CN Tower", address: "290 Bremner Blvd, Toronto", mapsUrl: "https://www.google.com/maps?q=CN+Tower+Toronto" } },
      { time: "12:00", title: "🚢 Ferry a Toronto Islands", description: "15 min. Playas + skyline 🌆", icon: "🚢", location: { name: "Toronto Islands Ferry", address: "9 Queens Quay W, Toronto", mapsUrl: "https://www.google.com/maps?q=Toronto+Islands+Ferry+Docks" } },
      { time: "13:30", title: "🥪 St. Lawrence Market", description: "Peameal bacon sandwich", icon: "🥪", isRestaurant: true, location: { name: "St. Lawrence Market", address: "93 Front St E, Toronto", mapsUrl: "https://www.google.com/maps?q=St+Lawrence+Market+Toronto" } },
      { time: "14:30", title: "🚶 Distillery District", description: "Zona peatonal, galerías, helados", icon: "🚶", location: { name: "Distillery District", address: "55 Mill St, Toronto", mapsUrl: "https://www.google.com/maps?q=Distillery+District+Toronto" } },
      { time: "17:00", title: "🛍️ Eaton Centre", description: "Compras, Time Out Market", icon: "🛍️" },
      { time: "19:00", title: "🍽️ Cena Kensington/Chinatown", description: "Thai, dim sum...", icon: "🍜", isRestaurant: true },
      { time: "21:00", title: "🚂 GO Train vuelta", description: "Último tren a Port Credit", icon: "🚂" },
    ],
  },
  {
    date: "30 ago",
    dayName: "Domingo",
    title: "🎨 Cultura + Despedida 🎉",
    subtitle: "GO Train • ROM • Cena especial",
    image: "https://images.unsplash.com/photo-1560942482-4e1677f8db42?w=800&q=80",
    gradient: "from-violet-900 via-purple-700 to-pink-400",
    activities: [
      { time: "8:30", title: "🚂 GO → Union Station", description: "Weekend Pass. Niño gratis", icon: "🚂" },
      { time: "10:00", title: "🎨 Kensington + Graffiti Alley", description: "Murales, tiendas vintage", icon: "🎨" },
      { time: "12:00", title: "🦕 Royal Ontario Museum", description: "Dinosaurios 🦖", icon: "🦖", isHighlight: true, location: { name: "ROM", address: "100 Queens Park, Toronto", mapsUrl: "https://www.google.com/maps?q=Royal+Ontario+Museum+Toronto" } },
      { time: "14:30", title: "🛍️ Últimas compras", description: "Souvenirs, maple syrup 🍁", icon: "🛍️" },
      { time: "17:00", title: "⚾ Blue Jays (si hay)", description: "Rogers Centre", icon: "⚾", location: { name: "Rogers Centre", address: "1 Blue Jays Way, Toronto", mapsUrl: "https://www.google.com/maps?q=Rogers+Centre+Toronto" } },
      { time: "19:00", title: "🌟 CENA DE DESPEDIDA 🎉", description: "Restaurante especial. Última noche", icon: "🌟", isHighlight: true, isRestaurant: true },
      { time: "21:00", title: "🚂 Último GO Train", description: "Preparar maletas ✈️", icon: "🚂" },
    ],
  },
  {
    date: "31 ago",
    dayName: "Lunes",
    title: "🌊 Port Credit + ✈️ A casa",
    subtitle: "Despedida tranqui + vuelo 19:45",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",
    gradient: "from-amber-900 via-orange-600 to-red-400",
    activities: [
      { time: "10:00", title: "🥞 Desayuno en Airbnb", description: "Cocina, vaciar nevera", icon: "🥞" },
      { time: "11:00", title: "🌊 Paseo Port Credit", description: "Faro, barcos, lago Ontario. Parking gratis", icon: "🌊", location: { name: "Port Credit Harbour", address: "Port Credit, Mississauga", mapsUrl: "https://www.google.com/maps?q=Port+Credit+Harbour+Mississauga" } },
      { time: "12:30", title: "🍔 The Port House", description: "Fish & chips, terraza junto al lago", icon: "🍔", isRestaurant: true, location: { name: "The Port House", address: "21 Lakeshore Rd W, Mississauga", mapsUrl: "https://www.google.com/maps?q=The+Port+House+Port+Credit" } },
      { time: "14:00", title: "🚗 Devolver coche YYZ", description: "Llenar gasolina antes", icon: "🚗" },
      { time: "15:00", title: "🧳 Facturar + seguridad", description: "3h antes del vuelo", icon: "🧳" },
      { time: "16:00", title: "🛍️ Duty Free", description: "Últimos regalos 🍁", icon: "🛍️" },
      { time: "19:45", title: "✈️ YYZ ✈️ BCN (+1)", description: "Llega 1 sep 9:20. 🇪🇸", icon: "✈️", isHighlight: true },
    ],
  },
];

export const checklist: ChecklistCategory[] = [
  {
    name: "🛂 Documentación",
    items: [
      { item: "Pasaportes (x3) — vigentes", note: "Revisar caducidad" },
      { item: "eTA (x3) — ya tramitada", note: "Confirmar antes de viajar" },
      { item: "Copia FÍSICA de pasaportes", note: "Separada de originales" },
      { item: "Seguro de viaje con cobertura médica", note: "IMPRESCINDIBLE" },
      { item: "Reservas Airbnb impresas", note: "Niagara + Mississauga" },
      { item: "Reserva coche alquiler + carnet", note: "Confirmación impresa" },
      { item: "Tarjetas de embarque", note: "Ida 21 ago 13:15 / Vuelta 31 19:45" },
      { item: "Dirección primo en Sarnia", note: "Para aduanas" },
    ],
  },
  {
    name: "💳 Dinero y Tarjetas",
    items: [
      { item: "Tarjeta crédito (sin comisiones)", note: "Imprescindible alquiler coche" },
      { item: "Revolut / N26", note: "Respaldo" },
      { item: "Efectivo CAD $200-300", note: "Propinas, peajes" },
      { item: "Notificar al banco", note: "Que no bloqueen" },
    ],
  },
  {
    name: "🏥 Salud",
    items: [
      { item: "Botiquín básico", note: "Apiretal, ibuprofeno" },
      { item: "Repelente de mosquitos", note: "Sarnia/Niagara" },
      { item: "Protección solar SPF 50", note: "Sol fuerte" },
      { item: "Tiritas, desinfectante", note: "" },
      { item: "Pastillas mareo", note: "Viajes en coche" },
    ],
  },
  {
    name: "👕 Ropa",
    items: [
      { item: "Camisetas manga corta", note: "5-6 c/u" },
      { item: "Pantalones cortos", note: "3-4 c/u" },
      { item: "Sudadera / chaqueta ligera", note: "1 — IMPRESCINDIBLE" },
      { item: "Chubasquero", note: "Tormentas de agosto" },
      { item: "Bañador", note: "1-2" },
      { item: "Zapatillas cómodas", note: "Se camina mucho" },
      { item: "Gorra / sombrero", note: "" },
    ],
  },
  {
    name: "🔌 Electrónica",
    items: [
      { item: "Adaptador EU→EEUU/Canadá", note: "IMPRESCINDIBLE" },
      { item: "Regleta con ups", note: "Un adaptador para todo" },
      { item: "Cargadores (x3)", note: "" },
      { item: "Power bank", note: "Excursiones" },
      { item: "Auriculares niño", note: "Vuelo + coche" },
      { item: "eSIM canadiense", note: "Airalo / Holafly" },
    ],
  },
  {
    name: "🚗 Transporte",
    items: [
      { item: "PRESTO card", note: "Entre semana" },
      { item: "Weekend Pass GO ($10/día)", note: "Sáb 29 y Dom 30" },
      { item: "Niño <12 GRATIS en GO", note: "Sin billete" },
    ],
  },
  {
    name: "🎒 Niagara (27-28)",
    items: [
      { item: "Hornblower reservar online", note: "$35/$23 CAD" },
      { item: "Journey Behind Falls reservar", note: "$24/$17 CAD" },
      { item: "Bolsa hermética móvil", note: "Hornblower" },
      { item: "Ropa seca de repuesto", note: "Cambiarse después" },
    ],
  },
];
