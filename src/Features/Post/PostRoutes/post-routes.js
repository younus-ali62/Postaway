import express from "express";
import postController from "../PostController/post-controller.js";
import likeRemovePostRouter from "../../Like/LikeRouter/likePostRouter.js";
import commentPostRouter from "../../Comment/commentRouter/commentRoutes.js";
import { fileUpload } from "../../../Middleware/FIle Upload Middleware/fileupload.js";
const postcontroller=new postController();
const postRouter=express.Router();

postRouter.get("/",postcontroller.getAllPost);//api call to view all the posts
postRouter.post("/",fileUpload.single("imageUrl"), postcontroller.addPost);//api call to create a post

//api call to handle all the posts of a user
postRouter.get("/user-posts",postcontroller.userPosts)
postRouter.get("/delete-post/:postId",postcontroller.deletePost);

// postRouter.get("/comment-post",postcontroller.commentPost);
postRouter.post("/update-post/:postId",fileUpload.single("imageUrl"),postcontroller.updateUserPost);


//handle routes for like and remove the posts
postRouter.use("/like-remove",likeRemovePostRouter);

//handles routes to comment on a post
postRouter.use("/comment-post",commentPostRouter);
export default postRouter;
