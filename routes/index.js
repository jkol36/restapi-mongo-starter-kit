import { Router } from 'express'
import doctorRouter from './doctor'
import patientRouter from './patient'
import userRouter from './user'
import videoRouter from './videos'
import imageRouter from './images'

let router = Router()
router.use('/user', userRouter)
router.use('/patient', patientRouter)
router.use('/doctor', doctorRouter)
router.use('/video/upload', videoRouter)
router.use('/images/upload', imageRouter)
export default router
