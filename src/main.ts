import { createApp } from 'vue';
import { createPinia } from 'pinia';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import vi from 'element-plus/es/locale/lang/vi';

import 'element-plus/theme-chalk/dark/css-vars.css';

import 'animate.css';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(ElementPlus, {
  locale: vi
});

// #region overriding element-plus autoimport css
import './assets/core.css';
import './assets/UICore.css';
// #endregion

app.use(createPinia());
app.use(router);


app.mount('#app');
