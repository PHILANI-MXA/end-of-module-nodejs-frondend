<template>
   <div id="form" class="container h-100">
   <h2></h2>
   <UserCompLogin/>
   </div>
</template>

<script>
import userCompLoginVue from '@/components/userCompLogin.vue'
import UserCompLogin from '@/components/userCompLogin.vue'

export default {
    components : { userCompLoginVue, UserCompLogin }
}

</script>

<style scoped>
.form{
    background-color: azure;
}
</style>