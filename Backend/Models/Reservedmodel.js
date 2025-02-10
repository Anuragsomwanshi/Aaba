import mongoose from 'mongoose'

const reservedSchema = new mongoose.Schema({

    userId:{
        type:String,
        required:true,
        
    },

    services:{
        type:Array,
        required:true,
    },
    address:{
        type:Object,
        require:true,
    },

    date:{
        type:Date,
        default:Date.now()
    },
})

const reservedModel = mongoose.models.reserved || mongoose.model('reserved',reservedSchema);

export default reservedModel;