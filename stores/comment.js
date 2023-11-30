export const useCommentStore = defineStore("comments", () => {
  const comments = ref([
    {
      id: 343359,
      author: "Angela Watt",
      authorId: 1,
      profileImg: "/img/user/angela.webp",
      message:
        "I've been using Nuxt 3 for my recent projects, and the development experience is fantastic. The new features make it even more enjoyable to work with. Can't wait to see how the community adopts it. 🚀😊",
      createdAt: "1 month ago",
      likes: 4,
      dislikes: 9,

      replies: [
        {
          id: 347166,
          author: "Mark Good",
          authorId: 2,
          profileImg: "/img/user/mark.webp",
          message:
            "That's awesome, Angela! I've heard great things about Nuxt 3. The improvements in performance and the composition API seem really promising. 🔥",
          createdAt: "3 weeks ago",
          likes: 3,
          dislikes: 2,

          replies: [
            {
              id: 373234,
              author: "Kim Kart",
              authorId: 3,
              profileImg: "/img/user/kimberly.webp",
              message:
                "Absolutely, Mark! I recently started exploring Nuxt 3 as well. The way it handles server rendering and the composition API are game-changers. 🚀",
              createdAt: "3 weeks ago",
              likes: 8,
              dislikes: 5,
              replies: [
                {
                  id: 379581,
                  author: "Mark Good",
                  authorId: 2,
                  profileImg: "/img/user/mark.webp",
                  message:
                    "Glad to hear that, Kim! The composition API indeed makes Vue development more organized. Have you tried any specific features that stood out to you? 😊",
                  createdAt: "3 weeks ago",
                  likes: 86,
                  dislikes: 57,
                  replies: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  const findCommentById = (commentsArray, id) => {
    for (const comment of commentsArray) {
      if (comment.id === id) {
        return comment;
      }
      if (comment.replies) {
        const nestedComment = findCommentById(comment.replies, id);
        if (nestedComment) {
          return nestedComment;
        }
      }
    }
    return null;
  };

  const addComment = (parentId, commentObj) => {
    if (parentId === null) {
      // No parentId provided, add to the main comments array
      comments.value.push(commentObj);
    } else {
      // parentId provided, find the parent comment and add as a reply
      const parentComment = findCommentById(comments.value, parentId);
      if (parentComment) {
        if (!parentComment.replies) {
          parentComment.replies = [];
        }
        parentComment.replies.push(commentObj);
      } else {
        console.error("Parent comment not found");
      }
    }
  };

  const updateComment = (commentId, updatedMessage) => {
    const commentToUpdate = findCommentById(comments.value, commentId);
    if (commentToUpdate) {
      commentToUpdate.message = updatedMessage;
    }
  };

  const deleteComment = (commentId) => {
    const filterComments = (commentsArray, id) => {
      return commentsArray.filter((comment) => {
        if (comment.id === id) {
          return false;
        }

        if (comment.replies) {
          // Recursively filter nested replies
          comment.replies = filterComments(comment.replies, id);
        }

        return true;
      });
    };
    // Update the comments.value array with the filtered result
    comments.value = filterComments(comments.value, commentId);
  };

  const updateLikes = (commentId, action) => {
    const findComment = (commentsArray, id) => {
      for (const comment of commentsArray) {
        if (comment.id === id) {
          return comment;
        }
        const nestedComment = findComment(comment.replies, id);
        if (nestedComment) {
          return nestedComment;
        }
      }
      return null;
    };

    const commentToUpdate = findComment(comments.value, commentId);

    if (commentToUpdate) {
      if (action === "increment") {
        commentToUpdate.likes++;
      } else if (action === "decrement" && commentToUpdate.likes > 0) {
        commentToUpdate.likes--;
      }
    }
  };

  const updateDislikes = (commentId, action) => {
    const findComment = (commentsArray, id) => {
      for (const comment of commentsArray) {
        if (comment.id === id) {
          return comment;
        }
        const nestedComment = findComment(comment.replies, id);
        if (nestedComment) {
          return nestedComment;
        }
      }
      return null;
    };

    const commentToUpdate = findComment(comments.value, commentId);

    if (commentToUpdate) {
      if (action === "increment") {
        commentToUpdate.dislikes++;
      } else if (action === "decrement" && commentToUpdate.likes > 0) {
        commentToUpdate.dislikes--;
      }
    }
  };

  return {
    comments,
    addComment,
    updateComment,
    deleteComment,
    updateLikes,
    updateDislikes,
  };
});
