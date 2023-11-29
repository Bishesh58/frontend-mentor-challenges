<template>
  <main
    class="min-h-screen max-w-7xl mx-auto p-4 sm:p-6 md:p-8 bg-gray-950 text-white"
  >
    <div class="py-8">
      <CommentItem
        v-for="comment in store.comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
    <CommentForm @addComment="addComment" />
  </main>
</template>

<script setup>
import { useCommentStore } from "@/stores/comment";

const store = useCommentStore();

const addComment = (commentId, commentObj) => {
  store.addComment(commentId, commentObj);
};

const editComment = () => {};

const deleteComment = () => {};
</script>

<style lang="scss" scoped></style>
