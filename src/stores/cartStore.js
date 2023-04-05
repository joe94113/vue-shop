import axios from 'axios';
import { defineStore } from 'pinia';
import statusStore from './statusStore';

// const status = statusStore()

export default defineStore('cartStore', {
    state: () => ({
        cart: [],
    }),
    actions: {
        addCart(id, qty = 1) {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            const cart = {
                product_id: id,
                qty,
            };
            status.cartLoadingItem = id;
            axios.post(url, { data: cart }).then((response) => {
                // console.log('addcart:', response);
                status.cartLoadingItem = '';
                status.pushMessage({ title: '加入購物車成功', style: 'success' });
            });
        },
        removeCartItem(id) {
            const status = statusStore();
            status.cartLoadingItem = id;
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
            status.isLoading = true;
            axios.delete(url).then((response) => {
                status.pushMessage({ title: '移除購物車品項', style: 'success' });
                status.cartLoadingItem = '';
                this.getCart();
                status.isLoading = false;
            });
        },
        getCart() {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
            status.isLoading = true;
            axios.get(url).then((response) => {
                console.log(response);
                this.cart = response.data.data;
                status.isLoading = false;
            });
        },
        updateCart(item) {
            const status = statusStore();
            const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
            status.isLoading = true;
            status.cartLoadingItem = item.id;
            const cart = {
                product_id: item.product_id,
                qty: item.qty,
            };
            axios
                .put(url, { data: cart })
                .then((response) => {
                    //   console.log(response);
                    this.getCart();
                    status.isLoading = false;
                    status.cartLoadingItem = '';
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    }
});