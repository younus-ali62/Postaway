
import UserModel from "../../Users/UserModel/user-model.js";
const userArray = UserModel.getAllUserModel();
export default class Post {
  //defining our own constructor
  constructor(id, userId, caption, imageUrl) {
    this.id = id;
    this.userId = userId;
    this.caption = caption;
    this.imageUrl = imageUrl;
  }

  //method to add post into post array
  static addPostModel(userId, caption, filename) {
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User is not Exist!" };
    }

    //create  a new post
    const newPost = new Post(postArray.length + 1, userId, caption, filename);
    console.log(newPost);
    postArray.push(newPost);

    //checking posts array is present or not for that user
    // const userArray = UserModel.getAllUserModel();
    // console.log(userArray);
    const userResult = userArray.find((user) => userId == user._id);
    if (!userResult.posts) {
      userResult.posts = [];
      userResult.posts.push(newPost.id);
    } else {
      userResult.posts.push(newPost.id);
    }

    return { success: true, message: "Post added successfully" };
  }

  //method to get all post from post model
  static getAllPostModel() {
    return postArray;
  }

  //method to get a specific post
  // static specificPostModel(postId) {
  //   const result = postArray.find((post) => post._id == postId);
  //   if (result) {
  //     return { success: true, message: result };
  //   } else {
  //     return { success: false, message: "Post is not found!" };
  //   }
  // }
  //method to check whether post is exist or not
  static postExist(postId) {
    return postArray.find((post) => post.id == postId);
  }

  //method to like the post
  // static likePostModel(postId) {
  //   const post = postArray.find((post) => post._id == postId);
  //   if (post) {
  //     post._likes++;
  //     return { success: true, message: "Liked the post" };
  //   } else {
  //     return { success: false, message: "Post is not exist!" };
  //   }
  // }

  //method to get all the posts of a user
  static userPosts(userId){
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return ({ success: false, message: "User is not found!" });
    }
   
    const userPost=postArray.filter(post=> post.userId==userId);
    return ({success:true,message:userPost});

  }
  
  //method to update the post
  static updatePostModel(userId,postId, caption, imageUrl) {
  
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User is not found!" };
    }
    const postExist = postArray.find((post) => post.id == postId);
    if (!postExist) {
      return { success: false, message: "Post is not found!" };
    }

    //checking whether user created this post or not
    const checkingResult = postArray.findIndex(
      (post) => post.id == postId && userId == post.userId
    );
    if (checkingResult >= 0) {
    postArray[checkingResult].caption=caption;
    postArray[checkingResult].imageUrl=imageUrl;
    return ({success:true,message:postArray});

    } else {
      return {
        success: false,
        message:
          "Only user who created this post will be able to Update this post",
      };
    }
  }

  //method to comment on the post
  // static commentPostModel(postId, comment) {
  //   const post = postArray.find((post) => post._id == postId);
  //   if (post) {
  //     post._comments.push(comment);
  //     return { success: true, message: "Comment on post successfull" };
  //   } else {
  //     return { success: false, message: "Post is not exist!" };
  //   }
  // }

  //method to delete the post
  static deletePost(userId, postId) {
    const userExist = UserModel.userExist(userId);
    if (!userExist) {
      return { success: false, message: "User is not found!" };
    }
    const postExist = postArray.find((post) => post.id == postId);
    if (!postExist) {
      return { success: false, message: "Post is not found!" };
    }

    //checking whether user created this post or not
    const checkingResult = postArray.findIndex(
      (post) => post.id == postId && userId == post.userId
    );
    if (checkingResult >= 0) {
      postArray.splice(checkingResult, 1);

      //we have to remove this post from user array who created this post
      const userResult=userArray.find(user=>user._id==userId);
      const existingIndex=userResult.posts.findIndex(post=> post==postId);
      userResult.posts.splice(existingIndex,1);
      return { success: true, message: "Post is successfully deleted" };
    } else {
      return {
        success: false,
        message:
          "Only user who created this post will be able to delete this post",
      };
    }
  }
}

//creating an array to store all the posts
let postArray = [];
