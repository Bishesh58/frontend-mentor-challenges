<template>
  <div class="h-screen flex flex-col justify-between">
    <div class="p-4 flex flex-col justify-start items-center flex-1">
      <p class="max-md:text-2xl text-4xl font-semibold font-Raleway">
        <span class="text-[#3E54A3]">Frontend Mentor</span> Challenge Projects
      </p>
      <div class="flex justify-center flex-wrap p-8 gap-6">
        <NuxtLink to="/qrcode"
          ><div class="w-[300px] h-[300px] border rounded-md flex flex-col">
            <img
              src="../public/img/qr_preview.png"
              alt="qr_preview"
              class="flex-1 w-full h-[60%] object-cover object-center"
            />
            <div class="p-4 text-center">
              <p>QR Code Component</p>
            </div>
          </div>
        </NuxtLink>
        <NuxtLink to="/order-card" class="w-fit"
          ><div class="w-[300px] h-[300px] border rounded-md flex flex-col">
            <img
              src="../public/img/order_preview.png"
              alt="qr_preview"
              class="flex-1 w-full h-[60%] object-cover object-center"
            />
            <div class="p-4 text-center">
              <p>Order Summary Component</p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
    <div class="attribution">
      Challenge by
      <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
        >Frontend Mentor</a
      >. Coded by <a href="#">Bishesh Sunam</a>.
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
