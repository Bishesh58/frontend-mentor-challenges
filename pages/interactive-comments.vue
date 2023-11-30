<template>
  <main
    class="min-h-screen max-w-7xl overflow-auto mx-auto p-4 sm:p-6 md:p-8 bg-gray-950 text-white font-Ubuntu"
  >
    <div class="pt-2 sm:pt-4 md:pt-8">
      <CommentItem
        v-for="comment in store.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <CommentForm @add-comment="addComment" :parentId="343359" />
  </main>
</template>

<script setup>
import { useCommentStore } from "@/stores/comment";

const store = useCommentStore();

const addComment = (parentId, commentObj) => {
  store.addComment(parentId, commentObj);
};

const editComment = () => {};

const deleteComment = () => {};
</script>

<style lang="scss" scoped></style>
