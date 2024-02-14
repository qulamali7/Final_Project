import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUsers } from '../Controller/UserController.js'
import { verify } from '../Middleware/AuthMiddleware.js'

export const userRouter = express.Router()

userRouter.get('/',  getAllUsers)
    .get('/:id', verify(["user", "admin"]), getUser)
    .post('/', verify(["admin"]), createUser)
    .put('/:id', verify(["admin"]), updateUsers)
    .delete('/:id', verify(["admin"]), deleteUser)

