import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Experiences from "../components/Experiences.vue";
import Projects from "../components/Projects.vue";
import "animate.css";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: About,
      meta: {
        enterClass: "animate__animated animate__fadeInLeft",
        leaveClass: "animate__animated animate__fadeOutRight"
      }
    },
    {
      path: "/experiences",
      component: Experiences,
      meta: {
        enterClass: "animate__animated animate__fadeInRight",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    },
    {
      path: "/projects",
      component: Projects,
      meta: {
        enterClass: "animate__animated animate__fadeInRight",
        leaveClass: "animate__animated animate__fadeOutLeft"
      }
    }
  ]
});

export default router;
