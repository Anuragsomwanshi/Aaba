import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({

    name:{
        type:String,
        require:true,

    },
   

    price:{
        type:Number,
        require:true,
    },

    

    category:{
        type:String,
        require:true,
    },

    image:{
        type:String,
        require:true,
    },
})

const itemModel = mongoose.models.item || mongoose.model('item',itemSchema);

export default itemModel;