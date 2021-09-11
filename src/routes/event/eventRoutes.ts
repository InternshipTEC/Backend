import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as eventController from '../../controllers/eventController'
import * as absenContoller from '../../controllers/absenController'

const router = express.Router()

router.get('/occuring', eventController.getAllOccuringEvent)

router.get('/:id', eventController.getEvent)

router.get('/:id/absen', absenContoller.getAbsenByEventId)

router.get('/', eventController.getAllEvent)

router.post('/', eventController.createEvent)

router.put('/:id', verifyAdmin, eventController.updateEvent)

router.delete('/:id', verifyAdmin, eventController.deleteEvent)

export { router }
