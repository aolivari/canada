export interface Location {
  name: string;
  address: string;
  mapsUrl: string;
}

export interface Activity {
  time: string;
  title: string;
  description: string;
  icon: string;          // Font Awesome class, e.g. "fa-plane-departure"
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
  locationLabel: string;
  activities: Activity[];
  coords: { lat: number; lon: number };
}

export interface ChecklistCategory {
  name: string;
  icon: string;          // Font Awesome class
  items: { item: string; note: string }[];
}

export const tripTitle = "Canadá 2026";
export const tripSubtitle = "Antonio, Mujer e Hijo (10 años)";
export const tripDates = "21 agosto — 1 septiembre";

// ─── UNSPLASH PHOTOS — verified working URLs ───────────────────────
const photos = {
  airport:     "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80",           // airplane wing + clouds
  sarnia:      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&q=80",           // camping tent + lake + nature
  niagara:     "https://images.unsplash.com/photo-1533094602577-198d3beab8ea?w=800&q=80",           // Niagara Falls — mist + rainbow
  cliftonHill: "https://images.unsplash.com/photo-1598473801496-5b0e74340936?w=800&q=80",           // Hamilton waterfall
  toronto:     "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800&q=80",           // Toronto skyline CN Tower
  rom:         "https://images.unsplash.com/photo-1575503802870-45de6a6217c8?w=800&q=80",           // museum / cultural building
  portCredit:  "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",              // harbour / boats / waterfront
};

// ─── DAYS ──────────────────────────────────────────────────────────
export const days: Day[] = [
  {
    date: "21 ago",
    dayName: "Viernes",
    title: "Barcelona — Sarnia",
    subtitle: "Vuelo BCN 13:15 · Llegada YYZ 16:00 · Coche 3h",
    image: photos.airport,
    locationLabel: "Toronto / Sarnia",
    coords: { lat: 43.6532, lon: -79.3832 },
    activities: [
      { time: "10:00", title: "Salida al aeropuerto", description: "Llegar con 3h de antelación. Barcelona–El Prat T1", icon: "fa-taxi" },
      { time: "13:15", title: "Vuelo BCN — YYZ", description: "Directo ~8h. Llegada 16:00 hora local (−6h España)", icon: "fa-plane-departure", isHighlight: true },
      { time: "16:00", title: "Llegada Toronto Pearson", description: "Recogida de maletas, aduanas, coche de alquiler", icon: "fa-suitcase-rolling", location: { name: "Toronto Pearson (YYZ)", address: "6301 Silver Dart Dr, Mississauga, ON", mapsUrl: "https://www.google.com/maps?q=Toronto+Pearson+International+Airport" } },
      { time: "17:00", title: "Road trip a Sarnia", description: "Autopista 401 al oeste — 3 horas de ruta", icon: "fa-car-side" },
      { time: "~20:00", title: "Llegada casa del primo", description: "Cena familiar de bienvenida en Sarnia", icon: "fa-champagne-glasses", isHighlight: true },
    ],
  },
  {
    date: "22–26 ago",
    dayName: "Sáb–Mié",
    title: "Sarnia — Lago Hurón",
    subtitle: "5 días en familia con el primo",
    image: photos.sarnia,
    locationLabel: "Sarnia, Ontario",
    coords: { lat: 42.9748, lon: -82.4062 },
    activities: [
      { time: "22 ago", title: "Canatara Park — playa", description: "Lago Hurón, agua dulce cristalina. Arena fina", icon: "fa-umbrella-beach", isHighlight: true, location: { name: "Canatara Park", address: "1200 Lake Chipico Dr, Sarnia, ON", mapsUrl: "https://www.google.com/maps?q=Canatara+Park+Sarnia" } },
      { time: "23 ago", title: "Día en familia", description: "Barbacoa en casa, paseos, lo que surja", icon: "fa-people-group" },
      { time: "24 ago", title: "Point Pelee National Park", description: "Punto más al sur de Canadá mainland. Naturaleza pura", icon: "fa-tree", location: { name: "Point Pelee", address: "1118 Point Pelee Dr, Leamington, ON", mapsUrl: "https://www.google.com/maps?q=Point+Pelee+National+Park" } },
      { time: "25 ago", title: "Día libre — relax", description: "Playa, descanso, disfrutar del lago", icon: "fa-water" },
      { time: "26 ago", title: "Preparar maletas", description: "Mañana comienza la aventura: Niagara Falls", icon: "fa-suitcase" },
    ],
  },
  {
    date: "27 ago",
    dayName: "Jueves",
    title: "Niagara Falls",
    subtitle: "Journey Behind the Falls · Hornblower · Fuegos 22:00",
    image: photos.niagara,
    locationLabel: "Niagara Falls, Ontario",
    coords: { lat: 43.0828, lon: -79.0742 },
    activities: [
      { time: "7:30", title: "Salida desde Sarnia", description: "Desayuno en ruta — Tim Hortons", icon: "fa-car-side" },
      { time: "11:30", title: "Check-in Airbnb Niagara", description: "5395 River Rd, L2E 3H1 — con cocina", icon: "fa-house", location: { name: "Airbnb Niagara", address: "5395 River Road, Niagara Falls, ON L2E 3H1", mapsUrl: "https://www.google.com/maps?q=5395+River+Road+Niagara+Falls" } },
      { time: "12:30", title: "Journey Behind the Falls", description: "Túneles tras la catarata. Poncho incluido. $24/$17 CAD", icon: "fa-water", isHighlight: true, location: { name: "Journey Behind the Falls", address: "6650 Niagara Pkwy, Niagara Falls, ON", mapsUrl: "https://www.google.com/maps?q=Journey+Behind+the+Falls" } },
      { time: "13:30", title: "Weinkeller", description: "Pasta artesanal y pizzas — a 2 min del Airbnb", icon: "fa-utensils", isRestaurant: true, location: { name: "Weinkeller", address: "5395 River Rd, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Weinkeller+Niagara+Falls" } },
      { time: "15:00", title: "Clifton Hill", description: "SkyWheel, mini golf, tiendas", icon: "fa-ticket", location: { name: "Clifton Hill", address: "Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Clifton+Hill+Niagara+Falls" } },
      { time: "16:30", title: "Hornblower Boat Tour", description: "Bolsa hermética para el móvil. Saldréis EMPAPADOS. $35/$23 CAD", icon: "fa-ship", isHighlight: true, location: { name: "Hornblower Niagara Cruises", address: "5920 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Hornblower+Niagara+Cruises" } },
      { time: "17:30", title: "Ducha y cambio de ropa", description: "Ropa seca de repuesto en el Airbnb", icon: "fa-shower" },
      { time: "19:00", title: "Table Rock House Restaurant", description: "Cocina canadiense con vistas a las cataratas. RESERVAR", icon: "fa-utensils", isHighlight: true, isRestaurant: true, location: { name: "Table Rock House Restaurant", address: "6650 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Table+Rock+House+Restaurant" } },
      { time: "22:00", title: "Fuegos artificiales", description: "Queen Victoria Park — llegar 21:30. Mantita", icon: "fa-burst", isHighlight: true, location: { name: "Queen Victoria Park", address: "6345 Niagara Pkwy, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Queen+Victoria+Park+Niagara+Falls" } },
    ],
  },
  {
    date: "28 ago",
    dayName: "Viernes",
    title: "Clifton Hill + Hamilton",
    subtitle: "Karting · The Blind Pig · Albion Falls 3.7km",
    image: photos.cliftonHill,
    locationLabel: "Niagara / Hamilton",
    coords: { lat: 43.2557, lon: -79.8711 },
    activities: [
      { time: "9:00", title: "Desayuno en Airbnb", description: "Cocina propia. Recoger maletas después", icon: "fa-mug-hot" },
      { time: "10:00", title: "Ripley's Believe It or Not", description: "Rarezas, ilusiones ópticas — Clifton Hill", icon: "fa-eye", location: { name: "Ripley's", address: "4960 Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Ripley+Believe+it+or+not+Niagara+Falls" } },
      { time: "11:00", title: "Karting Niagara Speedway", description: "Montaña rusa + karting de 2 pisos. El niño flipará", icon: "fa-flag-checkered", isHighlight: true, location: { name: "Niagara Speedway", address: "4960 Clifton Hill, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=Niagara+Speedway" } },
      { time: "12:00", title: "The Blind Pig", description: "Las mejores hamburguesas de Niagara. Casual", icon: "fa-burger", isHighlight: true, isRestaurant: true, location: { name: "The Blind Pig", address: "6689 Lundy's Lane, Niagara Falls", mapsUrl: "https://www.google.com/maps?q=The+Blind+Pig+Niagara+Falls" } },
      { time: "13:00", title: "Ruta a Hamilton", description: "20 min por la QEW", icon: "fa-car-side" },
      { time: "13:30", title: "Albion + Buttermilk Falls", description: "Ruta 3.7 km fácil. Parking gratis en Mountain Brow Blvd", icon: "fa-person-hiking", isHighlight: true, isHike: true, location: { name: "Albion Falls", address: "Mountain Brow Blvd, Hamilton, ON", mapsUrl: "https://www.google.com/maps?q=Mountain+Brow+Blvd+Hamilton+Albion+Falls" } },
      { time: "15:30", title: "Hamilton — Mississauga", description: "Llegada ~16:30 al Airbnb de Atwater Ave", icon: "fa-car-side" },
      { time: "16:30", title: "Check-in Airbnb Mississauga", description: "910 Atwater Ave lower suite, L5E 1M1", icon: "fa-house", location: { name: "Airbnb Mississauga", address: "910 Atwater Ave, Mississauga, ON L5E 1M1", mapsUrl: "https://www.google.com/maps?q=910+Atwater+Ave+Mississauga" } },
    ],
  },
  {
    date: "29 ago",
    dayName: "Sábado",
    title: "Toronto — Día completo",
    subtitle: "GO Train Weekend Pass $10 · Niño gratis",
    image: photos.toronto,
    locationLabel: "Toronto, Ontario",
    coords: { lat: 43.6532, lon: -79.3832 },
    activities: [
      { time: "8:30", title: "Port Credit GO Station", description: "Atwater Ave — 5 min andando a la estación", icon: "fa-train", location: { name: "Port Credit GO", address: "30 Queen St E, Mississauga", mapsUrl: "https://www.google.com/maps?q=Port+Credit+GO+Station" } },
      { time: "9:00", title: "GO Train — Union Station", description: "Lakeshore West, 25 min. Weekend Pass $10. Niño GRATIS", icon: "fa-train-subway", isHighlight: true },
      { time: "10:00", title: "CN Tower + Aquarium", description: "Vistas 360° + túnel de tiburones", icon: "fa-tower-broadcast", location: { name: "CN Tower", address: "290 Bremner Blvd, Toronto", mapsUrl: "https://www.google.com/maps?q=CN+Tower+Toronto" } },
      { time: "12:00", title: "Ferry a Toronto Islands", description: "15 min de ferry. Playas y skyline espectacular", icon: "fa-sailboat", location: { name: "Toronto Islands Ferry", address: "9 Queens Quay W, Toronto", mapsUrl: "https://www.google.com/maps?q=Toronto+Islands+Ferry+Docks" } },
      { time: "13:30", title: "St. Lawrence Market", description: "Peameal bacon sandwich — imprescindible", icon: "fa-store", isRestaurant: true, location: { name: "St. Lawrence Market", address: "93 Front St E, Toronto", mapsUrl: "https://www.google.com/maps?q=St+Lawrence+Market+Toronto" } },
      { time: "14:30", title: "Distillery District", description: "Zona peatonal, galerías de arte, helados artesanos", icon: "fa-palette", location: { name: "Distillery District", address: "55 Mill St, Toronto", mapsUrl: "https://www.google.com/maps?q=Distillery+District+Toronto" } },
      { time: "17:00", title: "Eaton Centre", description: "Compras, Time Out Market para merienda", icon: "fa-bag-shopping" },
      { time: "19:00", title: "Cena Kensington / Chinatown", description: "Thai, dim sum, mil opciones", icon: "fa-bowl-food", isRestaurant: true },
      { time: "21:00", title: "GO Train de vuelta", description: "Último tren Lakeshore West a Port Credit", icon: "fa-train-subway" },
    ],
  },
  {
    date: "30 ago",
    dayName: "Domingo",
    title: "Cultura + Despedida",
    subtitle: "ROM dinosaurios · Kensington · Cena especial",
    image: photos.rom,
    locationLabel: "Toronto, Ontario",
    coords: { lat: 43.6532, lon: -79.3832 },
    activities: [
      { time: "8:30", title: "GO Train — Union Station", description: "Weekend Pass $10. Niño gratis", icon: "fa-train-subway" },
      { time: "10:00", title: "Kensington + Graffiti Alley", description: "Murales, tiendas vintage, ambiente bohemio", icon: "fa-palette" },
      { time: "12:00", title: "Royal Ontario Museum", description: "Dinosaurios, momias, historia natural. El niño lo amará", icon: "fa-landmark", isHighlight: true, location: { name: "ROM", address: "100 Queens Park, Toronto", mapsUrl: "https://www.google.com/maps?q=Royal+Ontario+Museum+Toronto" } },
      { time: "14:30", title: "Últimas compras", description: "Souvenirs, sirope de arce, recuerdos", icon: "fa-bag-shopping" },
      { time: "17:00", title: "Blue Jays (si hay partido)", description: "Rogers Centre — béisbol en directo", icon: "fa-baseball", location: { name: "Rogers Centre", address: "1 Blue Jays Way, Toronto", mapsUrl: "https://www.google.com/maps?q=Rogers+Centre+Toronto" } },
      { time: "19:00", title: "Cena de despedida", description: "Restaurante especial. Última noche en Toronto", icon: "fa-champagne-glasses", isHighlight: true, isRestaurant: true },
      { time: "21:00", title: "Último GO Train", description: "Vuelta a Mississauga. Preparar maletas", icon: "fa-train-subway" },
    ],
  },
  {
    date: "31 ago",
    dayName: "Lunes",
    title: "Port Credit + Vuelo",
    subtitle: "Mañana tranquila · Vuelo YYZ 19:45 — BCN 9:20 (+1)",
    image: photos.portCredit,
    locationLabel: "Mississauga / YYZ",
    coords: { lat: 43.5836, lon: -79.6373 },
    activities: [
      { time: "10:00", title: "Desayuno en Airbnb", description: "Cocina propia. Vaciar nevera, recoger todo", icon: "fa-mug-hot" },
      { time: "11:00", title: "Paseo por Port Credit", description: "Faro, barcos, lago Ontario. Parking gratis", icon: "fa-person-walking", location: { name: "Port Credit Harbour", address: "Port Credit, Mississauga", mapsUrl: "https://www.google.com/maps?q=Port+Credit+Harbour+Mississauga" } },
      { time: "12:30", title: "The Port House", description: "Fish & chips en terraza junto al lago. Último almuerzo", icon: "fa-fish", isHighlight: true, isRestaurant: true, location: { name: "The Port House", address: "21 Lakeshore Rd W, Mississauga", mapsUrl: "https://www.google.com/maps?q=The+Port+House+Port+Credit" } },
      { time: "14:00", title: "Devolver coche en YYZ", description: "Llenar depósito de gasolina antes", icon: "fa-car-side" },
      { time: "15:00", title: "Facturar + seguridad", description: "3 horas antes del vuelo", icon: "fa-shield-halved" },
      { time: "16:00", title: "Duty Free", description: "Últimos regalos y caprichos", icon: "fa-bag-shopping" },
      { time: "19:45", title: "Vuelo YYZ — BCN (+1)", description: "Llegada 1 septiembre 9:20. De vuelta a casa", icon: "fa-plane-arrival", isHighlight: true },
    ],
  },
];

// ─── CHECKLIST COMPLETO (from Excel) ───────────────────────────────
export const checklist: ChecklistCategory[] = [
  {
    name: "Documentación",
    icon: "fa-id-card",
    items: [
      { item: "Pasaportes (x3) — vigentes", note: "Revisar caducidad" },
      { item: "eTA (x3) — ya tramitada", note: "Confirmar antes de viajar" },
      { item: "Copia FÍSICA de pasaportes", note: "Guardada separada de originales" },
      { item: "Copia digital pasaportes + eTA", note: "Móvil / nube" },
      { item: "Tarjeta sanitaria europea (x3)", note: "En Canadá no sirve — contratar seguro" },
      { item: "Seguro de viaje con cobertura médica", note: "IMPRESCINDIBLE — Canadá carísimo en salud" },
      { item: "Reservas Airbnb impresas", note: "Niagara + Mississauga" },
      { item: "Reserva coche alquiler + carnet", note: "Confirmación impresa" },
      { item: "Carnet de conducir español", note: "Válido para turismo" },
      { item: "Tarjetas de embarque (digital + papel)", note: "Ida: 21 ago 13:15 BCN → 16:00 YYZ" },
      { item: "Dirección y teléfono del primo en Sarnia", note: "Para formulario de aduanas" },
      { item: "Dirección Airbnb Mississauga", note: "910 Atwater Avenue, lower suite, L5E 1M1" },
    ],
  },
  {
    name: "Dinero y Tarjetas",
    icon: "fa-credit-card",
    items: [
      { item: "Tarjeta de crédito (sin comisiones extranjero)", note: "Imprescindible para alquiler coche" },
      { item: "Tarjeta débito / Revolut / N26", note: "Respaldo" },
      { item: "Efectivo CAD $200–300", note: "Propinas, mercadillos, peajes" },
      { item: "Notificar al banco el viaje", note: "Que no bloqueen tarjetas" },
      { item: "Cartera/portadocumentos con RFID", note: "" },
    ],
  },
  {
    name: "Salud y Farmacia",
    icon: "fa-kit-medical",
    items: [
      { item: "Botiquín: Apiretal/Dalsy, ibuprofeno, paracetamol", note: "" },
      { item: "Antihistamínicos (x3)", note: "Polen / picaduras" },
      { item: "Repelente de mosquitos", note: "Sarnia/Niagara cerca de agua" },
      { item: "Protección solar SPF 50 (x3)", note: "Sol canadiense fuerte" },
      { item: "After-sun / crema hidratante", note: "" },
      { item: "Tiritas, desinfectante, gasas", note: "" },
      { item: "Pastillas para mareo", note: "Viajes en coche largos" },
      { item: "Gafas de sol (graduadas si aplica)", note: "" },
      { item: "Medicación recetada con receta original", note: "En inglés mejor" },
      { item: "Termómetro", note: "" },
    ],
  },
  {
    name: "Ropa — Adultos",
    icon: "fa-shirt",
    items: [
      { item: "Camisetas manga corta", note: "5–6 cada uno" },
      { item: "Camisetas manga larga finas", note: "1–2 (para noches)" },
      { item: "Pantalones cortos", note: "3–4" },
      { item: "Pantalones largos (vaqueros/chinos)", note: "2" },
      { item: "Sudadera / chaqueta ligera", note: "IMPRESCINDIBLE — noches Niagara" },
      { item: "Chubasquero / impermeable plegable", note: "Tormentas repentinas agosto" },
      { item: "Ropa interior + calcetines", note: "7 pares" },
      { item: "Pijama", note: "1–2" },
      { item: "Bañador", note: "1–2 (piscinas / lago Hurón)" },
      { item: "Zapatillas deportivas cómodas", note: "Se camina mucho en Toronto" },
      { item: "Chanclas / sandalias", note: "" },
      { item: "Gorra / sombrero", note: "Sol fuerte" },
      { item: "Ropa para cena / salir", note: "Algún restaurante bueno en Toronto" },
    ],
  },
  {
    name: "Ropa — Niño (10 años)",
    icon: "fa-child",
    items: [
      { item: "Camisetas manga corta", note: "5–6" },
      { item: "Camisetas manga larga finas", note: "1–2" },
      { item: "Pantalones cortos", note: "3–4" },
      { item: "Pantalones largos", note: "2" },
      { item: "Sudadera / chaqueta ligera", note: "IMPRESCINDIBLE" },
      { item: "Chubasquero", note: "1" },
      { item: "Ropa interior + calcetines", note: "7 pares" },
      { item: "Pijama", note: "1–2" },
      { item: "Bañador", note: "1–2" },
      { item: "Zapatillas deportivas", note: "Cómodas para caminar" },
      { item: "Chanclas / sandalias", note: "" },
      { item: "Gorra", note: "" },
      { item: "Mochila pequeña", note: "" },
    ],
  },
  {
    name: "Electrónica",
    icon: "fa-plug",
    items: [
      { item: "Adaptador enchufe EU → Canadá (tipo A/B)", note: "IMPRESCINDIBLE — clavijas planas" },
      { item: "Regleta con UPS", note: "Así necesitáis UN adaptador para todo" },
      { item: "Cargadores de móvil (x3)", note: "" },
      { item: "Power bank 10.000+ mAh", note: "Excursiones largas" },
      { item: "Auriculares para el niño", note: "Vuelo + coche" },
      { item: "Cable USB-C / Lightning extra", note: "" },
      { item: "Cámara o móvil con espacio", note: "" },
      { item: "eSIM / SIM canadiense", note: "Airalo / Holafly" },
    ],
  },
  {
    name: "Para el vuelo",
    icon: "fa-plane",
    items: [
      { item: "Tablet / entretenimiento para el niño", note: "Juegos descargados, auriculares" },
      { item: "Snacks / bocadillos", note: "El avión da de comer, para entre horas" },
      { item: "Botella vacía rellenable", note: "Se llena tras control seguridad" },
      { item: "Almohada de viaje (x3)", note: "" },
      { item: "Calcetines gruesos / zapatillas sueltas", note: "El avión enfría" },
      { item: "Chicles / caramelos", note: "Oídos en despegue/aterrizaje" },
      { item: "Kit higiene pequeño", note: "Cepillo, pasta, toallitas" },
    ],
  },
  {
    name: "Transporte público",
    icon: "fa-bus",
    items: [
      { item: "PRESTO card (tarjeta recargable)", note: "MiWay + GO Transit" },
      { item: "Weekend Pass GO ($10/persona/día)", note: "Sáb 29 y Dom 30. Niño GRATIS" },
      { item: "Niño <12 años viaja GRATIS en GO Transit", note: "Sin billete ni PRESTO" },
      { item: "MiWay gratis al transbordar desde GO con PRESTO", note: "" },
      { item: "App: GO Transit + Moovit/Transit", note: "Horarios en tiempo real" },
    ],
  },
  {
    name: "Coche de alquiler",
    icon: "fa-car",
    items: [
      { item: "Silla/asiento elevador para el niño", note: "Ontario: <40kg / <145cm necesitan asiento" },
      { item: "GPS / Google Maps descargado offline", note: "Zonas sin cobertura de datos" },
      { item: "Tarjeta de crédito a nombre del conductor", note: "" },
      { item: "Seguro del coche", note: "Revisar si tarjeta lo cubre" },
      { item: "Música / podcasts descargados", note: "" },
      { item: "Toallitas y bolsas para basura", note: "" },
    ],
  },
  {
    name: "Niagara Falls (días 27–28)",
    icon: "fa-water",
    items: [
      { item: "Hornblower — reservar online (día 27, ~16:30)", note: "~$35 CAD adulto / $23 CAD niño" },
      { item: "Journey Behind the Falls — reservar online", note: "~$24 CAD adulto / $17 CAD niño" },
      { item: "Bolsa hermética para el móvil", note: "Hornblower = empapados" },
      { item: "Ropa de repuesto en el coche (x3)", note: "Cambiarse después del Hornblower" },
      { item: "Cena temprano (19:00–19:30)", note: "Para llegar a las 21:30 a ver fuegos" },
      { item: "Mantita ligera / chaqueta", note: "Noche viendo fuegos artificiales" },
      { item: "Ripley's + Karting Clifton Hill", note: "Día 28 por la mañana" },
      { item: "Parada en Albion Falls (Hamilton)", note: "Mountain Brow Blvd parking, 200m a la cascada" },
      { item: "Airbnb: 5395 River Rd, L2E 3H1", note: "10–15 min andando de las cataratas. Cocina" },
    ],
  },
  {
    name: "Restaurantes planificados",
    icon: "fa-utensils",
    items: [
      { item: "Weinkeller (River Rd, Niagara)", note: "Pasta artesanal, pizzas. A 2 min del Airbnb" },
      { item: "The Blind Pig (6689 Lundy's Lane)", note: "TOP hamburguesas de Niagara. Casual" },
      { item: "Table Rock House Restaurant", note: "Cocina canadiense, vistas cataratas. RESERVAR" },
      { item: "Antica Pizzeria e Ristorante", note: "Italiano, familiar, buen precio" },
      { item: "COW'S Ice Cream (Clifton Hill)", note: "El mejor helado de Canadá" },
      { item: "The Port House (Port Credit)", note: "Fish & chips, terraza junto al lago" },
    ],
  },
  {
    name: "Info útil",
    icon: "fa-circle-info",
    items: [
      { item: "Propinas: 15–20% en restaurantes", note: "Cultura canadiense" },
      { item: "Idioma: inglés (Ontario)", note: "" },
      { item: "Diferencia horaria: Toronto −6h España", note: "14:00 ESP = 08:00 TOR" },
      { item: "Alcohol solo en LCBO / The Beer Store", note: "NO en supermercados normales" },
      { item: "ArriveCAN app", note: "Opcional pero útil para aduanas" },
      { item: "Llevar chaqueta fina siempre", note: "Aire acondicionado en todos sitios" },
    ],
  },
];
