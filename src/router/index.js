import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'; // Đảm bảo import LoginView.vue
import RegisterView from '../views/RegisterView.vue'; // Đảm bảo import RegisterView.vue

const routes = [
  {
    path: '/',
    name: 'home', // Tên route home
    component: HomeView,
  },
  {
    path: '/login', // Đường dẫn cho trang đăng nhập
    name: 'login',  // Tên route "login" phải chính xác
    component: LoginView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
