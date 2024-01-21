const express = require("express");
const app = express();
var cors = require('cors')
const cookieParser = require('cookie-parser');

app.use(cors())
require('dotenv').config();
app.use(express.json());
app.listen(3000,()=>{
    console.log("listening on port 3000");
});
app.use(cookieParser());


const userRouter = require('./routers/userRouter');
const accountRouter = require('./routers/accountRouter');
app.use('/user',userRouter)
app.use('/account',accountRouter)