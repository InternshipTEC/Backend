import { body } from 'express-validator'
import { requestValidator } from '../middleware/validation'

export const postCheck = [body('photoUrl').notEmpty(), body('metode').exists(), body('media').exists(), body('usersEmail').exists(), requestValidator]
