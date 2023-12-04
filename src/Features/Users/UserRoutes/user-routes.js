import express from "express";
import UserController from "../UserController/user-contrller.js";
import User from "../UserModel/user-model.js";

const usercontroller=new UserController();

const userRouter=express.Router();

//api call to handle to login user
userRouter.post("/login",usercontroller.loginUser);

//api call to handle to add user to user model
userRouter.post("/register",usercontroller.registerUser);

//api call to handle to get all the users from user model
userRouter.get("/",usercontroller.getAllUser);

//exporting user router
export default userRouter;