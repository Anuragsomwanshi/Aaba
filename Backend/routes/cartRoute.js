import express from 'express'
import { addCart,removeCart,getCart } from '../Controllers/cartController.js'
import authmiddleware  from '../Middlewares/auth.js';

const cartRouter = express.Router();

cartRouter.post('/add',authmiddleware,addCart);
cartRouter.post('/remove',authmiddleware,removeCart);
cartRouter.post('/get',authmiddleware,getCart);

export default cartRouter;