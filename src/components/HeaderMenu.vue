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
          <li class="me-3">
            <router-link class="navbar-brand" to="/user/cart"
              ><font-awesome-icon :icon="['fass', 'cart-shopping']" /><span
                style="color: aquamarine"
                class="badge"
                >12</span
              ></router-link
            >
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
