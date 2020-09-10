import { Router } from 'express'
import addressRouter from './addresses'

let router = Router()
router.use('/addresses', addressRouter)
export default router
