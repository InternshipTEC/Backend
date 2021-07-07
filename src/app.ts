import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import cors, { CorsOptions } from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'
import { router } from './routes/index'
import dotenv from 'dotenv'
import { IS_PRODUCTION } from './config'

dotenv.config()
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "User Service",
      version: "2.0.0",
      description: "This service is meant to be used as a user and authentication service at Bukit Vista"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ]
  },
  apis : ["./src/routes/**/*{.ts,.js}","./src/docs/**/*.json"]
}

const specs = swaggerJSDoc(options)
const corsOptions: CorsOptions = {
	origin: IS_PRODUCTION ? [] : 'http://localhost:3001',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
}
export const app = express()
app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use(helmet())
app.use('/', router)
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(specs))