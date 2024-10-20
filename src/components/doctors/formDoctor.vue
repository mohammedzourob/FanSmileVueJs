<template>
  <form @submit.prevent="submitForm">
    <div class="col-md-12 col-sm-12">
      <!-- text input -->

    

      <div class="form-group" :class="{ invalid: !name.is_Valid }">
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          autocomplete="on"
          v-model.trim="name.val"
          class="form-control"
          placeholder="Enter the name ..."
          @blur="clearValidity('name')"
        />
        <p v-if="!name.is_Valid">The Name not be empty .</p>
      </div>
      <div class="form-group" :class="{ invalid: !department.is_Valid }">
        <label for="department">Department</label>
        <input
          type="text"
          id="department"
          v-model="department.val"
          class="form-control"
          @blur="clearValidity('department')"
          placeholder="Enter the department ..."
        />
        <p v-if="!department.is_Valid">Department not be empty .</p>
      </div>
      <div class="form-group" :class="{ invalid: !specialization.is_Valid }">
        <label for="specialization">Specialization</label>
        <input
          type="number"
          id="specialization"
          v-model="specialization.val"
            @blur="clearValidity('specialization')"
          class="form-control"
          placeholder="Enter Doctor Specialization ..."
        />
        <p v-if="!specialization.is_Valid">Specializa tion not be empty .</p>
      </div>
      <div class="form-group" :class="{ invalid: !degree.is_Valid }">
        <label for="degree">Degree</label>
        <input
          type="text"
          id="degree"
          v-model="degree.val"
          @blur="clearValidity('degree')"
          placeholder="Enter Doctor Degree ..."
          class="form-control"
        />
        <p v-if="!degree.is_Valid">Degree not be empty .</p>
      </div>

      <div class="form-group" :class="{ invalid: !mobile.is_Valid }">
        <label for="mobile">Mobile</label>
        <input
          type="text"
          id="mobile"
          v-model="mobile.val"
          @blur="clearValidity('mobile')"
          placeholder="Enter Doctor mobile ..."
          class="form-control"
        />
        <p v-if="!mobile.is_Valid">Mobile not be empty .</p>
      </div>

      <div class="form-group" :class="{ invalid: !email.is_Valid }">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          v-model="email.val"
          autocomplete="on"
          @blur="clearValidity('email')"
          placeholder="Enter Doctor email ..."
          class="form-control"
        />
        <p v-if="!email.is_Valid">Email not be empty .</p>
      </div>

      <!-- radio -->
      <div class="form-group">
        <div class="radio">
          <input
            type="radio"
            id="is_active"
            v-model="is_active"
            value="1"
            checked
          />
          <label for="is_active"> Active </label>
        </div>
        <div class="radio">
          <input
            type="radio"
            id="active"
            v-model="is_active"
            value="0"
          />
          <label for="active"> UnActive </label>
        </div>
      </div>
    </div>
    <base-button mode="outline">Submit</base-button>
  </form>
</template>

<script>
import BaseButton from "../ui/BaseButton.vue";
import { ref } from "vue";
export default {
  components: { BaseButton },
  emits: ["submit"],

  setup(_, { emit }) {
    const name = ref({
      val: "",
      is_Valid: true,
    });
    const department = ref({
      val: "",
      is_Valid: true,
    });
    const specialization = ref({
      val: "",
      is_Valid: true,
    });
    const degree = ref({
      val: "",
      is_Valid: true,
    });
    const mobile = ref({
      val: "",
      is_Valid: true,
    });
    const email = ref({
      val: "",
      is_Valid: true,
    });

    const formIsValid = ref(true);

    function clearValidity(input) {
      this[input].is_Valid = true;
    }
    // console.log(name.value.is_Valid);
    function validatForm() {
      formIsValid.value = true;
      if (name.value.val === "") {
        name.value.is_Valid = false;
        formIsValid.value = false;
      }
      if (department.value.val === "") {
        department.value.is_Valid = false;
        formIsValid.value = false;
      }
      if (specialization.value.val === "") {
        specialization.value.is_Valid = false;
        formIsValid.value = false;
      }
      if (degree.value.val === "") {
        degree.value.is_Valid = false;
        formIsValid.value = false;
      }
      if (mobile.value.val === "") {
        mobile.value.is_Valid = false;
        formIsValid.value = false;
      }
      if (email.value.val === "") {
        email.value.is_Valid = false;
        formIsValid.value = false;
      }
    }

    const is_active = ref("active");

    function submitForm() {
      validatForm();
      if (!formIsValid.value) {
        return alert("error");
      }
      const submitData = {
        name: name.value.val,
        department: department.value.val,
        specialization: specialization.value.val,
        degree: degree.value.val,
        mobile: mobile.value.val,
        email: email.value.val,
        is_active: is_active.value,
      };
      // console.log(submitData);
      emit("submit", submitData);
    }
    return {
      submitForm,
      name,
      department,
      specialization,
      degree,
      mobile,
      email,
      clearValidity,
      is_active,
    };
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input[type="checkbox"] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type="checkbox"] {
  display: inline;
  width: auto;
  border: none;
}

input[type="checkbox"]:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
