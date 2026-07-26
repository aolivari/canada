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
  // ── DÍA 1: VUELO ──
  {
    date: "21 ago",
    dayName: "Viernes",
    title: "✈️ Barcelona → Toronto",
    subtitle: "Vuelo + llegada",
    activities: [
      { time: "10:00", title: "Salida hacia el aeropuerto", description: "Llegar con 3h de antelación. Barcelona-El Prat (BCN)", icon: "🚗" },
      { time: "13:15", title: "✈️ VUELO BCN → YYZ", description: "Vuelo directo ~8h. Llegada 16:00 hora local (Toronto -6h España)", icon: "✈️", isHighlight: true },
      { time: "16:00", title: "Llegada a Toronto Pearson", description: "Recoger maletas, aduanas, recoger coche de alquiler", icon: "🛬", location: { name: "Toronto Pearson Airport (YYZ)", address: "6301 Silver Dart Dr, Mississauga, ON L5P 1B2", mapsUrl: "https://www.google.com/maps?q=Toronto+Pearson+International+Airport" } },
      { time: "17:30", title: "Check-in Airbnb Mississauga", description: "910 Atwater Ave, lower suite. Dejar maletas y descansar", icon: "🏠", location: { name: "Airbnb Mississauga", address: "910 Atwater Ave lower suite, Mississauga, ON L5E 1M1", mapsUrl: "https://www.google.com/maps?q=910+Atwater+Ave+Mississauga+ON" } },
      { time: "19:00", title: "Cena y paseo por Port Credit", description: "Zona del puerto, restaurantes junto al lago Ontario", icon: "🍽️", location: { name: "Port Credit", address: "Port Credit, Mississauga, ON", mapsUrl: "https://www.google.com/maps?q=Port+Credit+Mississauga" } },
    ],
  },
  // ── DÍA 2: SÁBADO TORONTO ──
  {
    date: "22 ago",
    dayName: "Sábado",
    title: "🏙️ Toronto Full",
    subtitle: "🚂 GO Train Weekend Pass $10/pers • Niño gratis 🎉",
    activities: [
      { time: "8:30", title: "Andar a Port Credit GO", description: "5 min desde el Airbnb", icon: "🚶", location: { name: "Port Credit GO Station", address: "30 Queen St E, Mississauga, ON L5G 1C2", mapsUrl: "https://www.google.com/maps?q=Port+Credit+GO+Station" } },
      { time: "9:00", title: "🚂 GO Train → Union Station", description: "Lakeshore West, 25 min. Weekend Pass $10. Niño GRATIS 🎉", icon: "🚂", isHighlight: true },
      { time: "10:00", title: "CN Tower + Ripley's Aquarium", description: "Torre emblemática + túnel de tiburones 🦈. El niño flipa", icon: "🏛️", location: { name: "CN Tower", address: "290 Bremner Blvd, Toronto, ON M5V 3L9", mapsUrl: "https://www.google.com/maps?q=CN+Tower+Toronto" } },
      { time: "12:00", title: "Ferry a Toronto Islands", description: "15 min de ferry. Centre Island: parque, playa, skyline 🌆", icon: "🚢", location: { name: "Toronto Islands Ferry", address: "9 Queens Quay W, Toronto, ON", mapsUrl: "https://www.google.com/maps?q=Toronto+Islands+Ferry+Docks" } },
      { time: "13:30", title: "🍔 St. Lawrence Market", description: "Mercado histórico. Peameal bacon sandwich 🥪", icon: "🥪", isRestaurant: true, location: { name: "St. Lawrence Market", address: "93 Front St E, Toronto, ON M5E 1C3", mapsUrl: "https://www.google.com/maps?q=St+Lawrence+Market+Toronto" } },
      { time: "14:30", title: "Distillery District + Harbourfront", description: "Zona peatonal, galerías, helados, fotos", icon: "🚶", location: { name: "Distillery District", address: "55 Mill St, Toronto, ON M5A 3C4", mapsUrl: "https://www.google.com/maps?q=Distillery+District+Toronto" } },
      { time: "17:00", title: "Eaton Centre / Yonge-Dundas", description: "Compras, Time Out Market", icon: "🛍️" },
      { time: "19:00", title: "🍽️ Cena en Kensington / Chinatown", description: "Thai, mexicano, dim sum — elegid", icon: "🍜", isRestaurant: true, location: { name: "Kensington Market", address: "Kensington Market, Toronto, ON", mapsUrl: "https://www.google.com/maps?q=Kensington+Market+Toronto" } },
      { time: "20:30", title: "🚂 GO Train vuelta a Port Credit", description: "Mirar horario del último tren", icon: "🚂" },
    ],
  },
  // ── DÍA 3: DOMINGO TORONTO ──
  {
    date: "23 ago",
    dayName: "Domingo",
    title: "🎨 Cultura + Despedida de Toronto",
    subtitle: "🚂 GO Train Weekend Pass",
    activities: [
      { time: "8:30", title: "🚂 GO Train → Union Station", description: "Weekend Pass $10. Niño GRATIS", icon: "🚂" },
      { time: "10:00", title: "Kensington Market + Graffiti Alley", description: "Murales, tiendas vintage, ambiente único", icon: "🎨", location: { name: "Graffiti Alley", address: "Graffiti Alley, Toronto, ON (Rush Ln)", mapsUrl: "https://www.google.com/maps?q=Graffiti+Alley+Toronto" } },
      { time: "12:00", title: "🦕 Royal Ontario Museum (ROM)", description: "Dinosaurios — al niño le encanta 🦖", icon: "🦖", isHighlight: true, location: { name: "Royal Ontario Museum", address: "100 Queens Park, Toronto, ON M5S 2C6", mapsUrl: "https://www.google.com/maps?q=Royal+Ontario+Museum+Toronto" } },
      { time: "13:30", title: "🍔 Comida en Yorkville", description: "Zona elegante, restaurantes cerca del ROM", icon: "🍔", isRestaurant: true },
      { time: "14:30", title: "Últimas compras + paseo", description: "Souvenirs, maple syrup, regalos 🍁", icon: "🛍️" },
      { time: "17:00", title: "⚾ Blue Jays en Rogers Centre", description: "Si hay partido. Experiencia muy canadiense ⚾", icon: "⚾", location: { name: "Rogers Centre", address: "1 Blue Jays Way, Toronto, ON M5V 1J1", mapsUrl: "https://www.google.com/maps?q=Rogers+Centre+Toronto" } },
      { time: "19:00", title: "🍽️ CENA DE DESPEDIDA 🎉", description: "The Keg Steakhouse o vuestro favorito", icon: "🌟", isHighlight: true, isRestaurant: true },
      { time: "21:00", title: "🚂 Último GO Train a Port Credit", description: "", icon: "🚂" },
    ],
  },
  // ── DÍA 4-6: SARNIA ──
  {
    date: "24-26 ago",
    dayName: "Lun-Mié",
    title: "🏠 Sarnia — Casa del primo",
    subtitle: "Días en familia. Lago Hurón, barbacoas",
    activities: [
      { time: "Día 1", title: "Llegada y relax", description: "Check-in en casa del primo. Tarde de piscina / lago", icon: "🏠" },
      { time: "Día 2", title: "Canatara Park + Lago Hurón", description: "Playa, senderos, barbacoa familiar", icon: "🌊", location: { name: "Canatara Park", address: "1200 Lake Chipico Dr, Sarnia, ON N7S 6K7", mapsUrl: "https://www.google.com/maps?q=Canatara+Park+Sarnia" } },
      { time: "Día 3", title: "Excursión: Point Pelee", description: "El punto más sur de Canadá mainland (o día libre)", icon: "🌲", location: { name: "Point Pelee National Park", address: "1118 Point Pelee Dr, Leamington, ON N8H 3V4", mapsUrl: "https://www.google.com/maps?q=Point+Pelee+National+Park" } },
    ],
  },
  // ── DÍA 7: JUEVES NIAGARA ──
  {
    date: "27 ago",
    dayName: "Jueves",
    title: "🚗 Sarnia → Niagara Falls 💥",
    subtitle: "DÍA FUERTE — Journey + Hornblower + 🎆",
    activities: [
      { time: "7:30", title: "🚗 Salida de Sarnia", description: "Desayuno en ruta (Tim Hortons 🍩)", icon: "🚗" },
      { time: "11:30", title: "Check-in Airbnb Niagara Falls", description: "5395 River Road, L2E 3H1. Tiene cocina 🍳", icon: "🏠", isHighlight: true, location: { name: "Airbnb Niagara Falls", address: "5395 River Road, Niagara Falls, ON L2E 3H1", mapsUrl: "https://www.google.com/maps?q=5395+River+Road+Niagara+Falls" } },
      { time: "12:30", title: "🏔️ Journey Behind the Falls", description: "Túneles excavados detrás de la catarata. Poncho incluido", icon: "🏔️", isHighlight: true, location: { name: "Journey Behind the Falls", address: "6650 Niagara Pkwy, Niagara Falls, ON L2E 6T2", mapsUrl: "https://www.google.com/maps?q=Journey+Behind+the+Falls" } },
      { time: "13:30", title: "🍝 Weinkeller (junto al Airbnb)", description: "Pasta artesanal, pizzas. A 2 min andando de casa", icon: "🍝", isRestaurant: true, location: { name: "Weinkeller", address: "5395 River Rd, Niagara Falls, ON L2E 3H1", mapsUrl: "https://www.google.com/maps?q=Weinkeller+Niagara+Falls" } },
      { time: "15:00", title: "🎡 Clifton Hill", description: "SkyWheel, mini golf, tiendas", icon: "🎡", location: { name: "Clifton Hill", address: "Clifton Hill, Niagara Falls, ON", mapsUrl: "https://www.google.com/maps?q=Clifton+Hill+Niagara+Falls" } },
      { time: "16:30", title: "🚢 HORNBLOWER BOAT TOUR 🌊", description: "¡IMPRESCINDIBLE! Bolsa hermética para el móvil. SALÍS EMPAPADOS", icon: "🚢", isHighlight: true, location: { name: "Hornblower Niagara Cruises", address: "5920 Niagara Pkwy, Niagara Falls, ON L2E 6X8", mapsUrl: "https://www.google.com/maps?q=Hornblower+Niagara+Cruises" } },
      { time: "17:30", title: "🏠 Ducha en Airbnb", description: "Ropa seca de repuesto. Cocina para snack", icon: "🏠" },
      { time: "19:00", title: "🌟 CENA: Table Rock House Restaurant", description: "Cocina canadiense con VISTAS a las cataratas. Reservar mesa", icon: "🌟", isHighlight: true, isRestaurant: true, location: { name: "Table Rock House Restaurant", address: "6650 Niagara Pkwy, Niagara Falls, ON L2E 6T2", mapsUrl: "https://www.google.com/maps?q=Table+Rock+House+Restaurant" } },
      { time: "22:00", title: "🎆 FUEGOS ARTIFICIALES", description: "Queen Victoria Park. Llegar a las 21:30 para buen sitio", icon: "🎆", isHighlight: true, location: { name: "Queen Victoria Park", address: "6345 Niagara Pkwy, Niagara Falls, ON L2E 6T2", mapsUrl: "https://www.google.com/maps?q=Queen+Victoria+Park+Niagara+Falls" } },
    ],
  },
  // ── DÍA 8: VIERNES CLIFTON HILL + RUTA ──
  {
    date: "28 ago",
    dayName: "Viernes",
    title: "🕹️ Clifton Hill + 🌲 Ruta Hamilton",
    subtitle: "Karting, hamburguesas, cascadas",
    activities: [
      { time: "9:00", title: "🥞 Desayuno en Airbnb", description: "Cocina completa. Recoger maletas después", icon: "🥞" },
      { time: "10:00", title: "🕹️ Ripley's Believe It or Not", description: "Rarezas, ilusiones, interactivo — Clifton Hill", icon: "🕹️", location: { name: "Ripley's Believe It or Not", address: "4960 Clifton Hill, Niagara Falls, ON L2G 3N4", mapsUrl: "https://www.google.com/maps?q=Ripley+Believe+it+or+not+Niagara+Falls" } },
      { time: "11:00", title: "🏎️ Karting Niagara Speedway 🏁", description: "Montaña rusa + karting de 2 pisos. EL NIÑO FLIPA", icon: "🏎️", isHighlight: true, location: { name: "Niagara Speedway", address: "4960 Clifton Hill, Niagara Falls, ON L2G 3N4", mapsUrl: "https://www.google.com/maps?q=Niagara+Speedway" } },
      { time: "12:00", title: "🥇 The Blind Pig (hamburguesas)", description: "Las mejores hamburguesas de Niagara 🏆", icon: "🍔", isRestaurant: true, location: { name: "The Blind Pig", address: "6689 Lundy's Lane, Niagara Falls, ON L2G 1V4", mapsUrl: "https://www.google.com/maps?q=The+Blind+Pig+Niagara+Falls" } },
      { time: "13:00", title: "🚗 Salida a Hamilton", description: "20 min por la QEW", icon: "🚗" },
      { time: "13:30", title: "🌲 RUTA: Albion + Buttermilk Falls", description: "3.7 km fácil. Parking gratis Mountain Brow Blvd. 1h-1h15", icon: "🥾", isHighlight: true, isHike: true, location: { name: "Albion Falls (parking)", address: "Mountain Brow Blvd, Hamilton, ON L8K 6J6", mapsUrl: "https://www.google.com/maps?q=Mountain+Brow+Blvd+Hamilton+Albion+Falls" } },
      { time: "15:00", title: "🚗 Hamilton → Mississauga", description: "40 min por QEW", icon: "🚗" },
      { time: "~16:30", title: "🏙️ Llegada Airbnb Atwater Ave", description: "Descanso, preparar Toronto del sábado", icon: "🏠" },
    ],
  },
  // ── DÍA 9: SÁBADO TORONTO ──
  {
    date: "29 ago",
    dayName: "Sábado",
    title: "🏙️ Toronto Full (vuelta)",
    subtitle: "🚂 GO Train Weekend Pass $10/pers",
    activities: [
      { time: "8:30", title: "🚂 GO Train → Union Station", description: "Weekend Pass $10. Niño GRATIS", icon: "🚂" },
      { time: "10:00", title: "CN Tower + Ripley's Aquarium", description: "Repetir si queréis o hacer algo diferente", icon: "🏛️" },
      { time: "12:00", title: "Ferry a Toronto Islands", description: "Centre Island: playa, skyline, picnic", icon: "🚢" },
      { time: "13:30", title: "🥪 St. Lawrence Market", description: "Mercado histórico", icon: "🥪", isRestaurant: true },
      { time: "15:00", title: "Distillery District", description: "Arte, galerías, helados", icon: "🚶" },
      { time: "17:00", title: "🛍️ Compras Eaton Centre", description: "Últimas compras, Time Out Market", icon: "🛍️" },
      { time: "19:00", title: "🍽️ Cena en Kensington / Chinatown", description: "", icon: "🍜", isRestaurant: true },
      { time: "21:00", title: "🚂 GO Train vuelta", description: "Último tren a Port Credit", icon: "🚂" },
    ],
  },
  // ── DÍA 10: DOMINGO TORONTO ──
  {
    date: "30 ago",
    dayName: "Domingo",
    title: "🎨 Cultura + Despedida",
    subtitle: "🚂 GO Train Weekend Pass $10/pers",
    activities: [
      { time: "8:30", title: "🚂 GO Train → Union Station", description: "Weekend Pass. Niño GRATIS", icon: "🚂" },
      { time: "10:00", title: "Kensington + Graffiti Alley", description: "Murales, tiendas vintage", icon: "🎨" },
      { time: "12:00", title: "🦕 Royal Ontario Museum (ROM)", description: "Dinosaurios 🦖", icon: "🦖", isHighlight: true },
      { time: "14:30", title: "Últimas compras", description: "Souvenirs, maple syrup 🍁", icon: "🛍️" },
      { time: "17:00", title: "⚾ Blue Jays (si hay)", description: "En Rogers Centre", icon: "⚾" },
      { time: "19:00", title: "🍽️ CENA DE DESPEDIDA 🎉", description: "Restaurante especial para cerrar el viaje", icon: "🌟", isHighlight: true, isRestaurant: true },
      { time: "21:00", title: "🚂 Último GO Train", description: "A preparar maletas ✈️", icon: "🚂" },
    ],
  },
  // ── DÍA 11: LUNES VUELO ──
  {
    date: "31 ago",
    dayName: "Lunes",
    title: "🌊 Despedida + ✈️ A casa",
    subtitle: "Port Credit, coche aeropuerto, vuelo 19:45",
    activities: [
      { time: "10:00", title: "🥞 Desayuno en Airbnb", description: "Cocina, vaciar nevera", icon: "🥞" },
      { time: "11:00", title: "🌊 Paseo por Port Credit", description: "A 5 min del Airbnb. Faro, barcos, lago Ontario. Parking gratis 🅿️", icon: "🌊", location: { name: "Port Credit Harbour", address: "Port Credit, Mississauga, ON", mapsUrl: "https://www.google.com/maps?q=Port+Credit+Harbour+Mississauga" } },
      { time: "12:30", title: "🍔 The Port House", description: "Fish & chips, hamburguesas. Terraza junto al lago", icon: "🍔", isRestaurant: true, location: { name: "The Port House", address: "21 Lakeshore Rd W, Mississauga, ON L5H 1G2", mapsUrl: "https://www.google.com/maps?q=The+Port+House+Port+Credit" } },
      { time: "13:30", title: "🧳 Recoger maletas", description: "", icon: "🧳" },
      { time: "14:00", title: "🚗 Devolver coche en YYZ", description: "Llenar gasolina antes de llegar al aeropuerto", icon: "🚗" },
      { time: "15:00", title: "Facturar + seguridad", description: "3h antes del vuelo", icon: "🧳" },
      { time: "16:00", title: "🛍️ Duty Free", description: "Últimos regalos, maple syrup 🍁", icon: "🛍️" },
      { time: "19:45", title: "✈️ YYZ → BCN (llega 1 sep 9:20)", description: "Vuelo nocturno. 🇪🇸", icon: "✈️", isHighlight: true },
    ],
  },
];

export const checklist: ChecklistCategory[] = [
  {
    name: "🛂 Documentación",
    items: [
      { item: "Pasaportes (x3) — vigentes", note: "Revisar caducidad" },
      { item: "eTA (x3) — ya tramitada", note: "Confirmar antes de viajar" },
      { item: "Copia FÍSICA de pasaportes", note: "Guardada separada de originales" },
      { item: "Copia digital pasaportes + eTA", note: "Móvil / nube" },
      { item: "Seguro de viaje con cobertura médica", note: "IMPRESCINDIBLE — Canadá carísimo en salud" },
      { item: "Reservas hotel impresas", note: "Toronto + Niagara Falls" },
      { item: "Reserva coche de alquiler + carnet", note: "Confirmación impresa" },
      { item: "Tarjetas de embarque", note: "Ida 21 ago 13:15 / Vuelta 31 ago 19:45" },
      { item: "Dirección primo en Sarnia", note: "Para formulario aduanas" },
    ],
  },
  {
    name: "💳 Dinero y Tarjetas",
    items: [
      { item: "Tarjeta de crédito (sin comisiones)", note: "Imprescindible para alquiler coche" },
      { item: "Tarjeta débito / Revolut / N26", note: "Respaldo" },
      { item: "Efectivo CAD $200-300", note: "Propinas, mercadillos, peajes" },
      { item: "Notificar al banco el viaje", note: "Que no bloqueen tarjetas" },
    ],
  },
  {
    name: "🏥 Salud y Farmacia",
    items: [
      { item: "Botiquín básico", note: "Apiretal/Dalsy, ibuprofeno, paracetamol" },
      { item: "Antihistamínicos (x3)", note: "Polen / picaduras" },
      { item: "Repelente de mosquitos", note: "IMPORTANTE — Sarnia/Niagara cerca de agua" },
      { item: "Protección solar SPF 50 (x3)", note: "Sol canadiense fuerte" },
      { item: "After-sun / crema hidratante", note: "" },
      { item: "Tiritas, desinfectante, gasas", note: "" },
      { item: "Pastillas para mareo", note: "Viajes en coche largos" },
    ],
  },
  {
    name: "👕 Ropa — Adultos (cada uno)",
    items: [
      { item: "Camisetas manga corta", note: "5-6" },
      { item: "Camisetas manga larga finas", note: "1-2 para noches" },
      { item: "Pantalones cortos", note: "3-4" },
      { item: "Pantalones largos", note: "2" },
      { item: "Sudadera / chaqueta ligera", note: "1 — IMPRESCINDIBLE noches Niagara" },
      { item: "Chubasquero / impermeable", note: "1 — tormentas repentinas agosto" },
      { item: "Ropa interior + calcetines", note: "7 pares c/u" },
      { item: "Bañador", note: "1-2 (piscinas / lago Hurón)" },
      { item: "Zapatillas deportivas cómodas", note: "Se camina mucho en Toronto" },
      { item: "Chanclas / sandalias", note: "" },
      { item: "Gorra / sombrero", note: "Sol fuerte" },
      { item: "Ropa para cena / salir", note: "Restaurante bueno en Toronto" },
    ],
  },
  {
    name: "👕 Ropa — Niño (10 años)",
    items: [
      { item: "Camisetas manga corta", note: "5-6" },
      { item: "Pantalones cortos", note: "3-4" },
      { item: "Sudadera / chaqueta ligera", note: "1 — IMPRESCINDIBLE" },
      { item: "Chubasquero", note: "1" },
      { item: "Ropa interior + calcetines", note: "7 pares" },
      { item: "Bañador", note: "1-2" },
      { item: "Zapatillas deportivas", note: "Cómodas para caminar" },
      { item: "Gorra", note: "" },
      { item: "Mochila pequeña", note: "Para excursiones del día" },
    ],
  },
  {
    name: "🔌 Electrónica",
    items: [
      { item: "Adaptador enchufe EU→EEUU/Canadá", note: "IMPRESCINDIBLE — clavijas planas" },
      { item: "Regleta con ups", note: "Así necesitáis UN adaptador para todo" },
      { item: "Cargadores de móvil (x3)", note: "" },
      { item: "Power bank 10.000+ mAh", note: "Excursiones largas" },
      { item: "Auriculares para el niño", note: "Vuelo + coche" },
      { item: "Cable USB-C / Lightning extra", note: "" },
      { item: "eSIM / SIM canadiense", note: "Airalo, Holafly" },
    ],
  },
  {
    name: "🚗 Transporte Público",
    items: [
      { item: "PRESTO card (tarjeta recargable)", note: "Para entre semana" },
      { item: "🎫 Weekend Pass GO Transit ($10/día)", note: "Sáb 22, Dom 23, Sáb 29, Dom 30" },
      { item: "Niño <12 años GRATIS en GO Transit", note: "No necesita billete" },
      { item: "MiWay + GO = gratis con PRESTO", note: "Al hacer transbordo" },
      { item: "App: GO Transit + Moovit", note: "Horarios en tiempo real" },
    ],
  },
  {
    name: "🎒 Niagara Falls (27-28)",
    items: [
      { item: "Hornblower — reservar online (día 27, ~16:30)", note: "$35 CAD adulto / $23 CAD niño" },
      { item: "Journey Behind the Falls — reservar online", note: "$24 CAD adulto / $17 CAD niño" },
      { item: "Bolsa hermética para el móvil", note: "Hornblower = empapados" },
      { item: "Ropa de repuesto en el coche (x3)", note: "Cambiarse después del Hornblower" },
      { item: "Cena temprano (19:00-19:30)", note: "Para llegar a las 21:30 a ver fuegos" },
      { item: "Mantita ligera / chaqueta", note: "Noche viendo fuegos artificiales" },
    ],
  },
];
