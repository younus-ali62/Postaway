import express from "express";
import bodyParser from "body-parser";
import postRouter from "./src/Features/Post/PostRoutes/post-routes.js";
import userRouter from "./src/Features/Users/UserRoutes/user-routes.js";
import { jwtAuthorization } from "./src/Middleware/JWT Middleware/jwtAuthorization.js";
import ApplicationError from "./src/Error-Handler/error_handler.js";
import loggerMiddleware from "./src/Middleware/loggerMiddleware/logger.js";
//defining a port
const port = 3000;

//creating server
const app = express();

//body parser
app.use(bodyParser.json());

app.use(express.static("Public"));

app.use(loggerMiddleware);
//handling routes for user requests
app.use("/api/users", userRouter);

//handling routes for post requests
app.use("/api/posts", jwtAuthorization, postRouter);

// handling a defautl request
app.get("/", (req, res) => {
  res.send("Welcome to my Postaway API");
});

//error handler
app.use((err, req, res, next) => {
  if (err instanceof ApplicationError) {
    console.log(err);
    res.status(err.statusCode).send(err.message);
  } else {
    return res.status(500).send("Interval server error. Try again later!");
  }
});

//handling an API call which does not exist in our documentation
//middleware to handle invalid routes
app.use((req, res) => {
  res
    .status(404)
    .json({
      success: "failure",
      message: `Invalid url ${req.originalUrl}.`,
    });
});

//server is listening on 3000 port

app.listen(port, () => {
  console.log(`Server is listening on ${port} `);
});
