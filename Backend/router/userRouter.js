import express from 'express'
import { registerUser, verifyEmail } from '../controller/userController.js'

export const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)