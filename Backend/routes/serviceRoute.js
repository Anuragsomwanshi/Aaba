import express from 'express'
import auth from '../Middlewares/auth.js'
import { reservedService ,userService} from '../Controllers/serviceController.js'

const serviceRouter = express.Router();

serviceRouter.post("/place",auth,reservedService);
serviceRouter.post("/userservice",auth,userService)


export default serviceRouter;