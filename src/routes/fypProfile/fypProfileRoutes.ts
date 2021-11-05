import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as fypProfileController from '../../controllers/fypProfileController'

const router = express.Router()

router.get('/:id', fypProfileController.getFypProfile)

router.get('/', fypProfileController.getAllFypProfile)

router.put('/:id', verifyAdmin, fypProfileController.updateFypProfile)

router.delete('/:id', verifyAdmin, fypProfileController.deleteFypProfile)

export { router }
