import mongoose from 'mongoose';
const CommentSchema=new mongoose.Schema({
    content:String,
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Post',
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    time:String
})

const Comment =new mongoose.model('Comment',CommentSchema);
export default Comment;