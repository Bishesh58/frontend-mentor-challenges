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
    title: "Job listings with filtering",
    imgURL: "/img/job-listing_preview.png",
    link: "/job-listing",
  },
  {
    title: "E-commerce product page",
    imgURL: "/img/ecommerce-product_preview.png",
    link: "/ecommerce-product",
  },
  {
    title: "Interactive comments section",
    imgURL: "/img/interactive-comment_preview.png",
    link: "/interactive-comments",
  },
  {
    title: "Space tourism multi-page website",
    imgURL: "/img/space-tourism_preview.png",
    link: "/space-tourism/home",
  },
  {
    title: "Interactive card",
    imgURL: "/img/interactive_card_preview.png",
    link: "/interactive-card",
  },
  {
    title: "Easybank landing page",
    imgURL: "/easybank/easybank_preview.png",
    link: "/landing-page/easybank",
  },
  {
    title: "Fylo theme landing page",
    imgURL: "/fylo/fylo_preview.png",
    link: "/landing-page/fylo",
  },
  {
    title: "Insure landing page",
    imgURL: "/img/insure_preview.png",
    link: "/landing-page/insure",
  },
  {
    title: "Loopstudios landing page",
    imgURL: "/img/loopstudios_preview.png",
    link: "/landing-page/loopstudios",
  },
  {
    title: "Crowdfunding product page",
    imgURL: "/img/crowdfunding_preview.png",
    link: "/crowdfunding",
  },
  {
    title: "Blogr landing page",
    imgURL: "/img/landing_blogr_preview.png",
    link: "/landing-page/blogr",
  },
  {
    title: "Social Media Dashboard",
    imgURL: "/img/social_media_dashboard_preview.png",
    link: "/social-media-dashboard",
  },
  {
    title: "Intro section with dropdown navigation",
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
