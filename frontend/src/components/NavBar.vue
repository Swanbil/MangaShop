<template>
  <div class="header p-1">
    <ul class="d-flex flex-row p-1 align-items-center">
      <router-link class="link" to="/"><li>Home</li></router-link>
      <router-link class="link" to="/login"><li>Product</li></router-link>
      <li class="ms-auto p-2">
        <router-link class="link" to="/login">
          <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          Login
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.header {
  background-color: rgb(250, 250, 229);
}
li {
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
li:hover {
  background-color: rgb(235, 235, 235);
}
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #a59a8d;
}
</style>