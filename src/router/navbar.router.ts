import { Router, Response, Request } from 'express'
import { LangBody, Navbar, Res } from '../type.js'
import { getNavar } from '../services/navabar.service.js'

const router = Router()

router.get('/', async (req: Request<{}, {}, LangBody>, res: Response<Res<Navbar>>) => {
  res.json(await getNavar(req.body.lang))
})

export default router
