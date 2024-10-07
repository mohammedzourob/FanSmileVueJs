<template>
  <form @submit.prevent="">
    <div class="col-md-12 col-sm-12">
      <!-- text input -->

      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          autocomplete="on"
          class="form-control"
          placeholder="Enter the name ..."
        />
      </div>
      <div class="form-group">
        <label for="department">Department</label>
        <input
          type="text"
          id="department"
          class="form-control"
          placeholder="Enter the department ..."
        />
      </div>
      <div class="form-group">
        <label for="specialization">Specialization</label>
        <input
          type="number"
          id="specialization"
          class="form-control"
          placeholder="Enter Doctor Specialization ..."
        />
      </div>
      <div class="form-group">
        <label for="degree">Degree</label>
        <input
          type="text"
          id="degree"
          placeholder="Enter Doctor Degree ..."
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          placeholder="Enter Doctor mobile ..."
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
             autocomplete="on"
          placeholder="Enter Doctor email ..."
          class="form-control"
        />
      </div>

      <!-- radio -->
      <div class="form-group">
        <div class="radio">
          <input type="radio" id="is_active" value="Active" checked />
          <label for="is_active"> Active </label>
        </div>
        <div class="radio">
          <input type="radio" id="active" value="UnActive" />
          <label for="active"> UnActive </label>
        </div>
      </div>
    </div>
    <base-button mode="outline">Submit</base-button>
  </form>
</template>

<script setup>
import BaseButton from "../ui/BaseButton.vue";
</script>
