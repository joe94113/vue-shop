<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container align-items-center">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuContent"
          aria-controls="menuContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <router-link class="nav-link" to="/"
          ><img height="30" src="/vue-shop/logo.png" alt=""
        /></router-link>
        <ul class="list-unstyled m-0 d-flex order-1 order-lg-3">
          <li class="nav-item dropdown">
            <a
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              type="button"
            >
              <font-awesome-icon :icon="['fass', 'cart-shopping']" />
              <span style="color: aquamarine" class="badge">{{
                cart.carts ? cart.carts.length : 0
              }}</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li v-for="item in cart.carts" :key="item.id">
                <router-link
                  class="dropdown-item"
                  :to="`/product/${item.product.id}`"
                  active-class="active"
                  >{{ item.product.title }} 數量: {{ item.qty }}</router-link
                >
              </li>
              <li>
                <router-link class="dropdown-item" to="/user/cart" active-class="active"
                  >查看購物車</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <div class="collapse navbar-collapse order-2" id="menuContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/" active-class="active">首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/products" active-class="active"
                >產品目錄</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" active-class="active">聯絡我們</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import cartStore from '@/stores/cartStore';
import { storeToRefs } from 'pinia';

const useCartStore = cartStore();
useCartStore.getCart();
const { cart } = storeToRefs(useCartStore);
</script>
