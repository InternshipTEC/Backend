import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as materiController from '../../controllers/materiController'

const router = express.Router()

router.get('/:id', materiController.getMateri)

router.get('/', materiController.getAllMateri)

router.post('/', materiController.createMateri)

router.put('/:id', verifyAdmin, materiController.updateMateri)

router.delete('/:id', verifyAdmin, materiController.deleteMateri)

export { router }
