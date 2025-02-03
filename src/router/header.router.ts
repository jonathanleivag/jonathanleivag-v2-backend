import { Router, Response, Request } from 'express'

import { getHeader } from '../services/header.service'
import { Header, LangQuery, Res } from '../type'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<Header>>) => {
  res.json(await getHeader(req.query.lang))
})

export default router
