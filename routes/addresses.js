import { Router } from 'express'
import mongoose from 'mongoose'
import admin from 'firebase-admin'
require('../config');

const router = Router()

router.route('/')
  .post((req, res) => {
    console.log(req.body)
   const {addresses} = req.body
   return Promise.all(Promise.map(addresses, address => {
     return admin.firestore().collection('addresses').add(address)
   }))
   .catch(console.log)
  })


export default router