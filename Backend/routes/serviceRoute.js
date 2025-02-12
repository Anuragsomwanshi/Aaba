import express from 'express'
import auth from '../Middlewares/auth.js'
import { placeService,userService,listServices} from '../Controllers/serviceController.js'

const serviceRouter = express.Router();

serviceRouter.post("/place",auth,placeService);
serviceRouter.post("/userservice",auth,userService);
serviceRouter.get('/list',listServices);


export default serviceRouter;