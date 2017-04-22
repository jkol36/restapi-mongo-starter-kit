import { Router } from 'express'

const router = Router()

router.route('/')
  .post((req, res) => {
    console.log('should have gotten images', req.body)
    console.log('form property', req.form)
    console.log('req.files', req.files)
    return res.status(200)
  })

export default router