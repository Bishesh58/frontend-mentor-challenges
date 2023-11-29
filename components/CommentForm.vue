<template>
  <div class="flex items-start gap-4">
    <div>
      <img src="/img/user/rizky.webp" alt="" class="h-10 w-10" />
    </div>
    <textarea
      v-model="commentInput"
      class="h-20 w-96 border-2 border-slate-200 rounded-md outline-none p-2 bg-inherit text-gray-600 overflow-y-auto"
      placeholder="Write.."
    />
    <button
      @click="handleSumbmit"
      class="bg-blue-500 text-white px-4 py-2 uppercase rounded-md"
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
    id: 101112,
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
