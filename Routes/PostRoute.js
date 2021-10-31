
import Post from '../Models/Post.js';
import {generateToken,isAuth} from '../Auth.js';

import express from 'express';
import bcrypt from 'bcryptjs';
import multer from 'multer';
import sharp from 'sharp';
const PostRouter=express.Router();

const avatar=multer({
  
    
    limits:{
        fileSize:1000000
    },
      fileFilter(req,file,cb){
          
        if(!file.originalname.match(/\.(jpg|jpeg|PNG|png)$/))
        return cb( new Error('Please add a jpg/png/jpeg file'))
        cb(undefined,true)
      }
    })



PostRouter.post('/create',isAuth,avatar.single('avatar'),async(req,res)=>{
   
    try{
        const buf=await sharp(req.file.buffer).resize({width:250,height:250}).png().toBuffer();
        const post={
            image:buf,
            content:req.body.content,
            time:req.body.time,
            user:req.user.name
                   }
       
         const npost=new Post(post)
         await npost.save();
         res.status(200).send(npost)
       }
    catch(e){
        res.status(500).send();
    }
    
});



PostRouter.get('/allPost',isAuth,async(req,res)=>{
    try{
        const Posts=await Post.find({});
        res.status(200).send(Posts); 
    }
    catch(e){
        console.log(e)
         res.status(500).send();
    }
})

PostRouter.patch('/update/:id',isAuth,async(req,res)=>{

           const updates=Object.keys(req.body.updates);
           const allowedUpdates=['likes','comment','content','time','showComment'];
       
          
           const isValidOperation = updates.every((update) => { 
            if(!allowedUpdates.includes(update))
              return res.status(400).send('Invalid updates!')
                  })
          
       
        try {
             const post = await Post.findByIdAndUpdate({_id:req.params.id}, 
              req.body.updates);
          
            if (!post) {
              return res.status(404).send("Some Error Occurred")
             }
            return res.status(201).send(post)
           }


           catch (error) {
             console.log(error)
            return res.status(400).send(error)
          }     
    })
export default PostRouter;