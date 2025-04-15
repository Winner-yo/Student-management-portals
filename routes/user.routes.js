import { Router } from "express";
const UserRouter = Router();

UserRouter.post('/', (req,res) => {
    res.send({title:"user created"})
})
UserRouter.get('/', (req,res) => {
    res.send({title:"user found"})
})
UserRouter.get('/:id', (req,res) => {
    res.send({title:"user return"})
})
UserRouter.put('/:id', (req,res) => {
    res.send({title:"user updated"})
})
UserRouter.delete('/:id', (req,res) => {
    res.send({title:"user deleted"})
})

export default UserRouter;