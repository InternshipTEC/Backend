import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import { router } from './routes/index'

dotenv.config()

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(helmet())

app.use(`/`, router)

export default app
