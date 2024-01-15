const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors())
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(express.json());
app.listen(3000,()=>{
    console.log("listening on port 3000");
});
app.use(cookieParser());


const userRouter = require('./routers/userRouter');
app.use('/user',userRouter)