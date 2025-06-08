import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PhotoGallery from "@/views/PhotoGallery.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/gallery',
      name: 'Photo Gallery',
      component: PhotoGallery,
    }
  ],
})

export default router
