import { createApp } from 'vue';
import { createPinia } from 'pinia';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate';
import AllRules from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
/* import specific icons */
import { faUserSecret, fas } from '@fortawesome/free-solid-svg-icons';

import App from './App.vue';
import router from './router';
import { currency, date } from './methods/filters';
import httpMessageState from './methods/pushMessageState';

/* add icons to the library */
library.add(faUserSecret);
library.add(fas);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.config.globalProperties.$filters = {
  currency,
  date,
};

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});
// 設定預設語系
setLocale('zh_TW');

app.provide('httpMessageState', httpMessageState);

app.use(router);
app.use(VueAxios, axios);

app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
