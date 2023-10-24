<template>
  <div class="min-h-screen bg-blue-50 flex justify-center items-center">
    <div
      class="bg-white h-screen w-full md:max-w-2xl md:h-auto p-4 md:p-8 md:rounded-lg md:shadow-sm"
    >
      <div class="flex justify-between py-4 md:py-6">
        <p class="text-gray-900 font-semibold text-xl">
          Notifications
          <span
            class="text-white bg-[#083377] px-2 mx-1 py-1 text-base rounded-md"
            >3</span
          >
        </p>
        <p class="text-gray-500 text-sm hover:text-[#083377] hover:cursor-pointer">
          Mark all as read
        </p>
      </div>
      <div v-for="(item, index) in notifications" :key="index">
        <NotificationCard
          :name="item.name"
          :imgURL="item.imgURL"
          :action="item.action"
          :post="item.post"
          :message="item.message"
          :photoURL="item.photoURL"
          :group="item.group"
          :isRead="item.isRead"
          :createdAt="item.createdAt"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const notifications = [
  {
    name: "Mark Webber",
    imgURL: "/img/user/mark.webp",
    action: "reacted to your recent post",
    post: "My first tournament today!",
    message: "",
    photoURL: "",
    group: "",
    isRead: false,
    createdAt: "1m ago",
  },
  {
    name: "Angela Gray",
    imgURL: "/img/user/angela.webp",
    action: "followed you",
    post: "",
    message: "",
    photoURL: "",
    group: "",
    isRead: false,
    createdAt: "5m ago",
  },
  {
    name: "Jacob Thompson",
    imgURL: "/img/user/jacob.webp",
    action: "has joined your group",
    post: "",
    message: "",
    photoURL: "",
    group: "Chess Club",
    isRead: false,
    createdAt: "1 day ago",
  },
  {
    name: "Rizky Hasanuddin",
    imgURL: "/img/user/rizky.webp",
    action: "sent you a private message",
    post: "",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    photoURL: "",
    group: "",
    isRead: true,
    createdAt: "5 day ago",
  },
  {
    name: "Kimberly Smith",
    imgURL: "/img/user/kimberly.webp",
    action: "commented on your picture",
    post: "",
    message: "",
    photoURL: "/img/user/chess.webp",
    group: "",
    isRead: true,
    createdAt: "1 week ago",
  },
  {
    name: "Nathan Peterson",
    imgURL: "/img/user/nathan.webp",
    action: "reacted to your recent post",
    post: "5 end-game strategies to increase your win rate",
    message: "",
    photoURL: "",
    group: "",
    isRead: true,
    createdAt: "2 weeks ago",
  },
  {
    name: "Anna Kim",
    imgURL: "/img/user/anna.webp",
    action: "left the group",
    post: "",
    message: "",
    photoURL: "",
    group: "Chess Club",
    isRead: true,
    createdAt: "2 weeks ago",
  },
];
</script>

<style scoped></style>
