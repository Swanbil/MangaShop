<template>
  <div class="products">
    <h1 class="title mt-5">Shop</h1>
    <section class="container mt-5">
      <div class="list-item row">
        <Item class="item col-4" />
        <Item class="item col-4" />
        <Item class="item col-4" />
        <Item class="item col-4" />
        <Item class="item col-4" />
      </div>
    </section>
  </div>
</template>

<script>
import Item from "../components/Item.vue";
export default {
  name: "Product",
  components: {
    Item,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.item{
    padding:10px;
}

</style>