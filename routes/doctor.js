import { Router } from 'express'
import mongoose from 'mongoose'

const router = Router()

router.route('/')
  .get((req, res) => {
    mongoose
    .model('doctor')
    .find({})
    .then(doctors => res.json(doctors))
    .catch(err => res.send(err))
  })
  .post((req, res) => {
    mongoose
    .model('doctor')
    .create(req.body)
    .then(doctor => res.json(doctor))
  })


export default router