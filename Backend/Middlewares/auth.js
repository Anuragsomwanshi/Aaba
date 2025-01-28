import jwt from 'jsonwebtoken'

const authmiddleware = async(req,res,next)=>{

    const {token} = req.headers

    if(!token){
        return res.json({success:false,message:"not authorized Log in again"});
    }

    try{

        const tokenDecode = jwt.verify(token,process.env.JWT_SECERATE);
        req.body.userId=tokenDecode.id;
        next();
    }

    catch(err){

        console.log(err);
        res.json({success:false,message:"error"});


    }




}

export default authmiddleware;