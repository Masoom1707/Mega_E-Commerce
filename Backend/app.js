import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import helmet from 'helmet'

import { dbConnection } from './config/dbConnection.js'
import { userRouter } from './router/userRouter.js'

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cookieParser())
app.use(morgan())
app.use(helmet({crossOriginResourcePolicy:false}))


app.use('/auth/user', userRouter)


dbConnection().then(() => {
    app.listen(PORT, () => {
        console.log('listening on the port:- ',PORT);
    })
}).catch((error) => {
    console.log('Internal Error', error.message);
})

