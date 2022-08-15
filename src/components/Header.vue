<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-primary bg-danger">
  <div class="container-fluid">
    <a class="navbar-brand bg-success" href="#">JustProducts.<img src="https://i.postimg.cc/t4pB77Nr/favicon-32x32.png" alt=""></a>
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
          <router-link class="text-decoration-none text-white contact" to="/contact">Contact Us</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <input id="search" class="form-control me-sm-2" type="text" placeholder="Search">
        <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
<router-view/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: '',
  components: {
  },

}
</script>

<style>
.nav-item{
  display: flex;
  width: 100%;
  padding: 10px;
}

nav {
position:fixed;
width: 100%;
top: 0;
}

</style>