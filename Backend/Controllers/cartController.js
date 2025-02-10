import userModel from '../Models/userModel.js'


const addCart = async(req,res)=>{

    try{

        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;

        if(!cartData[req.body.itemId]){
            
            cartData[req.body.itemId] = 1;
        }

        

        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to cart"});

    }catch(err){

        console.log(err);
        res.json({success:false,message:"error"});


    }


}

const removeCart = async(req,res)=>{

   try {
     let userData = await  userModel.findById(req.body.userId);
     let cartData = await userData.cartData;
     
     if(cartData[req.body.itemId]>0){
        cartData[req.body.itemId] -=1;

     }
     await userModel.findByIdAndUpdate(req.body.userId,{cartData});
     res.json({success:true,message:"remove from cart"});
    
   } catch (error) {
    console.log(error);
    res.json({success:false,message:"error"});
    
   } 

}

// fetch cart data

const getCart  = async(req,res)=>{

    try {
         let userData =  await  userModel.findById(req.body.userId);
         let cartData  = await userData.cartData;
         res.json({success:true,cartData})
        
    } catch (error) {

        console.log(error);
        res.json({success:false,message:"error"});
        
    }

}

export{addCart,removeCart,getCart};