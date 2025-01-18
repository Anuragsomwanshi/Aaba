import itemModel from "../Models/Itemmodel.js";
import fs from 'fs'


const addItem = async(req,res)=>{


    let img_filename =  `${req.file.filename}`;

    const item = new itemModel({

        name:req.body.name,
        price: req.body.price,
        category:req.body.category,
        image:img_filename
    })

    try{

        await item.save();
        res.json({ success:true,msg:"item added"})


    } catch(error){

        console.log("error:-",error);
        res.json({success:false, msg:"error occur"});


    }


}

const listItem = async(req,res) =>{

    try{

        const items = await itemModel.find({});
        res.json({success:true,data:items});


    } catch(error){
        console.log(error);
        res.json({success:false, message:"error "})


    }



}


const removeItem = async (req,res)=>{


    try{

        const item = await itemModel.findById(req.body.id);
        fs.unlink(`uploads/${item.image}`,()=>{})

        await itemModel.findByIdAndDelete(req.body.id);
        res.json({success:true,msg:"Item removed"})


    }

    catch(error){

        console.log(error);
        res.json({success:false,msg:"food has not removed"})


    }


}


export {addItem,listItem,removeItem};
