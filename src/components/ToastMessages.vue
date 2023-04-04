<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0" style="z-index: 1050">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg" />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Toast from '@/components/Toast.vue';
import statusStore from '@/stores/statusStore';
import { storeToRefs } from 'pinia';

export default {
  components: { Toast },
  setup() {
    const status = statusStore();
    const { messages } = storeToRefs(status);

    const router = useRouter();

    router.beforeEach(() => {
      status.$reset();
    });

    return { messages };
  },
  // data() {
  //   return {
  //     messages: [],
  //   };
  // },
  // inject: ['emitter'],
  // mounted() {
  //   this.emitter.on('push-message', (message) => {
  //     const { style = 'success', title, content } = message;
  //     console.log(content);
  //     this.messages.push({ style, title, content });
  //   });
  // },
};
</script>
