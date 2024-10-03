import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import TrashCategoryView from '../views/TrashCategoryView.vue';

// Định nghĩa các route cho ứng dụng
const routes = [
  {
    path: '/',
    name: 'Home', // Tên route cho trang chính
    component: HomeView // Component cho route này
  },
  {
    path: '/category/:type', // Đường dẫn cho từng loại rác
    name: 'TrashCategory', // Tên route cho trang phân loại rác
    component: TrashCategoryView // Component cho route này
  }
];

// Tạo router
const router = createRouter({
  history: createWebHistory(), // Sử dụng lịch sử trình duyệt HTML5
  routes // Thêm các route vào router
});

export default router; // Xuất router để sử dụng trong ứng dụng
