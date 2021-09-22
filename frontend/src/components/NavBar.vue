<template>
  <div class="header p-1">
    <ul class="d-flex flex-row p-1 align-items-center">
      <li><router-link class="link" to="/">Home</router-link></li>
      <li>
        <router-link class="link" to="/login">Product</router-link>
      </li>
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
.header{
    background-color:beige;
}
li {
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  padding:10px;
  
}
li:hover{
    background-color:rgb(235, 235, 235);
}
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color:rgb(92, 88, 88);
}
</style>