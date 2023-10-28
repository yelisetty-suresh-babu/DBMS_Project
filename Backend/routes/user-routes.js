const express = require("express");
const {
  signUp,
  getUser,
  getAllUsers,
  logIn,
} = require("../controller/user-controller");
const userRouter = express.Router();

userRouter.post("/signup", signUp);
userRouter.get("/login", logIn);
userRouter.get("/all", getAllUsers);
userRouter.get("/id", getUser);

module.exports = userRouter;
