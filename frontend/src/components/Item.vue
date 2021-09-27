<template>
  <div class="item">
      
    <b-card
      img-src="https://media.melty.fr/article-4489355-ratio15_720-f6/media.jpg"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
        <b-card-title class="d-flex align-items-center">
            <div>Card title</div>
            <b-button class="btn" variant="success">+</b-button>
        </b-card-title>
        <b-card-text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
        </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Item",
  data() {
    return {};
  },
};
</script>

<style scoped>
.btn{
    margin-left:auto;
}
</style>