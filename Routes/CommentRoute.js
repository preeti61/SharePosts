import Comment from '../Models/Comment.js';
import {isAuth} from '../Auth.js';

import express from 'express';


const CommentRouter=express.Router();

CommentRouter.post('/add',isAuth,async(req,res)=>{
  try{
    const comment =new Comment({
      content:req.body.content,
      post:req.body.post_id,
      user:req.user._id,
      time:req.body.time
    })
    await comment.save();
    res.status(200).send();
    }
   catch(e){
       console.log(e)
   }
})

CommentRouter.get('/getComments/:id',async(req,res)=>{

  try{
       const comments =await Comment.find({post:req.params.id});
       const ndata=comments.map((comment)=>{
                return {content:comment.content,time:comment.time}
       })
       res.status(200).send(ndata);
    }
  catch(e){
         console.log(e);
         }
})

export default CommentRouter;