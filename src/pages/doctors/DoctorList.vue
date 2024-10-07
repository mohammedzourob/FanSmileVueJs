<template>
  <div>
    <div class="page-bar">
      <div class="page-title-breadcrumb">
        <div class="pull-left">
          <div class="page-title">Doctor List</div>
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
            <a class="parent-item" href="#">Doctors</a>&nbsp;<font-awesome-icon
              :icon="['fas', 'angle-right']"
            />
          </li>
          <li class="active">Doctor List</li>
        </ol>
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <div class="tabbable-line">
          <div class="tab-content">
            <div class="tab-pane active fontawesome-demo" id="tab1">
              <div class="row">
                <div class="col-md-12">
                  <div class="card card-topline-red">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-6 col-sm-6 col-xs-6">
                          <div class="btn-group">
                            <router-link
                              id="addRow"
                              to="/add-doctor"
                              class="btn btn-info pull-right"
                            >
                              Add New
                              <font-awesome-icon :icon="['fas', 'plus']" />
                            </router-link>
                          </div>
                        </div>
                      </div>

                      <table
                        class="table table-striped table-bordered table-hover table-checkable order-column valign-middle"
                        id="example4"
                      >
                        <thead>
                          <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>Specialization</th>
                            <th>Degree</th>
                            <th>Mobile</th>
                            <th>Email</th>
                            <th>Joining Date</th>
                            <th>Active</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="odd gradeX">
                            <doctor-item
                              v-for="doctor in doctors"
                              :key="doctor.id"
                              :name="doctor.name"
                              :department="doctor.department"
                              :specialization="doctor.specialization"
                              :degree="doctor.degree"
                              :mobile="doctor.mobile"
                              :email="doctor.email"
                              :joining_date="doctor.joining_date"
                              :is_active="doctor.is_active"
                            ></doctor-item>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import doctorItem from "@/components/doctors/doctorItem.vue";

export default {
  components: { doctorItem },
  setup() {
    const store = useStore();

    const doctors = computed(() => {
      return store.getters.doctorsList;
    });

    return { doctors };
  },
};
</script>
