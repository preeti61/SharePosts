import mongoose from'mongoose';
const PostSchema=new mongoose.Schema({
    image:Buffer,
    content:String,
    user:{
        type:String,
        required:true
         },
    likes:{
        type:Number,
        default:0
    },
    comment:{
        type:Number,
        default:0
    },
    showComment:{
        type:Number,
        default:0
    },
    time:{
        type:String
    }
})

const Post =new mongoose.model('Post',PostSchema);
export default Post;