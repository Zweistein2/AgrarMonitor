import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import i18n from "@/i18n";
import OverviewView from "@/views/OverviewView.vue";
import StorageView from "@/views/StorageView.vue";
import VehicleView from "@/views/VehicleView.vue";
import MissionView from "@/views/MissionView.vue";
import StatisticView from "@/views/StatisticView.vue";
import BalanceView from "@/views/BalanceView.vue";
import CalculationView from "@/views/CalculationView.vue";
import FarmsView from "@/views/FarmsView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:locale",
    component: {
      template: "<router-view></router-view>",
    },
    beforeEnter: (to, from, next) => {
      const locale = to.params.locale;
      const supported_locales =
        process.env.VUE_APP_I18N_SUPPORTED_LOCALE !== undefined
          ? process.env.VUE_APP_I18N_SUPPORTED_LOCALE.split(",")
          : [];
      if (typeof locale === "string") {
        if (!supported_locales.includes(locale as string)) return next("de");
      }

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
        name: "Overview",
        component: OverviewView,
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
      {
        path: "mission",
        name: "Mission",
        component: MissionView,
      },
      {
        path: "statistics",
        name: "Statistics",
        component: StatisticView,
      },
      {
        path: "balance",
        name: "Balance",
        component: BalanceView,
      },
      {
        path: "calculation",
        name: "Calculation",
        component: CalculationView,
      },
      {
        path: "farms",
        name: "Farms",
        component: FarmsView,
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
