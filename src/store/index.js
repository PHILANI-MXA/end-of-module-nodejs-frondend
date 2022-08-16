import { createStore } from 'vuex';
import axios from 'axios';
import router from '@/router';

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
    fetchProduct: async (context, id) => {
      const res = await axios.get(grpjpURL + 'products/' + id);
      console.log(res.data);
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
      const res = await axios.get(grpjpURL + 'user');
      const { results } = await res.data;
      if (results) {
        context.commit('setUser', results);
      }
    },

    register: async (context, payload) => {
      const { user_fullname, email, user_password, user_role, phone_number, join_date } = payload;
      const data = {
        user_fullname,
        email,
        user_password,
        user_role,
        phone_number,
        join_date
      };
      const res = await axios.post(grpjpURL + 'users/register', data);
      const results = await res.data;
      if (results) {
        context.commit('setUsers', results);
      }
    },
    login: async (context, payload) => {
      const { email, user_password } = payload;
      // fetch(grpjpURL + 'users/login', {
      //   method: 'POST',
      //   headers: {
      //     'Content-type': 'application/json; charset=UTF-8'
      //   },
      //   body: JSON.stringify({
      //     email: email,
      //     user_password: user_password
      //   })
      // }).then((res) => res.json())
      //   .then(data => {
      //     if (data) {
      //       router.push({ name: 'products' });
      //     }
      //   });
      const data = {
        email,
        user_password
      };
      const res = await axios.post(grpjpURL + 'users/login', data);
      const results = await res.data;
      if (results) {
        router.push({ name: 'admin' });
      }
    }
   /* addTocart: async (context, payload) => {
      fetch(grpjpURL + `users/${context.state.user.id}/cart`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(payload)
      }).then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTimeout(() => {
            router.push('/cart'), 5000
          });
        });
    }*/
  },
  modules: {
  }
});
