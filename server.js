import express from 'express';
import dotenv from 'dotenv';
import  mongoose from 'mongoose';
import UserRouter from './Routes/UserRoute.js';
import PostRouter from './Routes/PostRoute.js';
import CommentRoute from './Routes/CommentRoute.js';
dotenv.config();
const port=process.env.PORT||5000;
const app=express();
app.use(express.json());


const Connection_URL=process.env.MONGODB_URL;

app.use('/api/user',UserRouter);
app.use('/api/post',PostRouter);
app.use('/api/comment',CommentRoute);


mongoose.connect(Connection_URL,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    app.listen(port,()=>{
        console.log("server up at port 5000");
    })
}).catch((e)=>{
    console.log(e)
    console.log('could not connect')
})