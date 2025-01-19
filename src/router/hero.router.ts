import { Router } from 'express'
import { getHeros } from '../services/hero.service'

const router = Router()

router.get('/', async (_req, res) => {
  res.send(await getHeros())
})

export default router
