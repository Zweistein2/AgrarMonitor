import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/i18n";
import Home from "@/views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale",
    component: Home,
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
