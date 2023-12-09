import UserModel from "../../Users/UserModel/user-model.js";
import Post from "../../Post/PostModel/postmodel.js";
export default class CommentModel {
  constructor(id, userId, postId, comment) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
    this.comment = comment;
  }

  static getCommentsModel(userId, postId) {

    //checking user exist or not
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }
    //checking post exist or not
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    const result = commentArray.filter((comment) => comment.postId == postId);
    if (result) {
      return { success: true, message: result };
    } else {
      return { success: false, message: "Something went wrong!" };
    }
  }
  static addCommentModel(userId,postId, comment) {
    //checking user exist or not
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }

    //checking post exist or not
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    //checking user already posted a comment or not
    const checkingIndex = commentArray.findIndex(
      (comment) => comment.userId == userId && comment.postId == postId
    );
    if (checkingIndex >= 0) {
      return {
        success: false,
        message:
          "You already created a comment. You can update your comment on clicking the update button",
      };
    } else {
      const newComment = new CommentModel(
        commentArray.length + 1,
        userId,
        postId,
        comment
      );
      commentArray.push(newComment);
      console.log(commentArray);
      console.log(newComment);
      return { success: true, message: "Commented successfully created" };
    }
  }

  static specificCommentsModel(userId, postId) {
    //checking user exist or not
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }

    //checking post exist or not
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    const result = commentArray.filter(
      (comment) => comment.postId == postId && comment.userId == userId
    );
    if (result) {
      return { success: true, message: result };
    } else {
      return { success: false, message: "Something went wrong!" };
    }
  }

  static updateCommentModel(userId, postId, comment) {
    //checking user exist or not
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }

    //checking post exist or not
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    //checking user created a comment or not
    const checkingIndex = commentArray.findIndex(
      (comment) => comment.userId == userId && comment.postId == postId
    );

    //update the comment
    if (checkingIndex >= 0) {
      commentArray[checkingIndex].comment = comment;
      return { success: true, message: "Updated comment successfully" };
    } else {
      //user is not created any comment
      return { success: false, message: "Comment not found!" };
    }
  }

  static deleteCommentModel(userId, postId) {
    //checking user exist or not
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }

    //checking post exist or not
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    //checking user created a comment or not
    const checkingIndex = commentArray.findIndex(
      (comment) => comment.userId == userId && comment.postId == postId
    );
    if (checkingIndex >= 0) {
      commentArray.splice(checkingIndex, 1);
      return { success: true, message: "Comment deleted successfully" };
    } else {
      return {
        success: false,
        message:
          "Only who created this comment will able to delete this comment.",
      };
    }
  }
}

const commentArray = [];
