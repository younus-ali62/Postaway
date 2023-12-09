
import UserModel from "../UserModel/user-model.js";

export default class UserController{
   
    //method to add user to user model
    registerUser(req,res){
        const result=UserModel.addUser(req.body);
        if(result.success){
            return res.status(201).send(result);
        }else{
            return res.status(400).send(result);
        }
    }

    //method to handle login request from user
    loginUser(req,res){
        const result=UserModel.loginUserModel(req.body);
        if(!result.success){
            return res.status(400).send(result);
        }else {
            return res.status(200).send(result);
        }
    }


    //method to get all the users from user model
    getAllUser(req,res){
        const result=UserModel.getAllUserModel();
        res.status(200).send(result);
    }
}