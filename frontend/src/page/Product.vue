<template>
  <div class="products">
    <h1 class="title mt-5">Shop</h1>
    <section class="container mt-5">
      <div class="list-item row">
        <div class="col-3" v-for = "manga in mangas" v-bind:key="manga.idManga">
          <Item class="item" :item="manga" :isLog="isLog" @addItem="onAddToChart"/>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import Item from "../components/Item.vue";
export default {
  name: "Product",
  props: {
    isLog: Boolean,
    cart: Array,
  },
  components: {
    Item,
  },
  data() {
    return {
      mangas : [],
    };
  },
  methods: {
     async displayManga(){
      const affManga = await axios.get('/api/mangas');
      this.mangas = affManga.data.mangas;
    },

    async onAddToChart(item) {
      try {
        await axios.post("/api/cart/addItem", { item: item });
      } catch (e) {
        console.warn(e);
      }
    },
  },
   mounted (){
    this.displayManga()
  }
};
</script>

<style scoped>
.item {
  padding: 10px;
}


</style>