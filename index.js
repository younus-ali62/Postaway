import express from "express";
import postRouter from "./src/Features/Post/PostRoutes/post-routes.js";
import userRouter from "./src/Features/Users/UserRoutes/user-routes.js";
import bodyParser from "body-parser";
//defining a port
const port=3000;

//creating server
const app=express();

//body parser
app.use(bodyParser.json());

//handling routes for user requests
app.use("/api/users",userRouter);

//handling routes for post requests
app.use("/api/posts",postRouter);

// handling a defautl request
app.get("/",(req,res)=>{
    res.send("Welcome to my Postaway API");
})
//server is listening on 3000 port

app.listen(port,()=>{
    console.log(`Server is listening on ${port} `)
});