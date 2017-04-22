import { Router } from 'express'

const router = Router()

router.route('/')
  .post((req, res) => {
    console.log('should have gotten video data', req.body)
    res.send(200)
  })

export default router
