<template>
  <ShopBlade>
    <div class="home">
      <section
        class="min-vh-100 bg-dark text-center text-white d-flex"
        style="
          background: url('https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2tncm91bmR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60')
            center;
          background-size: cover;
        "
      >
        <div class="container m-auto">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <h1>Hero Title <span class="text-danger">So Good</span></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi nulla pariatur
                aliquam ipsam! Inventore deleniti minus eligendi distinctio excepturi quos cumque
                voluptatum incidunt iusto doloremque a ut cum alias provident quae consequuntur esse
                dolorem mollitia libero nisi omnis, eius fuga!
              </p>
              <a href="#" class="btn btn-outline-danger">Take a Tour</a>
              <a href="#" class="btn btn-danger">Call to Action</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </ShopBlade>
</template>

<script>
import { EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import ShopBlade from '@/layouts/ShopBlade.vue';

import 'swiper/scss';
import 'swiper/scss/effect-fade';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,
    ShopBlade,
  },
  created() {
    // console.log(process.env.VUE_APP_PATH, process.env.VUE_APP_API);
  },
  setup() {
    return {
      EffectFade,
    };
  },
};
</script>
