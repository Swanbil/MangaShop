<template>
  <div class="carts">
    <h1 class="mt-5">Cart</h1>
    <section class="total">
      <table class="table">
        <thead class="thead">
          <tr class="tab-header">
            <th scope="col">id</th>
            <th scope="col">Articles</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr class="articles" v-for="article in cart" :key="article.idManga">
            <th scope="row">{{ article.idManga }}</th>
            <td>{{ article.title }}</td>
            <td>{{ article.price }}$</td>
            <td>
              <b-button class="btn bg-success" @click="increaseQuantity(article.idManga)">+</b-button>
              {{ article.quantity }}
              <b-button class="btn bg-danger" @click="decreaseQuantity(article.idManga)">-</b-button>
              </td>
          </tr>
          <tr class="bg-dark text-light">
            <th scope="row">TOTAL</th>
            <td></td>
            <td>{{ total }}$</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>

    <b-button class="btn" variant="success" @click="$router.push({name:'Command'})" v-if="cart.length !=0">Pay</b-button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "Cart",
  props: {
    isLog: Boolean,
    cart: Array,
  },
  data() {
    return {
      total: 0,
      localCart:this.cart
    };
  },
  methods: {
    //methods to add an other item or remove item
    setTotalCart() {
      var total = 0;
      this.cart.forEach((article) => {
        total += article.price * article.quantity;
      });
      this.total = total;
    },
    async getCart(){
      const response = await axios.get('/api/cart');
      const cart = response.data.cart;
      if(cart.length == 0){
        this.$emit('changeCount', false);
      }
      this.$emit('changeCart', cart);
    },
    async increaseQuantity(idArticle){
      const id = this.cart.findIndex(i => i.idManga === idArticle);
      const item = this.cart[id];
      try {
        await axios.post("/api/cart/addItem", { item: item });
      } catch (e) {
        console.warn(e);
      }
      await this.getCart();
      this.setTotalCart();
    },
    async decreaseQuantity(idArticle){
      const id = this.cart.findIndex(i => i.idManga === idArticle);
      const item = this.cart[id];
      try {
        await axios.put("/api/cart/deleteItem", { item: item });
      } catch (e) {
        console.warn(e);
      }
      await this.getCart();
      this.setTotalCart();
    },
  },
  async mounted() {
    await this.getCart();
    this.setTotalCart();
  },
};
</script>

<style scoped>
.table {
  margin: auto;
  margin-top:3%;
  width: 60%;
}
.tab-header {
  color: #277ac7;
}
.btn{
  margin-top:5%;
  padding:5px 5% 5px 5%;
}
</style>
