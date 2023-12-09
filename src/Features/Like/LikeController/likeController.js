
import LikeModel from "../LikeModel/likeModel.js";


export default class likeController{
    

    getAllLikes(req,res){
        const postId=req.params.postId;
        const userId=req.userId;
        const result=LikeModel.getAllLikes(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else {
            return res.status(400).send(result);
        }
    }
    likePostRequest(req,res){
        const postId=req.params.postId;
        const userId=req.userId;
        const result=LikeModel.likePostModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            return res.status(400).send(result);
        }
    }

    removeLikePostRequest(req,res){
         const postId=req.params.postId;
         const userId=req.userId;
         const result=LikeModel.removeLikePostModel(userId,postId);
         if(result.success){
            return res.status(200).send(result);
         }else{
            return res.status(400).send(result);
         }
    }
}