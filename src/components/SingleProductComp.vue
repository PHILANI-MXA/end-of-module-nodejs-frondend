<template>
<div id="products" class="container h-100 overflow-auto p-4 my-5 gy-5">

<h2 class="fw-bold display-5 text-white">Products</h2>
<h4 class="dispaly"></h4>
<div class="row  justify-content-between">
<div product in products class="col-md-2 card d-flex" :key="product.id">
<div>
  <div class="card-header">
  <h5 class="card-title">{{product.title}}</h5>
  <p class="card-text">{{product.category}}</p>
  </div>
  <div class="card-body">
  <img class="img-fluid" :src="product.img" :alt="product.title">
    <p class="card-text">{{product.product_description}}</p>
    <p class="card-text">R{{product.price}}</p>
  </div>
</div>
</div>
</div>
</div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
       }
  },
  mounted() { 
    this.$store.dispatch('fetchProduct');
  }
}

</script>

<style scoped>

.card{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
flex-wrap: wrap;
color: black;
font-family: San-Francisco;
transition: 0.4s ease-out;
margin-bottom: 10px;
width: 30%;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.22) 0px 19px 43px;
  transform: translate3d(0px, -1px, 0px);
}
</style>