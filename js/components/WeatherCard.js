// js/components/WeatherCard.js

const WeatherCard = {
  name: "WeatherCard",
  props: {
    lugar: {
      type: Object,
      required: true,
    },
    unidad: {
      type: String,
      default: "C",
    },
  },
  emits: ["seleccionar"],
  methods: {
    convertirTemp(tempC) {
      if (this.unidad === "F") {
        return Math.round((tempC * 9) / 5 + 32);
      }
      return tempC;
    },
    simboloUnidad() {
      return this.unidad === "F" ? "°F" : "°C";
    },
    irAlDetalle() {
      this.$emit("seleccionar", this.lugar.id);
    },
  },
  template: `
    <div class="weather-card" @click="irAlDetalle">
      <div class="card-header">
        <span class="card-emoji">{{ lugar.emoji }}</span>
        <div class="card-location">
          <h3>{{ lugar.nombre }}</h3>
          <p class="card-pais">{{ lugar.pais }}</p>
        </div>
        <div class="card-temp">
          {{ convertirTemp(lugar.clima.temp_c) }}<span class="unidad">{{ simboloUnidad() }}</span>
        </div>
      </div>
      <div class="card-body">
        <div class="card-clima">
          <span class="clima-icono">{{ lugar.clima.icono }}</span>
          <span class="clima-desc">{{ lugar.clima.descripcion }}</span>
        </div>
        <div class="card-stats">
          <span title="Humedad">💧 {{ lugar.clima.humedad }}%</span>
          <span title="Viento">🌬️ {{ lugar.clima.viento_kmh }} km/h</span>
          <span title="Sensación térmica">🌡️ {{ convertirTemp(lugar.clima.sensacion_c) }}{{ simboloUnidad() }}</span>
        </div>
      </div>
      <div class="card-footer">
        <span class="ver-detalle">Ver pronóstico →</span>
      </div>
    </div>
  `,
};
