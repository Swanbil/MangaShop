<template>
  <div class="header p-1">
    <ul class="d-flex flex-row p-1 align-items-center">
      <li class="logo">
        <b-icon icon="book-half" aria-hidden="true"></b-icon>
        MangaSHOP
      </li>
      <router-link class="link" to="/"><li class="item">Home</li></router-link>
      <router-link class="link" to="/product"><li class="item">Product</li></router-link>
      <li v-if="!isLog" class="item ms-auto p-2">
        <router-link  class="link" to="/login">
          <b-icon icon="person-circle" aria-hidden="true"></b-icon>
          Login
        </router-link>
      </li>
      <div v-else class="item-btn ms-auto ">
        <li>
          <router-link class="link" to="/cart">
          <li class="cart text-success d-flex flex-direction_row">
            <b-icon icon="cart4" aria-hidden="true"></b-icon>
            <div>Cart</div>
          </li>
          </router-link>
        </li>
        <li>
          <b-button class="btn-log text-light d-flex flex-direction-row p-1"  @click="logout()">
            <b-icon icon="power" aria-hidden="true"></b-icon>
            <div>Logout</div>
          </b-button>
        </li>
      </div>
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
.logo{
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    padding: 10px;
    color:rgb(255, 255, 255);
}
.cart{
  padding-right: 30px;
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
  display:flex;
  flex-direction: row;
  align-items: center;
}
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #277ac7;
}
.btn-log{
    padding:5%;
    font-weight: bold;
    background-color: rgb(226, 58, 46);
}
.btn-log:hover{
    background-color: rgb(236, 94, 75);
}

</style>