import { createStore } from 'vuex';
import axios from 'axios';
// import router from '@/router';

const grpjpURL = 'https://group-jp-api.herokuapp.com/';
export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null
  },
  getters: {
    getUsers: state => state.users,
    getProducts: state => state.products

  },
  mutations: {

    setUsers (state, values) {
      state.users = values;
    },
    setUser (state, value) {
      state.user = value;
    },
    setProducts (state, values) {
      state.products = values;
    },
    setProduct (state, value) {
      state.product = value;
    }

  },
  actions: {
    fetchProducts: async (context) => {
      const res = await axios.get(grpjpURL + 'products');
      const { results } = await res.data;
      if (results) {
        context.commit('setProducts', results);
      }
    },
    fetchProduct: async (context) => {
      const res = await axios.get(grpjpURL + 'productid');
      const { results } = await res.data;
      if (results) {
        context.commit('setProduct', results);
      }
    },
    fetchUsers: async (context) => {
      const res = await axios.get(grpjpURL + 'users');
      const { results } = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    fetchUser: async (context) => {
      const res = await axios.get('https://group-jp-api.herokuapp.com/user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
    },

    register: async (context, payload) => {
      const { user_fullname, email, user_password, user_role, phone_number, join_date } = payload;
      // fetch(grpjpURL + '/users/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8'
      //   },
      //   body: JSON.stringify({
      //     user_fullname: user_fullname,
      //     email: email,
      //     user_password: user_password,
      //     phone_number: phone_number,
      //     join_date: join_date
      //   })
      // })
      //   .then((response) => response.json())
      //   .then((json) => context.commit("setUsers", json));
      let data = {
        user_fullname,
        email,
        user_password,
        user_role,
        phone_number,
        join_date
      }
      let res = await axios.post(grpjpURL + 'users/register', data);
      let {results} = await res.data;
      console.log(results);
      if (results) {
        context.commit('setUsers', results);
      }
    },
    login: async (context, payload) => {
      const { email, user_password } = payload;
      const result = await fetch(grpjpURL + 'user', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify({
          email: email,
          user_password: user_password
        })
      });
      if (result) {
        // router.push({ name: "home" })
        // alert('Loading...')
      } else {
        this.errMsg = 'error';
      }
    }
  },
  modules: {
  }
});
