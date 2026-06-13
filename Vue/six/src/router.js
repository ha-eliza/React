import { createRouter, createWebHistory } from "vue-router";
import AboutApp from "./views/AboutApp.vue";
import ContactApp from "./views/ContactApp.vue";
import MainApp from "./views/MainApp.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/about', component: AboutApp
    },
    {
      path: '/contact', component: ContactApp
    },
    {
      path: '/main', component: MainApp
    },
  ]
})
