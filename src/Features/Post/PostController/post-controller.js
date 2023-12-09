import Post from "../PostModel/postmodel.js";
import UserModel from "../../Users/UserModel/user-model.js";

export default class postController {
  addPost(req, res) {
    const userId = req.userId;
    const filename = req.file.filename;
    const caption = req.body.caption;
    const result = Post.addPostModel(userId, caption, filename);
    if (result.success) {
      return res.status(202).send(result);
    } else {
      return res.status(404).send(result);
    }
  }

  getAllPost(req, res) {
    const result = Post.getAllPostModel();
    res.status(200).send(result);
  }

  // likePost(req, res) {
  //   const postId = req.params.postId;
  //   const result = Post.likePostModel(postId);
  //   if (result.success) {
  //     return res.status(200).send(result);
  //   } else {
  //     return res.status(404).send(result);
  //   }
  // }

  // specificPost(req, res) {
  //   const postId = req.params.postId;
  //   const result = Post.specificPostModel(postId);
  //   if (result.success) {
  //     return res.status(200).send(result);
  //   } else {
  //     return res.status(404).send(result);
  //   }
  // }

  //method to get all posts of a user from post model
  userPosts(req,res){
    const userId=req.userId;
    const result=Post.userPosts(userId);
    if(result.success){
      return res.status(200).send(result);
    }else {
      return res.status(400).send(result);
    }
  }


  //method to update the post of a user
  updateUserPost(req,res){
    const postId=req.params.postId;
    const caption=req.body.caption;
    const imageUrl=req.file.filename;
    const result=Post.updatePostModel(req.userId,postId,caption,imageUrl);
    if(result.success){
      return res.status(200).send(result);
    }else{
      return res.status(400).send(result);
    }
  }
  // commentPost(req, res) {
  //   const postId = req.query.postId;
  //   const userComment = req.query.comment;
  //   const result = Post.commentPostModel(postId, userComment);
  //   if (result.success) {
  //     return res.status(200).send(result);
  //   } else {
  //     return res.status(404).send(result);
  //   }
  // }

  deletePost(req, res) {
    const userId = req.userId;
    const postId = req.params.postId;
    const result = Post.deletePost(userId, postId);
    if (!result.success) {
      return res.status(404).send(result);
    } else {
      return res.status(200).send(result);
    }
  }
}
