export default {
  addDoctor(context, data) {
    console.log(data);
    const doctorData = {
      id: new Date().toISOString(),
      
      name: data.name,
      department: data.department,
      specialization: data.specialization,
      degree: data.degree,
      mobile: data.mobile,
      email: data.email,
      is_active: data.is_active,
      joining_date: new Date(),
    };

    // console.log(doctorData);
    context.commit("doctorData", doctorData);
  },

  changeStatus(context) {
    
    // if (is_active === "active") {
    //   console.log("11");
    // } else {
    //   console.log("222");
    // }

    // id=context.getters.
    // console.log("dddddd");
    context.commit("change");
  },
};
