import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import VueI18n from "./language";

createApp(App).use(ElementPlus).use(VueI18n).mount("#app");
