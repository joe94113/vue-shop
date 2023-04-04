<template>
  <ShopBlade>
    <div class="about">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58913.69113296482!2d120.27104849233065!3d22.649847496498833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04fb21935ccd%3A0xf44e336c93ecbd!2z5oSb5rKz!5e0!3m2!1szh-TW!2stw!4v1626020589805!5m2!1szh-TW!2stw"
        width="100%"
        height="240"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      <section class="py-5">
        <div class="container">
          <div class="text-center mb-5">
            <h2>聯絡我們</h2>
            <p class="text-muted h5">我們將盡快由專人與您聯繫</p>
          </div>
          <div class="row">
            <div class="col-lg-6 m-auto">
              <form class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="name" class="form-label">姓名</label>
                    <input type="text" class="form-control" id="name" />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="phone" class="form-label">電話</label>
                    <input type="text" class="form-control" id="phone" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="Email" class="form-label">Email</label>
                    <input type="text" class="form-control" id="Email" />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="" class="form-label">聯繫內容</label>
                    <textarea class="form-control" id="" rows="3"></textarea>
                  </div>
                </div>
                <div class="col-12">
                  <div class="text-center">
                    <button type="submit" class="btn btn-warning btn-lg">送出表單</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  </ShopBlade>
</template>
<script setup>
import ShopBlade from '@/layouts/ShopBlade.vue';
</script>
