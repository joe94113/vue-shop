<script setup>
import HeaderMenu from '@/components/HeaderMenu.vue';
import ToastMessages from '@/components/ToastMessages.vue';
import emitter from '@/methods/emitter';
import { provide } from 'vue';

provide('emitter', emitter);
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <header class="fixed-top">
      <HeaderMenu></HeaderMenu>
    </header>

    <main>
      <div class="container-fluid mt-3 position-relative">
        <ToastMessages></ToastMessages>
        <router-view />
      </div>
      <slot />
    </main>

    <footer id="contactus" class="py-5 bg-dark text-light">
      <ul class="list-unstyled d-flex justify-content-center">
        <li class="p-3">
          <a href="#" class="link-light">連結名稱</a>
        </li>
        <li class="p-3">
          <a href="#" class="link-light">連結名稱</a>
        </li>
        <li class="p-3">
          <a href="#" class="link-light">連結名稱</a>
        </li>
        <li class="p-3">
          <a href="#" class="link-light">連結名稱</a>
        </li>
      </ul>
      <ul class="list-unstyled d-flex justify-content-center">
        <li>
          <a class="pe-3 link-warning" href="#"><i class="fab h5 fa-facebook"></i></a>
        </li>
        <li>
          <a class="pe-3 link-warning" href="#"><i class="fab h5 fa-instagram"></i></a>
        </li>
        <li>
          <a class="pe-3 link-warning" href="#"><i class="fab h5 fa-twitter-square"></i></a>
        </li>
        <li>
          <a class="pe-3 link-warning" href="#"><i class="fas h5 fa-envelope"></i></a>
        </li>
      </ul>
      <div class="text-center mt-4">
        <p class="small text-secondary m-0">@copyright 2099 YAYAYAYAYA</p>
      </div>
    </footer>
  </div>
</template>
