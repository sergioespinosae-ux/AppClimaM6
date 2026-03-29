// js/data.js — Datos mock de playas del mundo

const weatherData = [
  {
    id: 1,
    nombre: "Bora Bora",
    pais: "Polinesia Francesa",
    emoji: "🏝️",
    imagen: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    clima: {
      descripcion: "Soleado",
      icono: "☀️",
      temp_c: 29,
      humedad: 72,
      viento_kmh: 14,
      sensacion_c: 33,
    },
    pronostico: [
      { dia: "Lun", icono: "☀️", min: 25, max: 31 },
      { dia: "Mar", icono: "⛅", min: 24, max: 30 },
      { dia: "Mié", icono: "🌦️", min: 23, max: 28 },
      { dia: "Jue", icono: "☀️", min: 25, max: 32 },
      { dia: "Vie", icono: "⛅", min: 24, max: 29 },
      { dia: "Sáb", icono: "☀️", min: 26, max: 33 },
      { dia: "Dom", icono: "☀️", min: 26, max: 32 },
    ],
    descripcion_lugar:
      "Paraíso tropical en el Pacífico Sur, famosa por sus bungalows sobre el agua y su laguna turquesa rodeada por un volcán extinto.",
  },
  {
    id: 2,
    nombre: "Santorini",
    pais: "Grecia",
    emoji: "🏛️",
    imagen: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&q=80",
    clima: {
      descripcion: "Parcialmente nublado",
      icono: "⛅",
      temp_c: 22,
      humedad: 58,
      viento_kmh: 22,
      sensacion_c: 20,
    },
    pronostico: [
      { dia: "Lun", icono: "⛅", min: 18, max: 24 },
      { dia: "Mar", icono: "☀️", min: 19, max: 25 },
      { dia: "Mié", icono: "☀️", min: 20, max: 26 },
      { dia: "Jue", icono: "🌬️", min: 17, max: 22 },
      { dia: "Vie", icono: "⛅", min: 18, max: 23 },
      { dia: "Sáb", icono: "☀️", min: 21, max: 27 },
      { dia: "Dom", icono: "☀️", min: 22, max: 28 },
    ],
    descripcion_lugar:
      "Joya del Mar Egeo con sus icónicas cúpulas azules y casas blancas sobre acantilados volcánicos. Puestas de sol legendarias en Oia.",
  },
  {
    id: 3,
    nombre: "Maldivas",
    pais: "República de Maldivas",
    emoji: "🌊",
    imagen: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    clima: {
      descripcion: "Tormenta tropical",
      icono: "⛈️",
      temp_c: 27,
      humedad: 88,
      viento_kmh: 35,
      sensacion_c: 30,
    },
    pronostico: [
      { dia: "Lun", icono: "⛈️", min: 25, max: 28 },
      { dia: "Mar", icono: "🌧️", min: 24, max: 27 },
      { dia: "Mié", icono: "⛅", min: 26, max: 30 },
      { dia: "Jue", icono: "☀️", min: 27, max: 32 },
      { dia: "Vie", icono: "☀️", min: 27, max: 31 },
      { dia: "Sáb", icono: "⛅", min: 26, max: 29 },
      { dia: "Dom", icono: "🌦️", min: 25, max: 28 },
    ],
    descripcion_lugar:
      "Archipiélago de atolones en el Océano Índico con las aguas más cristalinas del mundo. Snorkel, buceo y lujo en estado puro.",
  },
  {
    id: 4,
    nombre: "Copacabana",
    pais: "Brasil",
    emoji: "🎵",
    imagen: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80",
    clima: {
      descripcion: "Caluroso y húmedo",
      icono: "🌤️",
      temp_c: 34,
      humedad: 79,
      viento_kmh: 18,
      sensacion_c: 40,
    },
    pronostico: [
      { dia: "Lun", icono: "🌤️", min: 28, max: 35 },
      { dia: "Mar", icono: "⛈️", min: 26, max: 33 },
      { dia: "Mié", icono: "🌦️", min: 25, max: 32 },
      { dia: "Jue", icono: "☀️", min: 29, max: 37 },
      { dia: "Vie", icono: "☀️", min: 30, max: 38 },
      { dia: "Sáb", icono: "🌤️", min: 28, max: 36 },
      { dia: "Dom", icono: "⛅", min: 27, max: 34 },
    ],
    descripcion_lugar:
      "La playa más famosa de Río de Janeiro, vibrante cuna del bossa nova y la samba. Arena dorada entre el Cristo y el Pan de Azúcar.",
  },
  {
    id: 5,
    nombre: "Phuket",
    pais: "Tailandia",
    emoji: "🐘",
    imagen: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=800&q=80",
    clima: {
      descripcion: "Lluvioso",
      icono: "🌧️",
      temp_c: 26,
      humedad: 85,
      viento_kmh: 28,
      sensacion_c: 29,
    },
    pronostico: [
      { dia: "Lun", icono: "🌧️", min: 24, max: 27 },
      { dia: "Mar", icono: "⛈️", min: 23, max: 26 },
      { dia: "Mié", icono: "🌦️", min: 24, max: 28 },
      { dia: "Jue", icono: "⛅", min: 25, max: 29 },
      { dia: "Vie", icono: "☀️", min: 26, max: 31 },
      { dia: "Sáb", icono: "🌤️", min: 25, max: 30 },
      { dia: "Dom", icono: "⛅", min: 25, max: 29 },
    ],
    descripcion_lugar:
      "La perla del Andamán con junglas tropicales, templos budistas y playas de arena blanca. Gastronomía callejera y atardeceres dorados.",
  },
  {
    id: 6,
    nombre: "Tulum",
    pais: "México",
    emoji: "🌿",
    imagen: "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?w=800&q=80",
    clima: {
      descripcion: "Cálido y despejado",
      icono: "☀️",
      temp_c: 31,
      humedad: 68,
      viento_kmh: 12,
      sensacion_c: 36,
    },
    pronostico: [
      { dia: "Lun", icono: "☀️", min: 27, max: 32 },
      { dia: "Mar", icono: "☀️", min: 27, max: 33 },
      { dia: "Mié", icono: "⛅", min: 26, max: 31 },
      { dia: "Jue", icono: "🌦️", min: 25, max: 30 },
      { dia: "Vie", icono: "⛅", min: 26, max: 31 },
      { dia: "Sáb", icono: "☀️", min: 27, max: 33 },
      { dia: "Dom", icono: "☀️", min: 28, max: 34 },
    ],
    descripcion_lugar:
      "Ruinas mayas sobre acantilados con vistas al Caribe turquesa. Cenotes secretos, selva y una vibrante escena de bienestar y naturaleza.",
  },
];

// Función para calcular estadísticas de la semana
function calcularEstadisticas(pronostico) {
  const temps_min = pronostico.map((d) => d.min);
  const temps_max = pronostico.map((d) => d.max);
  const todas = [...temps_min, ...temps_max];

  return {
    temp_min: Math.min(...temps_min),
    temp_max: Math.max(...temps_max),
    promedio: Math.round(todas.reduce((a, b) => a + b, 0) / todas.length),
    dias_soleados: pronostico.filter((d) => d.icono === "☀️" || d.icono === "🌤️").length,
    dias_lluvia: pronostico.filter((d) =>
      ["🌧️", "⛈️", "🌦️"].includes(d.icono)
    ).length,
  };
}
