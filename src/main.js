import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap';

createApp(App).use(BootstrapVue).use(IconsPlugin).use(store).use(router).mount('#app');
