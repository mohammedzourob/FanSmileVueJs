import { createRouter, createWebHistory } from "vue-router";
import EmailList from "./pages/email/EmailList";
import DoctorList from "./pages/doctors/DoctorList.vue";
import AddDoctor from "./pages/doctors/AddDoctor.vue";
const route = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "email" },
    { path: "/email", component: EmailList },
    { path: "/doctors", component: DoctorList },
    { path: "/add-doctor", component: AddDoctor },
  ],
});

export default route;
