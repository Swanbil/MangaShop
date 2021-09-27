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
        <b-button class="btn" variant="success" @click="addToChart(item)">+</b-button>
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
    isLog : Boolean
  },
  data() {
    return {
      ok:"ok"
    }
  },
  methods:{
    addToChart(item){
      if(this.isLog){
        item['quantity'] = 1;
        this.$emit('addItem',item);
      }
      else{
        alert("Please connect to your account to add mangas on your chart");
      }
    }
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
.link:hover{
  color:#686868;;
}

</style>