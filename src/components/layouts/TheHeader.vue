<template>
  <header>
    <div class="page-logo">
      <a href="index-2.html">
        <font-awesome-icon class="logo-icon" :icon="['fas', 'heart-pulse']" />
        <span class="logo-default">FanSmile</span>
      </a>
    </div>

    <nav>
      <ul>
        <li></li>
      </ul>
    </nav>
  </header>
</template>
<script>
export default {
  name: "App",
};
</script>
<style scoped>
header {
  width: 100%;
  background-color: #1976d2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border: 0;
  padding: 0;
  min-height: 50px;
  filter: none;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  border: 1px solid transparent;
}
.page-logo {
  float: left;
  display: block;
  width: 300px;
  height: 60px;
  padding: 5px 20px 0px 20px;
  background: #1976d2;
}
.page-logo a {
  padding: 0%;
  color: #fff;
  font-size: 25px;
}
.logo-icon {
  padding-right: 5px;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  padding: 0%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
