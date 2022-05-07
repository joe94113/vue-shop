<template>
  <loading v-model:active="isLoading" :can-cancel="true" />
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">管理後臺</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link">產品</router-link>
          <router-link to="/dashboard/orders" class="nav-link">訂單</router-link>
          <!-- <router-link to="/dashboard/coupons" class="nav-link">優惠券</router-link> -->
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.isLoading = true;
      this.$http
        .post(api, this.user)
        .then(({ data }) => {
          // tvVqbz2sDrbqv
          this.isLoading = false;
          if (data.success) {
            console.log(data);
            this.$router.push('/login');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
