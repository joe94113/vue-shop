import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import httpMessageState from './methods/pushMessageState';

const app = createApp(App);

app.config.globalProperties.$filters = {
  currency,
  date,
};

app.provide('httpMessageState', httpMessageState);

app.use(router);
app.use(VueAxios, axios);

app.component('Loading', Loading);

app.mount('#app');
