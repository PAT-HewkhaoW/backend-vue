import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import VueSmoothScroll from "vue3-smooth-scroll";
import "./axios";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/lara-light-green/theme.css";

import "./fontawesome";
import "./primevue.js";

import App from "./App.vue";
import router from "./router";
import ColorPicker from "primevue/colorpicker";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(VueSmoothScroll);
app.use(PrimeVue);

app.mount("#app");
