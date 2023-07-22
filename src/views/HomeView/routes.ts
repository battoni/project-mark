export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
  {
    path: '/',
    name: 'root',
    component: () => import('@/views/HomeView/HomeView.vue'),
  },
];
