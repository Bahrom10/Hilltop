import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import Form from "@/views/Form.vue";
import TopForm from "./views/TopForm.vue";

const routes = [
  {
    path: '/',
    redirect: '/home' 
  },
  { path: "/home", component: Home, name: "Home" },
  {
    path: "/submit",
    component: Form,
    name: "Form",
  },{
    path: "/submit2",
    component: TopForm,
    name: "Second form"
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
