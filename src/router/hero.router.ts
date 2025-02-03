import { Router, Response, Request } from 'express'
import { getHeros } from '../services/hero.service'
import { Hero, LangQuery, Res } from '../type'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<Hero>>) => {
  res.json(await getHeros(req.query.lang))
})

export default router
