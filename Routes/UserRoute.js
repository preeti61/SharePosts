import {generateToken,isAuth} from '../Auth.js';

import User from '../Models/User.js';
import express from 'express';
import bcrypt from 'bcryptjs';
const UserRouter=express.Router();

UserRouter.post('/register',async(req,res)=>{
    const temp=await User.findOne({email:req.body.email})
    
    if(temp)
    return res.status(409).send();
    const user=new User({
         name:req.body.name,
         email:req.body.email,
         password:bcrypt.hashSync(req.body.password,8)
        })
  
    try{
        await user.save();
           res.send({
            _id:user._id,
           email:user.email,
           name:user.name,
           token:generateToken({email:user.email,_id:user._id,name:user.name,password:user.password})
        })
      }
    catch(e){
       res.status(500).send(e.message)
    }
})



UserRouter.post('/signin',async(req,res)=>{

   
    try{
        const user=await User.findOne({email:req.body.email})
        
       if(user)
       {
        if( bcrypt.compareSync(req.body.password,user.password))
        {
          res.send({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            token:generateToken(user)
    
          })
        }
      
        }
        else
        throw new Error('Invalid email or password')
       }
       catch(e){
         res.status(401).send(e.message);
       }
})


export default UserRouter;