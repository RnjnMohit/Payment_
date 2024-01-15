const express = require('express');
const userRouter = express.Router();
const { createUser,loginUser } = require('../controller/userController')

userRouter.route("/signUp")
    .post(createUser)

userRouter.route("/login")
    .post(loginUser)

module.exports = userRouter