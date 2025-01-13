import mongoose from  'mongoose'

export const connectDB = async () =>{

    await mongoose.connect('mongodb+srv://aababackend:aababack143@cluster0.hvd6j.mongodb.net/aaba')
    .then(()=>console.log("database connected successfully"));
}