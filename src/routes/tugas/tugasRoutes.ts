import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as tugasController from '../../controllers/eventController'

const router = express.Router()

router.get('/occuring', tugasController.getAllOccuringEvent)

router.get('/:id', tugasController.getEvent)

router.get('/', tugasController.getAllEvent)

router.post('/', tugasController.createEvent)

router.put('/:id', verifyAdmin, tugasController.updateEvent)

router.delete('/:id', verifyAdmin, tugasController.deleteEvent)

export { router }
