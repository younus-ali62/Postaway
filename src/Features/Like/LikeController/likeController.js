
import LikeModel from "../LikeModel/likeModel.js";
import ApplicationError from "../../../Error-Handler/error_handler.js";

export default class likeController{
    

    getAllLikes(req,res){
        const postId=req.params.postId;
        const userId=req.userId;
        const result=LikeModel.getAllLikes(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else {
            throw new ApplicationError(result.message,400);
        }
    }
    likePostRequest(req,res){
        const postId=req.params.postId;
        const userId=req.userId;
        const result=LikeModel.likePostModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            throw new ApplicationError(result.message,400);
        }
    }

    removeLikePostRequest(req,res){
         const postId=req.params.postId;
         const userId=req.userId;
         const result=LikeModel.removeLikePostModel(userId,postId);
         if(result.success){
            return res.status(200).send(result);
         }else{
            throw new ApplicationError(result.message,400);
         }
    }
}