<template>
  <div class="products">
    <h1 class="title mt-5">Shop</h1>
    <section class="container mt-5">
      <div class="list-item row">
        <div class="manga" v-for = "manga in mangas" v-bind:key="manga.idmanga">
          <Item class="item col-4" :item="manga" :isLog="isLog" @addItem="onAddToChart"/>
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
  props:{
    isLog: Boolean,
    cart : Array
  },
  components: {
    Item,
  },
  data() {
    return {
      mangas : [],
      
      localCart: this.cart //array of item
    };
  },
  
  methods:{
    //load all the item of the bdd and display it with v-for
    async displayManga(){
      this.response = ''
      const affManga = await axios.get ('api/affManga',{});
      this.mangas = affManga.data
      console.log(this.mangas)
    },

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
  mounted (){
    this.displayManga()
  }

};
</script>

<style scoped>
.item{
  
}

</style>