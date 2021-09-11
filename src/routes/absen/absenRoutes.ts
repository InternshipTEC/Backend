import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as absenController from '../../controllers/absenController'

const router = express.Router()

router.get('/:id', absenController.getAbsen)

router.get('/', absenController.getAllAbsen)

router.post('/', absenController.createAbsen)

router.put('/:id', verifyAdmin, absenController.updateAbsen)

router.delete('/:id', verifyAdmin, absenController.deleteAbsen)

export { router }
