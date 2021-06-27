import express, { Request, Response } from 'express'

const router = express.Router()

router.get('/v1/sample', async (req: Request, res: Response) => {
  // return a sample 200 OK response with a basic json
  res.status(200).json({
    success: true,
    data: {
      id: 1234,
    },
  })
})

export { router }
