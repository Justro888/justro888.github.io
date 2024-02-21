import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router/route";

createApp(App).use(AOS.init()).use(router).mount("#app");
