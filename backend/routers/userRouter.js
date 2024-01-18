const express = require('express');
const userRouter = express.Router();
const { createUser,loginUser, getLogin } = require('../controller/userController')

userRouter.route("/signUp")
    .post(createUser)

userRouter.route("/login")
    .post(loginUser)
    .get(getLogin);
module.exports = userRouter