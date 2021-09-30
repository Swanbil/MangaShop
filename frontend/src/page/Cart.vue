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
          <tr class="articles" v-for="article in cart" :key="article.id">
            <th scope="row">{{ article.id }}</th>
            <td>{{ article.title }}</td>
            <td>{{ article.price }}$</td>
            <td>
              <b-button class="btn bg-success" @click="increaseQuantity(article.id)">+</b-button>
              {{ article.quantity }}
              <b-button class="btn bg-danger" @click="decreaseQuantity(article.id)">-</b-button>
              </td>
            <!-- button +/- to increment or decrement quantity -->
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
      const cart = response.data;
      this.$emit('changeCart', cart);
    },
    async increaseQuantity(idArticle){
      const id = this.cart.findIndex(i => i.id === idArticle);
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
      const id = this.cart.findIndex(i => i.id === idArticle);
      const item = this.cart[id];
      try {
        await axios.put("/api/cart/deleteItem", { item: item });
      } catch (e) {
        console.warn(e);
      }
      await this.getCart();
      this.setTotalCart();
    }
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
  padding:0 7px 0 7px;
}
</style>
