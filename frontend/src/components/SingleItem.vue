<template>
  <div class="single-item">
    <b-card no-body class="overflow-hidden" style="max-width: 800px">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="manga.image"
            alt="Image"
            class="img rounded-0"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body class="card-body">
            <b-card-title class="d-flex flex-direction-row font-weight-bold">
              <div class="title">{{ manga.title }}</div>
              <b-button class="btn" variant="success" @click="addToCart(manga)"
                >+</b-button
              >
            </b-card-title>
            <b-card-text>
              {{ manga.description }}
            </b-card-text>
            <b-card-footer>{{ manga.price }}$</b-card-footer>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SingleItem",
  props: {
    isLog: Boolean,
  },
  data() {
    return {
      id: this.$route.params.id,
      manga: {},
    };
  },
  methods: {
    //request bbd to load the item information with the id
    async affSingleManga() {
      const affManga = await axios.post("api/mangas/singlemanga", {
        idmanga: this.id,
      });
      this.manga = affManga.data;
    },
    sendManga(manga) {
      this.$emit("addManga", manga);
    },
    async addToCart(manga) {
      if (this.isLog) {
        try {
          manga['quantity'] = 1;
          await axios.post("/api/cart/addItem", { item: manga, count:this.count+1});
          this.$emit('changeCount',1)
        } catch (e) {
          console.warn(e);
        }
      }
      else{
        alert("Please connect to your account to add mangas on your chart");
      }
    },
  },
  mounted() {
    this.affSingleManga();
  },
};
</script>

<style scoped>
.card {
  margin: 5% 20% 5% 20%;
}
.card-body {
  background-color: rgb(243, 243, 243);
}
.img {
  width: 80%;
}
.btn {
  margin-left: auto;
}
.title {
  font-weight: bold;
}
@media screen and (max-width: 800px) {
}
</style>
