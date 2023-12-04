import express from "express";
import postController from "../PostController/post-controller.js";
const postcontroller=new postController();
const postRouter=express.Router();

postRouter.get("/",postcontroller.getAllPost);
postRouter.post("/:userId",postcontroller.addPost);
postRouter.get("/delete-post",postcontroller.deletePost);
postRouter.get("/like-post/:postId",postcontroller.likePost);
postRouter.get("/comment-post",postcontroller.commentPost);
export default postRouter;
