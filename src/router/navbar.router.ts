import { Router, Response, Request } from 'express'
import { LangBody, Navbar, Res } from '../type'
import { getNavar } from '../services/navabar.service'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangBody>, res: Response<Res<Navbar>>) => {
  res.json(await getNavar(req.query.lang))
})

export default router
