import { Router } from 'express'

const router = Router()

router.get('/', (_req, res) => {
  res.send('🚀 ~ jonathanleivag-v2-backend')
})

export default router
