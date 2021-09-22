<template>
  <div id="app">
    <NavBar />
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      value: "rien",
    };
  },
  methods: {
    async test() {
      const response = await axios.get("/api/test");
      console.log(response.data);
      this.value = response.data.message;
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
</style>
