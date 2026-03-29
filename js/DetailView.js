// js/DetailView.js

const DetailView = {
  name: "DetailView",
  data() {
    return {
      lugar: null,
      stats: null,
      unidad: "C",
      diaSeleccionado: null,
    };
  },
  created() {
    const id = parseInt(this.$route.params.id);
    const encontrado = weatherData.find((l) => l.id === id);
    if (encontrado) {
      this.lugar = encontrado;
      this.stats = calcularEstadisticas(encontrado.pronostico);
    }
  },
  methods: {
    convertirTemp(tempC) {
      if (this.unidad === "F") return Math.round((tempC * 9) / 5 + 32);
      return tempC;
    },
    simbolo() {
      return this.unidad === "F" ? "°F" : "°C";
    },
    volverHome() {
      this.$router.push({ name: "home" });
    },
    seleccionarDia(dia) {
      this.diaSeleccionado = this.diaSeleccionado === dia ? null : dia;
    },
    getBarWidth(temp, min, max) {
      const rango = max - min || 1;
      return Math.round(((temp - min) / rango) * 100);
    },
    descripcionIcono(icono) {
      const map = {
        "☀️": "Soleado",
        "🌤️": "Mayormente soleado",
        "⛅": "Parcialmente nublado",
        "🌦️": "Lluvia ligera",
        "🌧️": "Lluvia",
        "⛈️": "Tormenta",
        "🌬️": "Ventoso",
      };
      return map[icono] || "Variable";
    },
  },
  computed: {
    minSemana() {
      return Math.min(...this.lugar.pronostico.map((d) => d.min));
    },
    maxSemana() {
      return Math.max(...this.lugar.pronostico.map((d) => d.max));
    },
  },
  template: `
    <div class="detail-view" v-if="lugar">
      <!-- Nav bar -->
      <nav class="detail-nav">
        <button @click="volverHome" class="back-btn">
          ← Volver a inicio
        </button>
        <div class="toggle-group small">
          <button :class="['toggle-btn', { active: unidad === 'C' }]" @click="unidad = 'C'">°C</button>
          <button :class="['toggle-btn', { active: unidad === 'F' }]" @click="unidad = 'F'">°F</button>
        </div>
      </nav>

      <!-- Hero del destino -->
      <header class="detail-hero">
        <div class="detail-hero-bg" :style="{ backgroundImage: 'url(' + lugar.imagen + ')' }"></div>
        <div class="detail-hero-overlay"></div>
        <div class="detail-hero-content">
          <p class="detail-pais">{{ lugar.emoji }} {{ lugar.pais }}</p>
          <h1 class="detail-nombre">{{ lugar.nombre }}</h1>
          <div class="detail-temp-main">
            <span class="temp-big">{{ convertirTemp(lugar.clima.temp_c) }}{{ simbolo() }}</span>
            <div class="temp-info">
              <span class="clima-desc-big">{{ lugar.clima.icono }} {{ lugar.clima.descripcion }}</span>
            </div>
          </div>
        </div>
      </header>

      <!-- Datos actuales -->
      <section class="current-section">
        <h2 class="section-title">Condiciones actuales</h2>
        <div class="current-grid">
          <div class="current-item">
            <span class="ci-icon">💧</span>
            <span class="ci-value">{{ lugar.clima.humedad }}%</span>
            <span class="ci-label">Humedad</span>
          </div>
          <div class="current-item">
            <span class="ci-icon">🌬️</span>
            <span class="ci-value">{{ lugar.clima.viento_kmh }} km/h</span>
            <span class="ci-label">Viento</span>
          </div>
          <div class="current-item">
            <span class="ci-icon">🌡️</span>
            <span class="ci-value">{{ convertirTemp(lugar.clima.sensacion_c) }}{{ simbolo() }}</span>
            <span class="ci-label">Sensación</span>
          </div>
        </div>
      </section>

      <!-- Pronóstico 7 días -->
      <section class="forecast-section">
        <h2 class="section-title">Pronóstico 7 días</h2>
        <p class="section-hint">Haz clic en un día para ver más detalles</p>
        <div class="forecast-list">
          <div
            v-for="(dia, i) in lugar.pronostico"
            :key="i"
            :class="['forecast-item', { selected: diaSeleccionado === i }]"
            @click="seleccionarDia(i)"
          >
            <span class="f-dia">{{ dia.dia }}</span>
            <span class="f-icon">{{ dia.icono }}</span>
            <div class="f-temps">
              <span class="f-max">{{ convertirTemp(dia.max) }}°</span>
              <div class="f-bar-wrap">
                <div
                  class="f-bar"
                  :style="{ width: getBarWidth(dia.max, minSemana, maxSemana) + '%' }"
                ></div>
              </div>
              <span class="f-min">{{ convertirTemp(dia.min) }}°</span>
            </div>
            <!-- Detalle expandible -->
            <div v-if="diaSeleccionado === i" class="f-detail">
              <span>{{ descripcionIcono(dia.icono) }}</span>
              <span>Rango: {{ convertirTemp(dia.min) }}{{ simbolo() }} – {{ convertirTemp(dia.max) }}{{ simbolo() }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Estadísticas de la semana -->
      <section class="stats-section">
        <h2 class="section-title">Estadísticas semanales</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-icon">🔼</span>
            <span class="stat-value">{{ convertirTemp(stats.temp_max) }}{{ simbolo() }}</span>
            <span class="stat-label">Temperatura máxima</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🔽</span>
            <span class="stat-value">{{ convertirTemp(stats.temp_min) }}{{ simbolo() }}</span>
            <span class="stat-label">Temperatura mínima</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">📊</span>
            <span class="stat-value">{{ convertirTemp(stats.promedio) }}{{ simbolo() }}</span>
            <span class="stat-label">Temperatura promedio</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">☀️</span>
            <span class="stat-value">{{ stats.dias_soleados }} días</span>
            <span class="stat-label">Días soleados</span>
          </div>
          <div class="stat-card">
            <span class="stat-icon">🌧️</span>
            <span class="stat-value">{{ stats.dias_lluvia }} días</span>
            <span class="stat-label">Días de lluvia</span>
          </div>
          <div class="stat-card accent">
            <span class="stat-icon">📍</span>
            <span class="stat-value">{{ lugar.nombre }}</span>
            <span class="stat-label">{{ lugar.descripcion_lugar }}</span>
          </div>
        </div>
      </section>
    </div>

    <!-- Lugar no encontrado -->
    <div v-else class="not-found">
      <span class="empty-icon">🌊</span>
      <h2>Destino no encontrado</h2>
      <button @click="volverHome" class="btn-primary">← Volver al inicio</button>
    </div>
  `,
};
