import { createRouter, createWebHistory } from "vue-router";
import LoginApp from "./views/LoginApp.vue";
import ForgetApp from "./views/ForgetApp.vue";
import DashboardApp from "./views/DashboardApp.vue";
import MailApp from "./views/MailApp.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login', component: LoginApp
    },
    {
      path: '/forget', component: ForgetApp
    },
    {
      path: '/dashboard', component: DashboardApp
    },
    {
      path: '/mail', component: MailApp
    }
  ]
})
