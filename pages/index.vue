<template>
  <div class="h-screen flex flex-col justify-between">
    <div class="p-4 flex flex-col justify-start items-center flex-1">
      <p class="max-md:text-2xl text-4xl font-semibold font-Raleway">
        <span class="text-[#3E54A3]">Frontend Mentor</span> Challenge Projects
      </p>
      <div class="flex justify-center flex-wrap p-8 gap-6">
        <div v-for="(item, i) in data" :key="i">
          <LinkCard :data="item" />
        </div>
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

<script setup>
const data = [
  {
    title: "Testimonials grid section",
    imgURL: "/img/landing_snap_preview.png",
    link: "/landing-page/snap",
  },
  {
    title: "Testimonials grid section",
    imgURL: "/img/testimonials_preview.png",
    link: "/testimonials",
  },
  {
    title: "Time tracking dashboard",
    imgURL: "/img/time_tracking_preview.png",
    link: "/time-tracking-dashboard",
  },
  {
    title: "Notifications page",
    imgURL: "/img/notification_preview.png",
    link: "/notification",
  },
  {
    title: "Four card feature section",
    imgURL: "/img/feature_card_preview.png",
    link: "/features-card",
  },
  {
    title: "Newsletter sign-up form",
    imgURL: "/img/news_letter_preview.png",
    link: "/news-letter",
  },
  {
    title: "Interactive rating component",
    imgURL: "/img/rating_preview.png",
    link: "/rating",
  },
  {
    title: "NTF Card Component",
    imgURL: "/img/ntf_card_preview.png",
    link: "/ntf-card",
  },
  {
    title: "Result Summary Component",
    imgURL: "/img/result_summary_preview.png",
    link: "/result-summary",
  },
  {
    title: "Order Summary Component",
    imgURL: "/img/order_preview.png",
    link: "/order-card",
  },
];
</script>

<style scoped>
.attribution {
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}
</style>
