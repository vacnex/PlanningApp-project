// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import 'element-plus/theme-chalk/dark/css-vars.css';
import App from './App.vue';

const app = createApp(App);


// #region custom animate css
import '~animate/_vars.css';
import '~animate/_base.css';
import '~animate/fading_entrances/fadeInUp.css';
// #endregion
// #region overriding element-plus, custom component,utilities css
import './assets/UICore.css';
import './assets/custom-component.css';
import './assets/bootstrap-utilities.scss';
// #endregion

app.use(createPinia());
app.use(router);


app.mount('#app');
