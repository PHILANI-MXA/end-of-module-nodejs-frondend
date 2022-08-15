<template>
<p></p>
    <!-- <div id="login" class="container min-vh-100">
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
</div> -->
</template>

<script>
import axios from 'axios';

export default {
  name: ''
  // data() {
  //   return {
  //     user_fullname: "",
  //     email: "",
  //     user_password: "",
  //     user_role: "",
  //     phone_number: "",
  //     join_date: ""
  //   }
  // },
  // methods: {
  //   register() {
  //     this.$store.dispatch('register', {
  //       user_fullname: this.user_fullname,
  //       email: this.email,
  //       user_password: this.user_password,
  //       phone_number: this.phone_number,
  //       join_date: this.join_date
  //     });
  //   }
  // }
}
</script>