import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'

import logger from './logger'
import { IS_PRODUCTION, PORT } from './config'

import sampleRouter from './controllers/v1/sampleController'
import {router} from './routes/index'
// research more about best practice
import { connectDatabase } from './database'
connectDatabase().then(async connection => {
  const corsOptions: CorsOptions = {
    origin: IS_PRODUCTION ? [] : 'http://localhost:3001',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

  if(!IS_PRODUCTION) 
    await connection.runMigrations();

  const app = express()
  const port = process.env.PORT || 3000

  app.use(cors(corsOptions))
  app.use(bodyParser.json())
  app.use(helmet())

  app.use('/', router)

  app.listen(port, () => logger.info(`Application listening on port ${PORT}!`))
}).catch((err)=>{
  console.log(err);
})
