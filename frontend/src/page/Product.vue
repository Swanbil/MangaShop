<template>
  <div class="products">
    <h1 class="title mt-5">Shop</h1>
    <section class="container mt-5">
      <div class="list-item row">
        <Item class="item col-4" :item="item" :isLog="isLog" @addItem="onAddToChart"/>
        <Item class="item col-4" :item="item"/>
        <Item class="item col-4" :item="item"/>
        <Item class="item col-4" :item="item"/>
        <Item class="item col-4" :item="item"/>
      </div>
    </section>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
export default {
  name: "Product",
  props:{
    isLog: Boolean,
    cart : Array
  },
  components: {
    Item,
  },
  data() {
    return {
      item:{
        id:0,
        img : "https://media.melty.fr/article-4489355-ratio15_720-f6/media.jpg",
        title : "Manga's name",
        price : 9,
        description : "Some quick example text to build on the card title and make up the bulk of the card's content."
      },  
      localCart: this.cart //array of item
    };
  },
  methods:{
    //load all the item of the bdd and display it with v-for

    onAddToChart(item){
      const id = this.localCart.findIndex(i => i.id === item.id);
      if(id == -1){
        this.localCart.push(item);
      }
      else{
        this.localCart[id].quantity +=1;
      }
      console.log("cart = ", this.localCart);
      this.$emit('changeCart',this.localCart);
    }
  },

};
</script>

<style scoped>
.item{
    padding:10px;
}

</style>