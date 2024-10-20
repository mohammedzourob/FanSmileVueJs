import actions from "./actions.js";
import getters from "./getters.js";
import mutations from "./mutations.js";

export default {
  //   namespaced: true,
  state() {
    return {
      doctors: [
        {
          id: "1",
          name: "Dr.Rajesh",
          department: "General surgery",
          specialization: 18,
          degree: "MBBS,MD",
          mobile: 4444565756,
          email: "rag@gmail.com",
          joining_date: "22 Feb 2000",
          is_active: "1",
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
