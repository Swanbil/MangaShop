<template>
  <div class="single-item">
    <h1 class="mt-5">{{ title }}</h1>
    <b-card tag="article" class="mb-2">
      <img class="card-img-left" :src="manga.image" alt="Card image cap" />
      <b-card-body class="card-body-right">
        <b-card-title  class="d-flex flex-direction-row">
          <div>{{ manga.title }}</div>
          <b-button class="btn" variant="success">+</b-button>
        </b-card-title>
        <b-card-text >
          {{ manga.description }}
        </b-card-text>
        <b-card-footer>{{ manga.price }}$</b-card-footer>
        <b-card-footer>{{ manga.numVol }}$</b-card-footer>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Item from "./Item.vue";
import axios from 'axios';
export default {
  name: "SingleItem",
  components: Item,
  data() {
    return {
      id: this.$route.params.id,
      manga: {},
    };
  },
  methods: {
  //request bbd to load the item information with the id
    async affSingleManga(){
      const affManga = await axios.post ('api/affSingleManga',{
        idmanga : this.id,
      });
      this.manga = affManga.data
      console.log(this.manga)
    },
  },
  mounted (){
    this.affSingleManga()
  }
};
</script>

<style scoped>
.single-item {
  display: flex;
  flex-direction: column;
}
.card {
  width: 50%;
  margin: auto;
  margin-top: 5%;
}
.btn {
  margin-left: auto;
}
.card-img-left{
    width:100%;
}
</style>
