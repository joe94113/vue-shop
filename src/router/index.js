import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/dashboard',
    component: () => import(/* webpackChunkName: "adminDashboard" */ '../views/Admin/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import(/* webpackChunkName: "adminProducts" */ '../views/Admin/Products.vue'),
      },
      {
        path: 'orders',
        component: () => import(/* webpackChunkName: "adminOrders" */ '../views/Admin/Orders.vue'),
      },
      {
        path: 'coupons',
        component: () => import(/* webpackChunkName: "adminOrders" */ '../views/Admin/Coupons.vue'),
      },
    ],
  },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ '../views/User/Userboard.vue'),
    children: [
      {
        path: 'cart',
        component: () => import(/* webpackChunkName: "userCart" */ '../views/User/UserCart.vue'),
      },
      {
        path: 'checkout/:orderId',
        component: () => import(/* webpackChunkName: "userCheckout" */'../views/User/UserCheckout.vue'),
      },
    ],
  },
  {
    path: '/product/:productId',
    name: 'productShow',
    component: () => import(/* webpackChunkName: "productShow" */ '../views/ProductShow.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import(/* webpackChunkName: "products" */ '../views/Product.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
