import dotenv from 'dotenv'
dotenv.config()
import express from 'express'

import { dbConnection } from './config/dbConnection.js'

const app = express()

const PORT = process.env.PORT || 4000

dbConnection().then(() => {
    app.listen(PORT, () => {
        console.log('listening on the port:- ',PORT);
    })
}).catch((error) => {
    console.log('Internal Error', error.message);
})

