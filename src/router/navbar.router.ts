import { Request, Response, Router } from 'express'
import { LangQuery, Navbar, Res } from '../type.js'
import { getNavar } from '../services/navabar.service.js'

const router = Router()

router.get(
  '/',
  async (req: Request<{}, {}, {}, LangQuery>, res: Response<Res<Navbar>>) => {
    res.json(await getNavar(req.query.lang))
  }
)

export default router
