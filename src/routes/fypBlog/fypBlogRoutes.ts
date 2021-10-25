import express from 'express'
import { verifyAdmin } from '../../middleware/token'
import * as fypBlogController from '../../controllers/fypBlogController'

const router = express.Router()

router.get('/role/:role', fypBlogController.getFypBlogByRole)

router.get('/:id', fypBlogController.getFypBlog)

router.get('/', fypBlogController.getAllFypBlog)

router.post('/', fypBlogController.createFypBlog)

router.put('/:id', verifyAdmin, fypBlogController.updateFypBlog)

router.delete('/:id', verifyAdmin, fypBlogController.deleteFypBlog)

export { router }
