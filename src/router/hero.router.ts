import { Request, Response, Router } from 'express'
import { getHeros } from '../services/hero.service.js'
import { Hero, LangQuery, Res } from '../type.js'

const router = Router()

router.get(
  '/',
  async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<Hero>>) => {
    res.json(await getHeros(req.query.lang))
  }
)

export default router
