import express  from 'express'
import { body } from 'express-validator'
import { requestValidator } from '../../middleware/validation'
import userController from '../../controllers/userController'

const router = express.Router()

router.get('/all', userController.getAllUser)

router.get('/:id', userController.getUser)

router.post('/', 
  body('name').notEmpty(),
  body('email').isEmail(),
  body('password').exists(),
  requestValidator,
  userController.createUser)

router.put('/:id', userController.updateUser)

router.delete('/:id', userController.deleteUser)

export { router }
