import express from "express";
import CommentController from "../CommentController/commentController.js";
const commentPostRouter=express.Router();
const commentcontroller=new CommentController();

//api call to handle to get all the comments
commentPostRouter.get("/:postId",commentcontroller.getComments);


//api call to handle to get a comments on a specific post
commentPostRouter.get("/specific/:postId",commentcontroller.specificComments)
//api call to post a comment
commentPostRouter.post("/comment/:postId",commentcontroller.addComment);

//api call to update a comment
commentPostRouter.post("/update/:postId",commentcontroller.updateComment);

//api call to delete the comment
commentPostRouter.get("/delete/:postId",commentcontroller.deleteComment);

export default commentPostRouter;
