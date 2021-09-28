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
            <td>{{ article.quantity }}</td>
            <!-- button +/- to increment or decrement quantity -->
          </tr>
          <tr class="bg-dark text-light">
            <th scope="row">TOTAL</th>
            <td></td>
            <td>{{total}}$</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script>
export default {
  name: "Cart",
  props: {
    isLog: Boolean,
    cart: Array,
  },
  data(){
      return{
          total:0
      }

  },
  methods: {
    //methods to add an other item or remove item
     setTotalCart(){
        
        var total = 0;
        this.cart.forEach(article => {
            total +=article.price * article.quantity;
        });
        this.total = total;
        }
  },
  mounted(){
      this.setTotalCart();
  }
  
};
</script>

<style scoped>
.table{
    margin:auto;
    width:80%;
    
}
.tab-header{
    color:#277ac7;
}

</style>
