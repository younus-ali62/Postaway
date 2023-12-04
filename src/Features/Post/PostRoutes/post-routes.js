import express from "express";
import postController from "../PostController/post-controller.js";
const postcontroller=new postController();
const postRouter=express.Router();

postRouter.get("/",postcontroller.getAllPost);
postRouter.post("/:userId",postcontroller.addPost);
postRouter.get("/delete-post",postcontroller.deletePost);
export default postRouter;
