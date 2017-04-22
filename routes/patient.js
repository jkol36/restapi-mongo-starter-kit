import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.route('/')
  .get((req, res) => {
    mongoose
    .model('patient')
    .find({})
    .then(patients => res.json(patients))
    .catch(err => res.send(err))
  })
  .post((req, res) => {
    mongoose
    .model('patient')
    .create(req.body)
    .then(patient => res.json(patient))
  })


export default router