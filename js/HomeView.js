// js/HomeView.js

const HomeView = {
  name: "HomeView",
  components: { WeatherCard },
  data() {
    return {
      busqueda: "",
      unidad: "C",
      lugares: weatherData,
      ordenPor: "nombre",
    };
  },
  computed: {
    lugaresFiltrados() {
      let resultado = this.lugares.filter((l) =>
        l.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) ||
        l.pais.toLowerCase().includes(this.busqueda.toLowerCase())
      );
      if (this.ordenPor === "nombre") {
        resultado = resultado.slice().sort((a, b) => a.nombre.localeCompare(b.nombre));
      } else if (this.ordenPor === "temp_asc") {
        resultado = resultado.slice().sort((a, b) => a.clima.temp_c - b.clima.temp_c);
      } else if (this.ordenPor === "temp_desc") {
        resultado = resultado.slice().sort((a, b) => b.clima.temp_c - a.clima.temp_c);
      }
      return resultado;
    },
  },
  methods: {
    irAlDetalle(id) {
      this.$router.push({ name: "detalle", params: { id } });
    },
    limpiarBusqueda() {
      this.busqueda = "";
    },
  },
  template: `
    <div class="home-view">
      <!-- Hero -->
      <section class="hero">
        <div class="hero-content">
          <p class="hero-sub">Clima en tiempo real</p>
          <h1 class="hero-title">Playas del<br><em>Mundo</em></h1>
          <p class="hero-desc">Explora el clima de los destinos de playa más espectaculares del planeta</p>
        </div>
        <div class="hero-waves">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z" fill="currentColor"/>
          </svg>
        </div>
      </section>

      <!-- Controles -->
      <section class="controles">
        <div class="controles-inner">
          <!-- Búsqueda -->
          <div class="search-wrapper">
            <span class="search-icon">🔍</span>
            <input
              v-model="busqueda"
              type="text"
              placeholder="Buscar por destino o país..."
              class="search-input"
              @keyup.escape="limpiarBusqueda"
            />
            <button
              v-show="busqueda"
              @click="limpiarBusqueda"
              class="clear-btn"
              title="Limpiar búsqueda"
            >✕</button>
          </div>

          <!-- Ordenar -->
          <div class="orden-wrapper">
            <label class="control-label">Ordenar:</label>
            <select v-model="ordenPor" class="select-control">
              <option value="nombre">A–Z</option>
              <option value="temp_desc">Más caliente</option>
              <option value="temp_asc">Más frío</option>
            </select>
          </div>

          <!-- Unidad de temperatura -->
          <div class="unidad-wrapper">
            <label class="control-label">Unidad:</label>
            <div class="toggle-group">
              <button
                :class="['toggle-btn', { active: unidad === 'C' }]"
                @click="unidad = 'C'"
              >°C</button>
              <button
                :class="['toggle-btn', { active: unidad === 'F' }]"
                @click="unidad = 'F'"
              >°F</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Resultados -->
      <section class="resultados">
        <p class="resultados-count" v-if="busqueda">
          {{ lugaresFiltrados.length }} resultado(s) para "<strong>{{ busqueda }}</strong>"
        </p>

        <!-- Sin resultados -->
        <div v-if="lugaresFiltrados.length === 0" class="empty-state">
          <span class="empty-icon">🌊</span>
          <p>No se encontró ningún destino con "<strong>{{ busqueda }}</strong>"</p>
          <button @click="limpiarBusqueda" class="btn-secondary">Ver todos</button>
        </div>

        <!-- Grid de cards -->
        <div v-else class="cards-grid">
          <weather-card
            v-for="lugar in lugaresFiltrados"
            :key="lugar.id"
            :lugar="lugar"
            :unidad="unidad"
            @seleccionar="irAlDetalle"
          />
        </div>
      </section>
    </div>
  `,
};
