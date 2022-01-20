import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import i18n from "./i18n";
import router from "./router";

createApp(App).use(router).use(i18n).mount("#app");
