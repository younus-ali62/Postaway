import UserModel from "../../Users/UserModel/user-model.js";
import Post from "../../Post/PostModel/postmodel.js";
export default class LikeModel {
  constructor(id, userId, postId) {
    this.id = id;
    this.userId = userId;
    this.postId = postId;
  }

  //method to get all the likes on a user post
  static getAllLikes(userId,postId) {
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }
    const result = likeArray.filter((post) => post.postId == postId);
    if (result) {
      return { success: true, message: result };
    } else {
      return { success: false, message: "No post found!" };
    }
  }

  static likePostModel(userId,postId) {
    
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }
    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }

    const newLikePost = new LikeModel(likeArray.length + 1, userId, postId);
    likeArray.push(newLikePost);
    return { success: true, message: likeArray };
  }

  static removeLikePostModel(userId,postId) {

    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User not found!" };
    }

    const postExist = Post.postExist(postId);
    if (!postExist) {
      return { success: false, message: "Post not found!" };
    }
    const removeLikeIndex = likeArray.findIndex(
      (arr) => arr.userId == userId && postId == arr.postId
    );

    if (removeLikeIndex >= 0) {
      likeArray.splice(removeLikeIndex, 1);
      return { success: true, message: likeArray };
    } else {
      return { success: false, message: "Only who liked this post will be able to remove this like" };
    }
  }
}

const likeArray = [];
