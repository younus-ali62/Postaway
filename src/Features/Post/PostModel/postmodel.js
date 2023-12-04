import UserModel from "../../Users/UserModel/user-model.js";
const userArray=UserModel.getAllUserModel();
export default class Post {

    //defining our own constructor
  constructor(_id, _userId, _likes, _comments) {
    (this._id = _id),
      (this._userId = _userId),
      (this._likes = _likes),
      (this._comments = []);
  }

  //method to add post into post array
  static addPost(userId) {
    const userExist=UserModel.userExist(userId);
    if(!userExist){
        return ({success:false,message:"User is not Exist!"})
    }

    //create  a new post
    const newPost = new Post(postArray.length + 1, userId, 0, []);
    postArray.push(newPost);
   
    //checking posts array is present or not for that user
    const userArray=UserModel.getAllUserModel();
    // console.log(userArray);
    const userResult=userArray.find(user=>userId==user._id);
    if(!userResult.posts){
        userResult.posts=[];
        userResult.posts.push(newPost._id);
    }
    else{
        userResult.posts.push(newPost._id);
    }
  
    return ({success:true, message:"Post added successfully"});
  }


  //method to get all post from post model
  static getAllPostModel() {
    return postArray;
  }

  //method to check whether post is exist or not
  static postExist(postId) {
    return postArray.find((post) => post._id == postId);
  }


  //method to delete the post
  static deletePost(userId,postId){
    const userExist=UserModel.userExist(userId);
    if(!userExist){
        return ({success:false,message:"User is not exist!"})
    }
    const postExist=postArray.find(post=> post._id==postId);
    if(!postExist){
        return ({success:false,message:"Post is not exist!"});
    }

    //checking whether user created this post or not
    const checkUserPostIndex=userExist.posts.findIndex(post=> post==postId);
    if(checkUserPostIndex>=0){
        const postExistingIndex=postArray.findIndex(post=> post._id==postId);
        userExist.posts.splice(checkUserPostIndex,1);
        postArray.splice(postExistingIndex,1);
        return ({success:true,message:"Post successfully deleted"})
    }
    else {
        return ({success:false,message:"Only who created this post will be able to delete this post"});
    }
  }
}

//creating an array to store all the posts
let postArray = [];
