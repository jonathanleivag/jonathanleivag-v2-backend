import { Router, Response } from 'express'
import { getHeros } from '../services/hero.service'
import { Res } from '../type'

const router = Router()

router.get('/', async (_req, res: Response<Res>) => {
  res.json(await getHeros())
})

export default router
