<template>
  <div class="single-item">
    <b-card no-body class="overflow-hidden" style="max-width: 800px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="manga.image" alt="Image" class="img rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body class="card-body">
          <b-card-title  class="d-flex flex-direction-row">
            <div>{{ manga.title }}</div>
            <b-button class="btn" variant="success"  @click="addToCart(manga)">+</b-button>
          </b-card-title>
          <b-card-text >
            {{ manga.description }}
          </b-card-text>
          <b-card-footer >{{ manga.price }}$</b-card-footer>
      </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "SingleItem",
  props:{
    isLog : Boolean
  },
  data() {
    return {
      id: this.$route.params.id,
      manga:{}
    };
  },
  methods: {
  //request bbd to load the item information with the id
    async affSingleManga(){
      const affManga = await axios.post ('api/mangas/singlemanga',{
        idmanga : this.id,
      });
      this.manga = affManga.data
    },
    async addToCart(item){
      if(this.isLog){
        item['quantity'] = 1;
        this.$emit('addItem',item);
      }
      else{
        alert("Please connect to your account to add mangas on your chart");
      }
    }
  },
  mounted (){
    this.affSingleManga()
  }
};
</script>

<style scoped>
.card {
  margin:5% 20% 5% 20%;
}
.img{
  width:80%
}
.btn {
  margin-left: auto;
}
@media screen and (max-width: 800px) {
  
}
</style>
