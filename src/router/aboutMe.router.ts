import { Router, Response, Request } from 'express'
import { AboutMes, LangBody, Res } from '../type'
import { getAboutMe } from '../services/aboutMe.service'

const router = Router()

router.get('/', async (req: Request<{}, {}, LangBody>, res: Response<Res<AboutMes>>) => {
  res.json(await getAboutMe(req.body.lang))
})

export default router
