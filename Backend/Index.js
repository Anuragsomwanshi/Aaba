import express  from 'express'
import cors from 'cors'
import { connectDB } from './config/Db.js';
import itemRouter from './routes/itemRoute.js';

const app = express()
const port = process.env.port||5000;

app.use(express.json());
app.use(cors());

connectDB();


app.use('/item',itemRouter);
app.use('/images',express.static('uploads'));

app.get('/',(req,res)=>{

    res.send("Welcome to nodejs");
})

app.listen(port,()=>{
    console.log("server started at port:",port);
})

// 