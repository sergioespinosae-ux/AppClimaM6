# 🌊 Playas del Mundo — App de Clima (Módulo 6)

App de clima desarrollada como **Single Page Application (SPA)** con **Vue.js 3** y **Vue Router 4**.

---

## 📍 Temática

**Playas del Mundo** muestra el clima actual y el pronóstico semanal de 6 destinos de playa icónicos:

| Destino       | País                |
|---------------|---------------------|
| Bora Bora     | Polinesia Francesa  |
| Santorini     | Grecia              |
| Maldivas      | República de Maldivas |
| Copacabana    | Brasil              |
| Phuket        | Tailandia           |
| Tulum         | México              |

---

## 🗂️ Vistas principales

| Vista    | Descripción |
|----------|-------------|
| **Home** | Listado de los 6 destinos con su clima actual (temperatura, condición, humedad, viento). Incluye búsqueda, filtro por temperatura y cambio de unidad °C/°F. |
| **Detalle** | Vista expandida de un destino con: clima actual detallado, pronóstico de 7 días interactivo y estadísticas semanales (máx, mín, promedio, días soleados/lluvia). |

---

## 🛣️ Rutas configuradas en Vue Router

```
/           →  HomeView    (listado de destinos)
/lugar/:id  →  DetailView  (detalle de un destino por su ID)
```

La app usa `createWebHashHistory()`, por lo que las rutas se ven como:

```
index.html#/
index.html#/lugar/1
index.html#/lugar/4
```

Esto permite abrirla **directamente desde el sistema de archivos** sin servidor.

---

## 🧩 Estructura de componentes

```
App (componente raíz)
├── <router-view>
│   ├── HomeView        →  ruta /
│   │   └── WeatherCard (×6, v-for)
│   └── DetailView      →  ruta /lugar/:id
```

---

## ⚙️ Funcionalidades Vue implementadas

| Característica | Uso |
|----------------|-----|
| `{{ }}` interpolaciones | Temperatura, nombre, clima, estadísticas |
| `v-for` | Listado de lugares, días del pronóstico |
| `v-if` / `v-show` | Estado vacío, botón limpiar búsqueda, detalle expandible de día |
| `v-model` | Input de búsqueda, selector de orden, toggle de unidad |
| `@click` | Seleccionar lugar, cambiar unidad, expandir día del pronóstico |
| `@submit` / `@keyup` | Limpiar búsqueda con Escape |
| `Vue Router` | Navegación SPA sin recarga entre Home y Detalle |
| `<router-link>` / push | Navegación programática al detalle y de vuelta |
| `props` | `WeatherCard` recibe `lugar` y `unidad` |
| `emits` | `WeatherCard` emite evento `seleccionar` al padre |
| `computed` | Lista filtrada y ordenada de lugares |
| `created()` | Carga del lugar en DetailView a partir del parámetro de ruta |
| Transiciones | `<transition>` en `<router-view>` para animación entre vistas |

---

## 🚀 Cómo ejecutar el proyecto

### Opción A — Sin servidor (más simple)

1. Descarga o descomprime el archivo `.zip`
2. Abre `index.html` directamente en tu navegador

> ⚠️ Algunos navegadores bloquean módulos JS locales. Si la app no carga, usa la Opción B.

### Opción B — Con servidor local (recomendado)

Si tienes **Node.js** instalado:

```bash
# Instala un servidor estático simple (una sola vez)
npm install -g serve

# Desde la carpeta del proyecto:
serve .
```

Luego abre `http://localhost:3000` en tu navegador.

También puedes usar la extensión **Live Server** de VS Code: clic derecho en `index.html` → *Open with Live Server*.

### Opción C — Python (si no tienes Node)

```bash
# Python 3
python -m http.server 8080
```

Luego abre `http://localhost:8080`.

---

## 📁 Estructura de archivos

```
weather-spa/
├── index.html                  # Punto de entrada SPA
├── README.md
├── css/
│   └── style.css               # Estilos (tema oceánico oscuro)
└── js/
    ├── data.js                 # Datos mock + función de estadísticas
    ├── app.js                  # App raíz + configuración Vue Router
    ├── HomeView.js             # Vista principal (listado)
    ├── DetailView.js           # Vista detalle (pronóstico + stats)
    └── components/
        └── WeatherCard.js      # Componente reutilizable de tarjeta
```

---

## 🔗 Repositorio

[GitHub — weather-spa-vue](https://github.com/tu-usuario/weather-spa-vue)

---

## 📝 Notas

- Los datos climáticos son **mock** (simulados en `js/data.js`).
- La app es completamente funcional sin build tools — solo Vue 3 + Vue Router vía CDN.
- Diseño responsivo adaptado a móvil y escritorio.
