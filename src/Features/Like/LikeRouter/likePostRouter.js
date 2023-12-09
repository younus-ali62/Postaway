
import express from "express";
import likeController from "../LikeController/likeController.js";
const likeRemovePostRouter=express.Router();
const likecontroller=new likeController();

//api call to get all the likes on a post
likeRemovePostRouter.get("/post-like/:postId",likecontroller.getAllLikes);

//api call to like the post
likeRemovePostRouter.get("/like/:postId",likecontroller.likePostRequest);

//api call to remove the like from the post
likeRemovePostRouter.get("/remove/:postId",likecontroller.removeLikePostRequest);
export default likeRemovePostRouter;