<template>
  <div v-if="producs" class="single">
    <router-link to="/Singleproduct">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div id="singleproduct">
      <div id="productimage">
        <img :src="products.img" :alt="products.name" id="picture"/>
      </div>
      <div id="productbox">
        <div class="productdetails">
          <h2>Product Name:</h2>
          <br>
          <h1>{{ products.name }}</h1>
        </div>
        <div class="product_description">
          <h2>Details</h2>
          <br>
          <h1>{{ products.product_description }}</h1>
        </div>
        <div class="productprice">
          <h5>price:</h5>
          <br>
          <h1>R{{ product.price}}</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    player() {
      return this.$store.state.player
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.id)
  },

}
</script>