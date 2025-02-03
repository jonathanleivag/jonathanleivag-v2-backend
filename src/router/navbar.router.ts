import { Router, Response, Request } from 'express'
import { LangQuery, Navbar, Res } from '../type'
import { getNavar } from '../services/navabar.service'

const router = Router()

router.get('/', async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<Navbar>>) => {
  res.json(await getNavar(req.query.lang))
})

export default router
