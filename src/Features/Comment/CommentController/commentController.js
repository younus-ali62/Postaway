import CommentModel from "../CommentModel/commentModel.js";
import ApplicationError from "../../../Error-Handler/error_handler.js";
export default class CommentController{

    getComments(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.getCommentsModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            throw new ApplicationError(result.message,400);
        }
    }

    addComment(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const comment=req.body.comment;
        const result=CommentModel.addCommentModel(userId,postId,comment);
        if(result.success){
            return res.status(201).send(result);
        }else{
            throw new ApplicationError(result.message,400);
        }
    }

    specificComments(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.specificCommentsModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            throw new ApplicationError(result.message,400);
        }
    }
    updateComment(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const newComment=req.body.comment;
        const result=CommentModel.updateCommentModel(userId,postId,newComment);
        if(result.success){
            return res.status(200).send(result);
        }else {
            throw new ApplicationError(result.message,400);
        }
    }

    deleteComment(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.deleteCommentModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else {
            throw new ApplicationError(result.message,400);
        }
    }
}