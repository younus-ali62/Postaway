import Post from "../PostModel/postmodel.js";
import ApplicationError from "../../../Error-Handler/error_handler.js";
export default class postController {
  addPost(req, res) {
    const userId = req.userId;
    const filename = req.file.filename;
    const caption = req.body.caption;
    const result = Post.addPostModel(userId, caption, filename);
    if (result.success) {
      return res.status(202).send(result);
    } else {
      throw new ApplicationError(result.message,400);
    }
  }

  getAllPost(req, res) {
    const result = Post.getAllPostModel();
    res.status(200).send(result);
  }


  //method to get all posts of a user from post model
  userPosts(req,res){
    const userId=req.userId;
    const result=Post.userPosts(userId);
    if(result.success){
      return res.status(200).send(result);
    }else {
      throw new ApplicationError(result.message,400);
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
      throw new ApplicationError(result.message,400);
    }
  }


  deletePost(req, res) {
    const userId = req.userId;
    const postId = req.params.postId;
    const result = Post.deletePost(userId, postId);
    if (!result.success) {
      throw new ApplicationError(result.message,400);
    } else {
      return res.status(200).send(result);
    }
  }
}
