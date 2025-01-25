import { Router, Response } from 'express'
import { getHeros } from '../services/hero.service.js'
import { Hero, Res } from '../type.js'
import { WithId } from 'mongodb'

const router = Router()

router.get('/', async (_req, res: Response<Res<Array<WithId<Hero>>>>) => {
  res.json(await getHeros())
})

export default router
