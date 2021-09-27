<template>
  <div class="item">
    <b-card
      :img-src="item.img"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="card mb-2"
    >
      <b-card-title class="d-flex align-items-center">
        <router-link :to="{ name: 'SingleItem', params: { id: item.id }}" class="link"><div>{{ item.title }}</div></router-link>
        <b-button class="btn" variant="success">+</b-button>
      </b-card-title>
      <b-card-text>
        {{ item.description }}
      </b-card-text>
      <b-card-footer>{{ item.price }}$</b-card-footer>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object,
  },
  data() {
    return {};
  },
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
.link:hover{
  color:#686868;;
}

</style>