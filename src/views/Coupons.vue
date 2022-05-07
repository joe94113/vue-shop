<template>
  <loading v-model:active="isLoading" :can-cancel="true" />
  <h2>優惠卷管理</h2>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
      建立新的優惠卷
    </button>
  </div>
  <table class="table mt-4 table-hover">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-muted">未起用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openCouponModal(false, item)">
              編輯
            </button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelCouponModal(item)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <Pagination
    v-show="pagination.total_pages > 0"
    :pages="pagination"
    @emit-pages="getCoupons"
  ></Pagination>
  <CouponModel ref="couponModal" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModel>
  <DelModal :item="tempCoupon" ref="delModal" @del-item="delCoupon" />
</template>

<script>
import CouponModel from '@/components/CouponModel.vue';
import Pagination from '@/components/Pagination.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  data() {
    return {
      coupons: {},
      pagination: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponModel,
    Pagination,
    DelModal,
  },
  inject: ['httpMessageState'],
  methods: {
    getCoupons(page = 1) {
      this.isLoading = true;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(url).then((response) => {
        // console.log(response.data);
        this.coupons = response.data.coupons;
        this.pagination = response.data.pagination;
        this.isLoading = false;
      });
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      const couponComponent = this.$refs.couponModal;
      couponComponent.showModal();
    },
    openDelCouponModal(item) {
      this.tempCoupon = { ...item };
      const couponComponent = this.$refs.delModal;
      couponComponent.showModal();
    },
    updateCoupon(tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then((response) => {
          //   console.log(response, tempCoupon);
          this.httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon }).then((response) => {
          //   console.log(response);
          this.httpMessageState(response, '新增優惠券');
          this.getCoupons();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        // console.log(response, this.tempCoupon);
        this.httpMessageState(response, '刪除優惠券');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupons();
      });
    },
  },
  created() {
    this.getCoupons();
  },
};
</script>
