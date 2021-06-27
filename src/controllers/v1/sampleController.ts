import express from 'express'

import { sampleRoutes } from './sample'

const router = express.Router()

router.use(sampleRoutes)

export default router

