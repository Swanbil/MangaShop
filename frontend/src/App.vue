<template>
  <div id="app">
    <NavBar :isLog="isLog" @clicked="onChangeLog" :isAdmin="isAdmin" @changeAdmin="onChangeAdmin"/>
    <router-view 
      :isLog="isLog"
      :isAdmin="isAdmin"
      @clicked="onChangeLog"
      @changeAdmin="onChangeAdmin">
    </router-view>
    <Footer id="footer"/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      isLog:false,
      isAdmin:false
    }
  },
  methods: {
    onChangeLog(value) {
      this.isLog = value;
    },
    onChangeAdmin(value) {
      this.isAdmin = value;
    },
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
  
}
#footer {
  position: absolute;
  bottom: 0;
  width: 100%; 
}
</style>
