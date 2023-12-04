import Post from "../PostModel/postmodel.js";
import UserModel from "../../Users/UserModel/user-model.js";

export default class postController{

      addPost(req,res){
        const userId=req.params.userId;
        const result = Post.addPost(userId);
        if(result.success){
          return  res.status(202).send(result);
        }
        else {
          return  res.status(404).send(result);
        }
      }

      getAllPost(req,res){
        const result = Post.getAllPostModel();
        res.status(200).send(result);
      }

      likePost(req,res){
        const postId=req.params.postId;
        const result=Post.likePostModel(postId);
        if(result.success){
            return res.status(200).send(result);
        }else {
            return res.status(404).send(result);
        }
      };

      commentPost(req,res){
        const postId=req.query.postId;
        const userComment=req.query.comment;
        const result=Post.commentPostModel(postId,userComment);
        if(result.success){
            return res.status(200).send(result);
        }else {
            return res.status(404).send(result);
        }

      }
      deletePost(req,res){
        const userId=req.query.userId;
        const postId=req.query.postId;

        const result=Post.deletePost(userId,postId);
        if(!result.success){
            return res.status(404).send(result);
        }else{
            return res.status(200).send(result);
        }

      }
}