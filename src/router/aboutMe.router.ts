import { Router, Response } from 'express'
import { Res } from '../type'
import { getAboutMe } from '../services/aboutMe.service'

const router = Router()

router.get('/', async (_req, res: Response<Res>) => {
  res.json(await getAboutMe())
})

export default router
