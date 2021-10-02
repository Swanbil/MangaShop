<template>
  <div id="app">
    <NavBar
      :isLog="isLog"
      @clicked="onChangeLog"
      :isAdmin="isAdmin"
      @changeAdmin="onChangeAdmin"
      :cart="cart"
      :hasItem="hasItem"
    />
    <router-view
      :isLog="isLog"
      :isAdmin="isAdmin"
      :cart="cart"
      :hasItem="hasItem"
      @clicked="onChangeLog"
      @changeAdmin="onChangeAdmin"
      @changeCart="onChangeCart"
      @changeCount="onChangeCount"
      class="content"
    >
    </router-view>
    <Footer id="footer" />
  </div>
</template>
 
<script>
import axios from "axios";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
const jwt = require("jsonwebtoken");
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      isLog: false,
      isAdmin: false,
      cart: [],
      hasItem: false,
    };
  },
  methods: {
    onChangeLog(value) {
      this.isLog = value;
    },
    onChangeAdmin(value) {
      this.isAdmin = value;
    },
    onChangeCart(value) {
      this.cart = value;
    },
    onChangeCount(value) {
      this.hasItem = value;
    },
    async getCount() {
      const response = await axios.get("/api/count");
      const count = response.data.count;
      this.count = count;
    },
  },
  async created() {
    const token = localStorage.getItem("token");
    const decodeToken = jwt.decode(token);
    if (decodeToken.log == true) {
      this.isLog = true;
      this.isAdmin = decodeToken.admin;
    } else {
      this.isLog = false;
      this.isAdmin = false;
    }
  },
  async mounted() {
    await this.getCount();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  min-height: 100vh;
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.content {
  padding-bottom: 120px;
}
</style>
