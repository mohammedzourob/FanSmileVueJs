<template>
  <tr class="odd gradeX">
    <td>{{ id }}</td>
    <td>{{ name }}</td>
    <td>{{ department }}</td>
    <td>{{ specialization }}</td>
    <td>{{ degree }}</td>
    <td>{{ mobile }}</td>
    <td>{{ email }}</td>
    <td>{{ joining_date }}</td>

    <td>
      <button class="btn btn-info" @click="toggleValue">
        {{ is_active ? "Active" : "Inactive" }}
      </button>
    </td>

    <td>
      <button class="btn btn-primary btn-xs">
        <font-awesome-icon :icon="['fas', 'pencil']" />
      </button>
      <button class="btn btn-danger btn-xs">
        <font-awesome-icon :icon="['fas', 'trash-can']" />
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: [
    "id",
    "name",
    "department",
    "specialization",
    "degree",
    "mobile",
    "email",
    "joining_date",
    "is_active",
  ],
  computed: {
    toggleValue() {
      if (this.is_active == "1") {
        this.is_active = !this.is_active;
      }
      console.log(this.is_active);
      // const i = (id = this.id);
      // this.$store.getters["isDoctor"];
      // console.log(this.$store.dispatch("changeStatus"));
      // return this.$store.dispatch("changeStatus");
    },
  },
};
</script>
