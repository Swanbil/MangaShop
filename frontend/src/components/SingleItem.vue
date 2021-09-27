<template>
  <div class="single-item">
    <h1 class="mt-5">Single item id : {{ id }}</h1>

    <b-card tag="article" class="mb-2">
      <img class="card-img-left" :src="item.img" alt="Card image cap" />
      <b-card-body class="card-body-right">
        <b-card-title  class="d-flex flex-direction-row">
          <div>{{ item.title }}</div>
          <b-button class="btn" variant="success">+</b-button>
        </b-card-title>
        <b-card-text >
          {{ item.description }}
        </b-card-text>
        <b-card-footer>{{ item.price }}$</b-card-footer>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  name: "SingleItem",
  components: Item,
  data() {
    return {
      id: this.$route.params.id,
      item: {
        id: 0,
        img: "https://media.melty.fr/article-4489355-ratio15_720-f6/media.jpg",
        title: "Manga's name",
        price: 9,
        description:
          "Some quick example text to build on the card title and make up the bulk of the card's content.",
      },
    };
  },
  methods: {
    //request bbd to load the item information with the id
  },
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
