import reservedModel from "../Models/Reservedmodel.js";
import userModel from '../Models/userModel.js'


// srvice reserved


const reservedService = async (req,res)=>{

    

    try {

        const newService = new reservedModel({

            userId:req.body.userId,
            services:req.body.services,
            address:req.body.address
            
        })

        await newService.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        res.json({success:true})
        
    } catch (error) {

        console.log(error);
        res.json({success:false,msg:"error in reserved"});
        
    }


}

const userService = async(req,res)=>{

    try {
        const service = await reservedModel.find({userId:req.body.userId});
        res.json({success:true,data:service})
        
    } catch (error) {

        console.log(error);
        res.json({success:false,message:"error"});
        
    }

}

export{reservedService,userService};