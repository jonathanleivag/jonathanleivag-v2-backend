import { Router, Response } from 'express'
import { getHeros } from '../services/hero.service'
import { Hero, Res } from '../type'
import { WithId } from 'mongodb'

const router = Router()

router.get('/', async (_req, res: Response<Res<Array<WithId<Hero>>>>) => {
  res.json(await getHeros())
})

export default router
