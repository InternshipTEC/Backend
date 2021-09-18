import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as tugasController from '../../controllers/tugasController'

const router = express.Router()

router.get('/occuring', tugasController.getAllOccuringTugas)

router.get('/:id', tugasController.getTugas)

router.get('/', tugasController.getAllTugas)

router.post('/', tugasController.createTugas)

router.put('/:id', verifyAdmin, tugasController.updateTugas)

router.delete('/:id', verifyAdmin, tugasController.deleteTugas)

export { router }
