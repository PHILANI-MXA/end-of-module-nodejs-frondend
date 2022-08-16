<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-primary ">
  <div class="container-fluid">
    <a class="navbar-brand my-2 my-sm-0 " href="#">JustProducts.<img src="https://i.postimg.cc/mr99yjBM/favicon-32x32.png" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarColor02">
      <ul class="navbar-nav me-auto">
        <li class="nav-item text-white">
         <router-link class="text-decoration-none text-white" to="/">Home</router-link>
        </li>
         <li class="nav-item text-decoration-none">
           <router-link class="text-decoration-none text-white" to="/products">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/login">Login</router-link>
        </li>
        <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/signup">SignUp</router-link>
        </li>
          <li class="nav-item">
          <router-link class="text-decoration-none text-white" to="/admin">Admin</router-link>
        </li>
         <li class="nav-item">
          <router-link class="text-decoration-none text-white contact float-end" to="/cart"><i class="bi bi-cart-plus"></i></router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input id="search" class="form-control me-sm-2" type="text" placeholder="Search" v-model="search">
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import ProductsViewVue from '@/views/ProductsView.vue'
export default {
    data() {
    return {
      search:'',
    }
  },
    computed: {
       products() {
      return this.$store.state.products?.filter(products =>{
          let isMatch = true;
          if (!products.title.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        }
  },
  mounted() {
    this.$store.dispatch('fetchProducts');
  },
  methods: {
    addToCart() {
      const item = {
        title: '',
        category: '',
        product_description: '',
        img: '',
        price: '',
      }
    }
  }
   /*data(){
    return{
      search: ""
    }
  },
  methods: {
    categoty() {
      $this.$store.commit("product.category");
    }
  },
  mounted() {
    this.$store.dispatch('getProducts')
  },
  computed: {
    products() {
      return this.$store.state.products?.filter(product => {
        let isMatch = true;
        if (!product.name.toLowerCase().includes(this.search.toLowerCase())) { isMatch = false } 
      return isMatch
      
    });
    },

  },*/

}




</script>

<style>
.nav-item{
  display: flex;
  width: 100%;
  padding: 10px;
}
.navbar-brand{
  font-style: italic;
}

.btn{
  color: white;
  border-color: white;
}

nav {
position:fixed;
width: 100%;
top: 0;
background-color: lightblue;
z-index:50;
}

</style>