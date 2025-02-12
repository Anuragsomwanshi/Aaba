import express  from 'express'
import cors from 'cors'
import { connectDB } from './config/Db.js';
import itemRouter from './routes/itemRoute.js';
import userRouter from './routes/userRoute.js';

import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import serviceRouter from './routes/serviceRoute.js';

const app = express()
const port = process.env.PORT||5000;

app.use(express.json());
app.use(cors());

connectDB();


app.use('/item',itemRouter);
app.use('/images',express.static('uploads'));
app.use('/user',userRouter);
app.use('/cart',cartRouter);
app.use('/service',serviceRouter);


app.get('/',(req,res)=>{

    res.send("Welcome to nodejs");
})

app.listen(port,()=>{
    console.log("server started at port:",port);
})

// 