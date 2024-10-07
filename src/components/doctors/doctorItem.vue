<template>
  <td>{{ id }}</td>
  <td>{{ name }}</td>
  <td>{{ department }}</td>
  <td>{{ specialization }}</td>
  <td>{{ degree }}</td>
  <td>{{ mobile }}</td>
  <td>{{ email }}</td>
  <td>{{ joining_date }}</td>

  <td v-if="is_active == true">
    <button type="button" class="btn btn-info">Active</button>
  </td>
  <td v-else>
    <button type="button" class="btn btn-danger">UnAvtive</button>
  </td>
  <td>
    <button class="btn btn-primary btn-xs">
      <font-awesome-icon :icon="['fas', 'pencil']" />
    </button>
    <button class="btn btn-danger btn-xs">
      <font-awesome-icon :icon="['fas', 'trash-can']" />
    </button>
  </td>
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
};
</script>
