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
  faLocationDot,
  faShoppingCart,
  faBadge,
  faUserTie,
  faPeopleGroup,
  faPig,
  faMoneyBillTransfer,
  faCommentsDollar,
  faFileInvoiceDollar,
  faShovel,
  faTractor as faTractorDuo,
  faFarm,
  faSeedling,
  faUserGear,
  faUserCowboy,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  faTractor,
  faShop,
  faMoneyBill,
  faRotateLeft,
  faPen,
  faDash,
} from "@fortawesome/pro-solid-svg-icons";
import {
  FontAwesomeIcon,
  FontAwesomeLayers,
} from "@fortawesome/vue-fontawesome";

library.add(
  faUnicorn,
  faClouds,
  faSun,
  faCloudRain,
  faCloudSnow,
  faEmptySet,
  faXmark,
  faCheck,
  faLocationDot,
  faTractor,
  faShoppingCart,
  faShop,
  faBadge,
  faUserTie,
  faPeopleGroup,
  faPig,
  faMoneyBill,
  faMoneyBillTransfer,
  faCommentsDollar,
  faFileInvoiceDollar,
  faShovel,
  faRotateLeft,
  faTractorDuo,
  faFarm,
  faPen,
  faSeedling,
  faDash,
  faUserGear,
  faUserCowboy
);
createApp(App)
  .use(router)
  .use(i18n)
  .component("font-awesome-icon", FontAwesomeIcon)
  .component("font-awesome-layers", FontAwesomeLayers)
  .mount("#app");
