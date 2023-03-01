// import { createApp } from 'vue';
// import { createPinia } from 'pinia';
import 'element-plus/theme-chalk/dark/css-vars.css';
import 'v-contextmenu/dist/themes/default.css';
import { ElMessage } from 'element-plus';

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
// TODO 
// [ ]chuyển bootstrap - utilities thành import
// import './assets/bootstrap-utilities.scss';
// #endregion

app.use(contextmenu);
app.use(createPinia());
app.use(router);

// TODO 
// [ ] Loại Bỏ các import đã sử dụng autoimport
// [x] Tạo lớp wrapper cơ bản cho axios
app.mount('#app');
