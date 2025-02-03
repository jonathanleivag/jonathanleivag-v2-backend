import { Router, Response, Request } from 'express'
import { getHeros } from '../services/hero.service.js'
import { Hero, LangBody, Res } from '../type.js'

const router = Router()

router.get('/', async (req: Request<{}, {}, LangBody>, res: Response<Res<Hero>>) => {
  res.json(await getHeros(req.body.lang))
})

export default router
