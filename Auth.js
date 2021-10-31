import  jwt from  'jsonwebtoken';
const generateToken=({_id,email,name,password})=>{

    return jwt.sign({
        email,
        _id,
        name,
        password
    },process.env.JWT_SECRET,
    {
        expiresIn:'30d'
    })
}


const isAuth=(req,res,next)=>{
    const authorization=req.headers.authorization;
    if(authorization)
    {
        const token=authorization.slice(7,authorization.length);
        jwt.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err)
            res.status(401).send({error:"Invalid Token"})
            else{
            req.user=decode;
            next();
            }
        })
    }
}

export {isAuth,generateToken};