import { Router, Response, Request } from 'express'
import { AboutMes, LangQuery, Res } from '../type.js'
import { getAboutMe } from '../services/aboutMe.service.js'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<AboutMes>>) => {
  res.json(await getAboutMe(req.query.lang))
})

export default router
