import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "./font-awesome.js";

import store from "./store/index.js";
import route from "./route.js";
import "bootstrap/dist/css/bootstrap.css";
const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(route);
app.use(store);

app.mount("#app");
