import jsonwebtoken from "jsonwebtoken";
import ApplicationError from "../../Error-Handler/error_handler.js";
export const jwtAuthorization = (req, res, next) => {
  const jwtToken = req.headers["authorization"];
  if (!jwtToken) {
    throw new ApplicationError("User is Unathorized",404);
  } else {
    try {
      const payload = jsonwebtoken.verify(
        jwtToken,
        "f01fd3a7e0fbb0b37178fd063d67dbd6d278bd1a6eaa842050f17cafee833f5d"
      );
      // console.log(payload);
      req.userId=payload.userId;
    } catch (err) {
      throw new ApplicationError("User is Unathorized",404);
      // return res.status(401).send("User is Unauthorized");
    }
  }
  next();
};
