<template>
  <div class="sidemenu-container navbar-collapse  fixed-menu">
    <div id="remove-scroll">
      <ul
        class="sidemenu page-header-fixed"
        data-keep-expanded="false"
        data-auto-scroll="true"
        data-slide-speed="200"
        style="padding-top: 20px"
      >
        <li class="nav-item start active open">
          <a to="/" class="nav-link">
            <font-awesome-icon :icon="['fas', 'gauge-high']" />
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <router-link to="/email" class="nav-link nav-toggle">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span class="title">Email</span>

            <!-- <span class="label label-rouded label-menu green-bgcolor">3</span> -->
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/doctors" class="nav-link nav-toggle">
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <span class="title">Doctors</span>

            <!-- <span class="label label-rouded label-menu green-bgcolor">3</span> -->
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 16px;
  padding-left: 5px;
}
</style>
