import userModel from "../Models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'


const login =  async(req,res) =>{

    const {email,password} = req.body;

    try{
        const user = await userModel.findOne({email});

        if(!user){
            return res.json({success:false,massage:"user does not exists"});
        }

        const isMatch = await bcrypt.compare(password,user.password);

        if(!isMatch){

            return res.json({success:false,massage:"Invalid credentials"});



        }

        const token = buildToken(user._id);
        res.json({success:true,token})


    }

    catch(err){

        console.log("show error"+err);
        res.json({success:false,massage:"error occur"});

    }



}

const buildToken = (id) =>{

    return jwt.sign({id},process.env.JWT_SECERATE);

}

const register = async(req,res)=>{

    const {name,password,email} = req.body;

    try{

        const exists = await userModel.findOne({email});

        if(exists){
            return res.json({success:false,massage:"user already exists"});
        }

        // validate email and password is valid


        if(!validator.isEmail(email) ){

            return res.json({success:false,massage:"Email is not valid. please enter valid email"});
        }

        if(password.length<8){
            return res.json({success:false,massage:"please enter a strong password"});
        }



        // hashing user password

        const salt = await bcrypt.genSalt(10)
        const hashpassword = await bcrypt.hash(password,salt);

        const newUser = new userModel({
            name:name,
            email:email,
            password:hashpassword,
        })

        const user =  await newUser.save();
        const token = buildToken(user._id);

        res.json({success:true,token})

    }
    catch(err){

        console.log(err);
        res.json({success:false,massage:"error occur"});

    }


}

export {login,register};
