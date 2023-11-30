<template>
  <div
    class="flex flex-col md:flex-row items-start gap-2 md:gap-4 px-2 mt-2 md:mt-6 text-xs md:text-sm lg:text-base"
  >
    <div class="self-start h-6 w-6 md:h-10 md:w-10 z-10">
      <img src="/img/user/rizky.webp" alt="" />
    </div>
    <textarea
      v-model="commentInput"
      class="h-20 w-full max-w-[500px] border border-slate-200 rounded-md outline-none p-2 bg-inherit text-gray-300 overflow-y-auto"
      placeholder="Write.."
    />
    <button
      @click="handleSumbmit"
      class="bg-blue-500 text-white px-2 py-1 uppercase rounded-md text-sm"
    >
      send
    </button>
  </div>
</template>

<script setup>
import moment from "moment";
const commentInput = ref("");

const props = defineProps(["parentId"]);
const emit = defineEmits(["addComment", "toggleComments"]);

const handleSumbmit = () => {
  if (!commentInput.value.trim()) {
    return;
  }
  const commentObj = {
    id: (Date.now() + Math.floor(Math.random() * 1000)) % 1000000,
    author: "John Doe",
    authorId: 5,
    profileImg: "/img/user/rizky.webp",
    message: commentInput.value,
    createdAt: moment(new Date()).fromNow(),
    likes: 0,
    dislikes: 0,
    replies: [],
  };

  emit("addComment", props.parentId, commentObj);
  emit("toggleComments");
  // Reset
  commentInput.value = "";
};
</script>

<style scoped></style>
