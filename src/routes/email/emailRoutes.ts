import express from 'express'
import * as emailController from '../../controllers/emailController'

const router = express.Router()

router.post('/notify-friends', emailController.notifyFriends)

export { router }
