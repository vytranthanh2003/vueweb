import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue'; // Import LoginView nếu có
import RegisterView from '../views/RegisterView.vue'; // Import RegisterView nếu có
import TrashCategoryView from '../views/TrashCategoryView.vue'; // Import TrashCategoryView mới

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView,
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView,
  },
  {
    path: '/category/:type', // Đường dẫn có tham số `type`
    name: 'TrashCategory',
    component: TrashCategoryView,
    props: true, // Truyền tham số `type` như props cho component
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
