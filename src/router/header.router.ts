import { Router, Response, Request } from 'express'

import { getHeader } from '../services/header.service'
import { Header, LangBody, Res } from '../type'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangBody>, res: Response<Res<Header>>) => {
  res.json(await getHeader(req.query.lang))
})

export default router
