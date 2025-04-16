import express from 'express'
import { loginController, logoutController, registerUser, verifyEmail } from '../controller/userController.js'
import { authMiddleware } from '../middleware/userAuth.js'

export const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/verify-email', verifyEmail)
userRouter.post('/login', loginController)
userRouter.post('/logout', authMiddleware, logoutController)