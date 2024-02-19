import express from 'express'
import { createUser, deleteUser, getAllUsers, getUser, updateUsers } from '../Controller/UserController.js'
import { verify } from '../Middleware/AuthMiddleware.js'

export const userRouter = express.Router()

userRouter.get('/',  getAllUsers)
    .get('/:id', getUser)
    .post('/', createUser)
    .put('/:id', updateUsers)
    .delete('/:id', deleteUser)

