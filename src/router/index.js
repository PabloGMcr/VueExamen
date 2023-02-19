import { createWebHashHistory, createRouter } from "vue-router";

// Componentes

import MainC from "@/components/MainC.vue";
import FormC from "@/components/FormC.vue";
import FormC2 from "@/components/FormC2.vue";

const routes = [
  {
    path: "/",
    name: "MainC",
    component: MainC,
  },

  {
    path: "/form",
    name: "FormC",
    component: FormC,
  },

  {
    path: "/form2",
    name: "FormC2",
    component: FormC2,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
