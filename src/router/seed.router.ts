import { Response, Router } from 'express'
import { ResWhitOutData } from '../type'
import { insert } from '../services/seed.service'

const router = Router()

router.post('/', async (_req, res: Response<ResWhitOutData>) => {
  res.json(await insert())
})

export default router
