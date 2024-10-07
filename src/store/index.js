import { createStore } from "vuex";

import DoctorsModules from "./doctors/index.js";

const store = createStore({
  modules: { doctors: DoctorsModules },
});

export default store;
