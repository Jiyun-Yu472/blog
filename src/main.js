import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import vueRouter from "./router";

createApp(App).use(vueRouter).mount("#app");
