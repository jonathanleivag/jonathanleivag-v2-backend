import { Response, Router } from 'express'
import { Res, ResSocial } from '../type.js'
import { getSocial } from '../services/social.service.js'

const router = Router()

router.get('/', async (_req, res: Response<Res<ResSocial>>) => {
  res.json(await getSocial())
})

export default router
