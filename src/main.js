import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import './assets/styles.css';


const app = createApp(App);
app.use(vuetify);
app.use(router); // Đảm bảo rằng router được sử dụng
app.mount('#app');
