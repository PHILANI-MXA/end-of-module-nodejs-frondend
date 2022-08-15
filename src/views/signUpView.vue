<template>
   <!-- <div id="form" class="">
        <SignUpComp />
   </div> -->
    <div id="login" class="container min-vh-100">
<h2 class="fw-bold p-2">Register</h2>
<div class="col-6 m-auto">
    <form class="container border border-black h-100" @submit.prevent="register">
    <h4 class="text-decoration-underline fw-bold text-white">Sign Up</h4>
  <div class="form-group">
    <label for="fullname">Fullname</label>
    <input type="text" class="form-control" id="fullname" v-model="user_fullname">
  </div>
    <div class="form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" v-model="email">
  </div>
   <div class="form-group">
    <label for="role">User Role</label>
    <input type="text" class="form-control" id="role" v-model="user_role">
  </div>
   <div class="form-group">
    <label for="password">password</label>
    <input type="password" class="form-control" id="password" v-model="user_password">
  </div>
    <div class="form-group">
    <label for="number">phoneNumber</label>
    <input type="tel" class="form-control" id="number" v-model="phone_number">
  </div>
   <div class="form-group">
    <label for="date">joinDate</label>
    <input type="date" class="form-control my-2" id="date" v-model="join_date">
  </div>
  
  <button class="btn btn-primary my-5" type="submit">Submit</button>
</form>
</div>
</div>
   
</template>

<script>

// import SignUpComp from '@/components/signUpComp.vue';

export default {
    // components: { SignUpComp },
    // data() {
    //     return {
    //         user_fullName: "",
    //         email: "",
    //         user_password: "",
    //         user_role: "",
    //         phone_number: "",
    //         join_date: "",
            
    //     }
    // },
    // computed: {
    //     user() {
    //         return this.$store.state.user;
    //     }
    // },

    // methods: {
    //     register() {
    //         return this.$store.dispatch("register", {
    //             user_fullName: this.user_fullName,
    //             email: this.email,
    //             user_password: this.user_password,
    //             user_role: this.user_role,
    //             phone_number: this.phone_number,
    //             join_date: this.join_date
    //         })
    //     }
    // }
    data() {
        return {
            user_fullname: '',
            email: '',
            user_password: '',
            user_role: '',
            phone_number: null,
            join_date: null
        }
    },
    methods: {
        register() {
            this.$store.dispatch('register', {
            user_fullname: this.user_fullname,
            email: this.email,
            user_password: this.user_password,
            user_role: this.user_role,
            phone_number: this.phone_number,
            join_date: this.join_date
        });
        }
    }
    
}

</script>

<style scoped>
.form{
    background-color: #fefefe;
}
</style>