import { Router, Response } from 'express'
import { Res, ResSocial } from '../type'
import { getSocial } from '../services/social.service'

const router = Router()

router.get('/', async (_req, res: Response<Res<ResSocial>>) => {
  res.json(await getSocial())
})

export default router
