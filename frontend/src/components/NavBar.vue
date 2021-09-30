<template>
  <div class="header p-1">
    <b-navbar toggleable="sm" class="header">
      <b-navbar-brand class="logo mx-2 px-2 text-light">
        <b-icon icon="book-half" aria-hidden="true"></b-icon>
        MangaSHOP
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="px-2"
            ><router-link class="link" to="/">Home</router-link></b-nav-item
          >
          <b-nav-item class="px-2"
            ><router-link class="link" to="/product"
              >Product</router-link
            ></b-nav-item
          >
        </b-navbar-nav>
        <b-navbar-nav class="ms-auto">
          <div v-if="!isLog">
            <router-link class="link" to="/login">
              <b-icon icon="person-circle" aria-hidden="true"></b-icon>
              Login
            </router-link>
          </div>
          <div v-else class="item-btn ms-auto">
            <router-link class="link" to="/cart">
              <div class="cart text-success d-flex flex-direction_row">
                <b-icon icon="cart4" aria-hidden="true"></b-icon>
                <div>Cart</div>
              </div>
            </router-link>
            <b-button class="btn-log text-light d-flex flex-direction-row p-1" @click="logout()">
              <b-icon icon="power" aria-hidden="true"></b-icon>
              <div>Logout</div>
            </b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    isLog: Boolean,
    isAdmin: Boolean,
  },
  methods: {
    async logout() {
      this.$emit("clicked", false);
      this.$emit("changeAdmin", false);
      localStorage.removeItem("token");
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.header {
  background-color: rgb(41, 39, 39);
}
.logo {
  list-style: none;
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.cart {
  padding-right: 30px;
}
.item-btn {
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin:auto;
}
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #277ac7;
}
.link:hover{
  color: #8cc5fa;
}
.btn-log {
  padding: 5%;
  font-weight: bold;
  background-color: rgb(226, 58, 46);
}
.btn-log:hover {
  background-color: rgb(236, 94, 75);
}
@media screen and (max-width: 570px) {
  .item-btn  {
    flex-direction: column;
    margin:auto;
  }
}
</style>