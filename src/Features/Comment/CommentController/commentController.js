import CommentModel from "../CommentModel/commentModel.js";

export default class CommentController{

    getComments(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.getCommentsModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            return res.status(400).send(result);
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
            return res.status(400).send(result);
        }
    }

    specificComments(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.specificCommentsModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else{
            return res.status(400).send(result);
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
            return res.status(400).send(result);
        }
    }

    deleteComment(req,res){
        const userId=req.userId;
        const postId=req.params.postId;
        const result=CommentModel.deleteCommentModel(userId,postId);
        if(result.success){
            return res.status(200).send(result);
        }else {
            return res.status(400).send(result);
        }
    }
}