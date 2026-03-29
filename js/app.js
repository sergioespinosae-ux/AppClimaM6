// js/app.js — Configuración principal de Vue + Vue Router

const { createApp } = Vue;
const { createRouter, createWebHashHistory } = VueRouter;

// ── Router ──────────────────────────────────────────────
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/lugar/:id",
    name: "detalle",
    component: DetailView,
    props: true,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// ── Componente raíz App ─────────────────────────────────
const App = {
  name: "App",
  template: `
    <div id="app-root">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
      <footer class="app-footer">
        <p>🌊 Playas del Mundo · App de Clima</p>
        <p class="footer-sub">Datos ilustrativos · Módulo 6 Vue.js SPA</p>
      </footer>
    </div>
  `,
};

// ── Montar la app ────────────────────────────────────────
const app = createApp(App);
app.component("WeatherCard", WeatherCard);
app.use(router);
app.mount("#app");
