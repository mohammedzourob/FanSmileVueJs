<template>
  <div>
    <div class="page-bar">
      <div class="page-title-breadcrumb">
        <div class="pull-left">
          <div class="page-title">Add Doctor</div>
        </div>
        <ol class="breadcrumb page-breadcrumb pull-right">
          <li>
            <font-awesome-icon :icon="['fas', 'home']" />
            <i class="fa fa-home"></i>&nbsp;<a
              class="parent-item"
              href="index-2.html"
              >Home</a
            >&nbsp;
            <font-awesome-icon :icon="['fas', 'angle-right']" />
          </li>
          <li>
            <a class="parent-item" href="#">Doctor</a>&nbsp;<font-awesome-icon
              :icon="['fas', 'angle-right']"
            />
          </li>
          <li class="active">Add Doctor</li>
        </ol>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 col-sm-12">
        <div class="card card-topline-aqua">
          <div class="card-head">
            <header>Add doctor</header>
          </div>
          <div class="card-body">
            <form-doctor @submit="saveData"></form-doctor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FormDoctor from "../../components/doctors/formDoctor.vue";

export default {
  components: { FormDoctor },
  methods: {
    saveData(data) {
      this.$store.dispatch("addDoctor", data);
      this.$router.replace("/doctors");
    },
  },
};
</script>
