import { Router } from "express";
import {createUser,getAllUser,getSingleUser,updateUser,deleteUser} from '../controller/user.controller'
const UserRouter = Router();

UserRouter.post('/', createUser)
UserRouter.get('/', getAllUser)
UserRouter.get('/:id', getSingleUser)
UserRouter.put('/:id', updateUser)
UserRouter.delete('/:id', deleteUser)

export default UserRouter;