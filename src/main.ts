import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUnicorn,
  faClouds,
  faSun,
  faCloudRain,
  faCloudSnow,
  faEmptySet,
  faXmark,
  faCheck,
} from "@fortawesome/pro-duotone-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faUnicorn,
  faClouds,
  faSun,
  faCloudRain,
  faCloudSnow,
  faEmptySet,
  faXmark,
  faCheck
);
createApp(App)
  .use(router)
  .use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
