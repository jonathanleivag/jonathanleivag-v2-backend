import { Router, Response, Request } from 'express'

import { getHeader } from '../services/header.service.js'
import { Header, LangBody, Res } from '../type.js'

const router = Router()

router.get('/', async (req: Request<{}, {}, LangBody>, res: Response<Res<Header>>) => {
  res.json(await getHeader(req.body.lang))
})

export default router
