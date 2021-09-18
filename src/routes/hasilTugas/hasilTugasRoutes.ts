import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as hasilTugasController from '../../controllers/absenController'

const router = express.Router()

router.get('/:id', hasilTugasController.getAbsen)

router.get('/', hasilTugasController.getAllAbsen)

router.post('/', hasilTugasController.createAbsen)

router.put('/:id', verifyAdmin, hasilTugasController.updateAbsen)

router.delete('/:id', verifyAdmin, hasilTugasController.deleteAbsen)

export { router }
