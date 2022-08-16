<template>
  <div v-if="product" class="single">
    <router-link to="/products">
      <div class="backbutton">
        <h1>Back</h1>
      </div>
    </router-link>
    <div v-for="item in product" :key="item.product_id" id="singleproduct">
      <div id="productimage">
        <img :src="item.img" :alt="item.name" id="picture"/>
      </div>
      <div id="productbox">
        <div class="productdetails">
          <h2>Product Name:</h2>
          <br>
          <h1>{{ item.title }}</h1>
        </div>
        <div class="product_description">
          <h2>Details</h2>
          <br>
          <h1>{{ item.product_description }}</h1>
        </div>
        <div class="productprice">
          <h5>price:</h5>
          <br>
          <h1>R{{ item.price}}</h1>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    product() {
      return this.$store.state.product
    }
  },
  mounted() {
    this.$store.dispatch('fetchProduct', this.$route.params.id)
  },

}
</script>

<style scoped>
.productimage{
  size: 50%;
}
</style>