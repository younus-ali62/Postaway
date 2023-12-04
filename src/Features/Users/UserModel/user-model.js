
export default class UserModel{
    constructor(_id,_name,_email,_password){
        this._id=_id;
        this._name=_name;
        this._email=_email;
        this._password=_password;
    }


    //method to add user to user array
    static addUser({name,email,password}){
    
        const checkingUser=this.userExistEmail(email);
        console.log(checkingUser);
        if(checkingUser){
            return ({success:false,message:"User already exist!"});
        }else {
            const newUser=new UserModel(
                userArray.length+1,
                name,
                email,
                password,
                []
            );
            userArray.push(newUser);
            return ({success:true,message:"User added successfully"});
        }
     
    }

    //method to login user
    static loginUserModel({email,password}){
        const checkingValidUser=userArray.find(user=>user._email == email && user._password==password);
        if(!checkingValidUser){
            return ({success:false,message:"Invalid Credentials or User is not exist!"});
        }
        else{
            return ({success:true,message:"User login successfully"});
        }
    }
    
    //method to get all the users from user array
    static getAllUserModel(){
        return userArray;
    }

    //method to check whether user exist or not using user email
    static userExistEmail(email){
        return userArray.find(user=> user._email==email);
    }
    //method to check whether user exist or not
    static userExist(userId){
        return userArray.find(user=> user._id==userId);
    }
};

const userArray=[];