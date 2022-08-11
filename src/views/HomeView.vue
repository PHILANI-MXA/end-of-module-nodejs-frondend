<template>
<div class="container min-vh-100 p-4">
  <div class="home">
    <HelloWorld/>
  </div>
  </div >
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.container{
  background-image: url(https://i.postimg.cc/J49gVnWT/mike-petrucci-c9-FQyq-IECds-unsplash.jpg) !important;
  background-attachment: fixed;
}

</style>
