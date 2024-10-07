<template>
  <the-header></the-header>
  <sidebar-container></sidebar-container>

  <router-view v-slot="soltProps">
    <div class="page-content-wrapper">
      <div class="page-content">
        <transition name="route" mode="out-in">
          <component :is="soltProps.Component"></component>
        </transition>
      </div>
    </div>
  </router-view>
</template>

<script>
import TheHeader from "./components/layouts/TheHeader.vue";
import SidebarContainer from "./components/layouts/Sidebar-container.vue";

export default {
  components: {
    TheHeader,
    SidebarContainer,
  },
};
</script>

<style>
@import url("./assets/css/theme_style.css");
@import url("./assets/css/plugins.min.css");
@import url("./assets/css/style.css");
@import url("./assets/css/responsive.css");
@import url("./assets/css/theme-color.css");

@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  background-color: #eef1f5;
  padding: 0 !important;
  margin: 0 !important;
  font-family: Roboto, sans-serif;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: rgba(0, 0, 0, 0.87);
}

.pull-left {
  float: inline-start;
}
.pull-right {
  float: inline-end;
}
.page-bar .page-breadcrumb {
  float: right;
}
.route-enter-from {
  opacity: 0;
  transition: transitionY(-30px);
}

.route-leave-from {
  opacity: 0;
  transition: transitionY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}
.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-to {
  opacity: 1;
  transition: transitionY(0);
}
</style>
