import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/i18n";
import Home from "@/views/Home.vue";
import StorageView from "@/views/StorageView.vue";
import VehicleView from "@/views/VehicleView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale",
    component: {
      template: "<router-view></router-view>",
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales =
        process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",");
      if (!supported_locales.includes(locale)) return next("de");

      if (i18n.global.locale.value !== locale) {
        if (typeof locale === "string") {
          i18n.global.locale.value = locale;
        }
      }

      return next();
    },
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "storage",
        name: "Storage",
        component: StorageView,
      },
      {
        path: "vehicles",
        name: "Vehicles",
        component: VehicleView,
      },
    ],
  },
  {
    path: "/",
    redirect: "/de",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
