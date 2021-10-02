<template>
  <div class="products">
    <h1 class="title mt-5">Shop</h1>
    <div class="select-sort">
      <b-form-select v-model="selected" :options="options" @change="sortByCategory(selected)" class="select"></b-form-select>
      <div class="aff-select" v-if="selected != null">Category: <strong>{{ selected }}</strong></div>
  </div>
    <section class="container mt-5">
      <div class="list-item row" v-if="sortMangas == null">
        <div class="col-3"  v-for="manga in allMangas" v-bind:key="manga.idManga">
          <Item
            class="item"
            :item="manga"
            :isLog="isLog"
            @addItem="onAddToChart"
          />
        </div>
      </div>
      <div class="list-item row" v-else>
        <div class="col-3"  v-for="manga in sortMangas" v-bind:key="manga.idManga">
          <Item
            class="item"
            :item="manga"
            :isLog="isLog"
            @addItem="onAddToChart"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import Item from "../components/Item.vue";
export default {
  name: "Product",
  props: {
    isLog: Boolean,
    cart: Array,
    count: Number,
  },
  components: {
    Item,
  },
  data() {
    return {
      allMangas: [],
      sortMangas :null,
      selected: null,
       options: [
          { value: null, text: 'All Mangas' },
          { value: 'action', text: 'Action' },
          { value: 'aventure', text: 'Adventure' },
          { value: 'comedie', text: 'Comedy' },
          { value: 'sport', text: 'Sport'}
        ]
    };
  },
  methods: {
    async displayManga() {
      const affManga = await axios.get("/api/mangas");
      this.allMangas = affManga.data.mangas;
    },
    sortByCategory(categorie){
      if(categorie != null){
        this.sortMangas = this.allMangas.filter(m => m.categorie == categorie);
        console.log(this.sortMangas);
      }
      else{
        this.sortMangas = null;
      }
    },
    async onAddToChart(item) {
      try {
        await axios.post("/api/cart/addItem", {
          item: item,
          count: this.count + 1,
        });
        this.$emit("changeCount", true);
      } catch (e) {
        console.warn(e);
      }
    },
  },
  async mounted() {
    const response = await axios.get("/api/count");
    var hasItem = response.data.hasItem;
    this.$emit("changeCount", hasItem);
    this.displayManga();
  },
};
</script>

<style scoped>
.item {
  padding: 10px;
}
.select-sort{
  display:flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top:1%;
  margin-right:5%;
  
}
.select{
  margin-right:2%;
  padding:5px;
}
</style>