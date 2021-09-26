<template>
  <div class="header p-1">
    <ul class="d-flex flex-row p-1 align-items-center">
      <router-link class="link" to="/"><li class="item">Home</li></router-link>
      <router-link class="link" to="/login"><li class="item">Product</li></router-link>
      <li v-if="!isLog" class="item ms-auto p-2">
        <router-link  class="link" to="/login">
          <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          Login
        </router-link>
        
      </li>
      <li v-else class="item-btn ms-auto p-1">
        <b-button class="btn m-2 text-light "  @click="logout()">
          <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          Logout
          </b-button>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props:{
    isLog: Boolean,
    isAdmin: Boolean
  },
  methods:{
    async logout(){
      this.$emit('clicked', false);
      this.$emit('changeAdmin', false);
      localStorage.removeItem('token');
    }
  }
};
</script>

<style scoped>
.header {
  background-color: rgb(41, 39, 39);
}
.item{
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.item:hover {
  background-color: rgb(59, 58, 58);
}
.item-btn{
  list-style: none;
}
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #277ac7;
}
.btn{
    width:90%;
    font-weight: bold;
    background-color: rgb(226, 58, 46);
}
.btn:hover{
    background-color: rgb(236, 94, 75);
}
</style>