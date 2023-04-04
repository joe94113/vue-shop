<template>
  <ShopBlade>
    <div>
      <Loading :active="isLoading"></Loading>
      <table class="table align-middle">
        <thead>
          <tr>
            <th>圖片</th>
            <th>商品名稱</th>
            <th>價格</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in sortProducts" :key="item.id">
            <td style="width: 200px">
              <div
                style="height: 100px; background-size: cover; background-position: center"
                :style="{ backgroundImage: `url(${item.imageUrl ?? ''})` }"
              ></div>
            </td>
            <td>
              <a type="button" class="text-dark" @click="getProduct(item.id)" @keydown="bar">{{
                item.title
              }}</a>
            </td>
            <td>
              <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
              <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
              <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
            </td>
            <td>
              <div class="btn-group btn-group-sm">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  @click="getProduct(item.id)"
                >
                  查看更多
                </button>
                <button
                  type="button"
                  class="btn btn-outline-danger"
                  :disabled="item.id == cartLoadingItem"
                  @click="addCart(item.id)"
                >
                  <div
                    v-if="item.id == cartLoadingItem"
                    class="spinner-grow text-danger spinner-grow-sm"
                    role="status"
                  >
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  加到購物車
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </ShopBlade>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import ShopBlade from '@/layouts/ShopBlade.vue';
import productStore from '@/stores/productStore';
import statusStore from '@/stores/statusStore';
import cartStore from '@/stores/cartStore';

export default {
  data() {
    return {};
  },
  components: {
    ShopBlade,
  },
  computed: {
    ...mapState(productStore, ['sortProducts']),
    ...mapState(statusStore, ['isLoading', 'cartLoadingItem']),
  },
  methods: {
    ...mapActions(productStore, ['getProducts']),
    ...mapActions(cartStore, ['addCart']),
    getProduct(id) {
      this.$router.push(`/product/${id}`);
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
