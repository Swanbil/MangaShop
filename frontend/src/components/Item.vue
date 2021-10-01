<template>
  <div class="item">
    <b-card tag="article" class="card mb-2 ">
      <img class="card-img-top" :src="item.image" alt="Card image cap"/>
      <b-card-title class="title d-flex align-items-center mt-3">
        <router-link :to="{ name: 'SingleItem', params: { id: item.idManga}}" class="link"><div>{{ item.title }}</div></router-link>
        <b-button class="btn" variant="success" @click="addToCart(item)">+</b-button>
      </b-card-title>
      <b-card-footer>{{ item.price }}$</b-card-footer>
    </b-card>
  </div>
</template>

<script>

export default {
  name: "Item",
  props: {
    item: Object,
    isLog : Boolean
  },
  data() {
    return {
      test:null
    }
  },
  methods:{
    async addToCart(item){
      if(this.isLog){
        item['quantity'] = 1;
        this.$emit('addItem',item);
      }
      else{
        alert("Please connect to your account to add mangas on your chart");
      }
    },
  }
};
</script>

<style scoped>
.btn {
  margin-left: auto;
}
.link{
  text-decoration: none;
  color:#424242;
  font-weight:bold;
}
.card-img-top{
    width:60%;
}
.link:hover{
  color:#686868;;
}
@media screen and (max-width: 770px) {
  .title {
    flex-direction: column;
  }
  .btn{
    margin:auto;
    padding:2px;
  }
}

</style>