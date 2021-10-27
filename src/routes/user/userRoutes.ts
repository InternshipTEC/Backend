import express from 'express'
import * as userController from '../../controllers/userController'
import * as absenContoller from '../../controllers/absenController'
import { postCheck } from '../../validation/userRoutesValidation'
import { verifyAdmin } from '../../middleware/token'

const router = express.Router()

router.get('/fyp', userController.getAllUserWithFypProfile)

router.get('/fyp/:id', userController.getUserWithFypProfile)

router.put('/fyp/:id', userController.updateUserFypProfile)

router.get('/:id', userController.getUser)

// TODO -- wrong naming convention
router.get('/:id/absen', absenContoller.getAbsenByUserId)

router.get('/', userController.getAllUser)

router.post('/', postCheck, verifyAdmin, userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', verifyAdmin, userController.deleteUser)

export { router }
