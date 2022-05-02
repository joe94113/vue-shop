<template>
  <Navbar></Navbar>
  <router-view />
</template>

<script>
import Navbar from '../components/Navbar.vue';

export default {
  components: { Navbar },
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http
      .post(api, this.user)
      .then(({ data }) => {
        console.log(data);
        if (!data.success) {
          this.$router.push('/login');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
