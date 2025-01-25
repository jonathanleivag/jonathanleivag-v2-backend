import { Router, Response } from 'express'
import { AboutMes, Res } from '../type.js'
import { getAboutMe } from '../services/aboutMe.service.js'
import { WithId } from 'mongodb'

const router = Router()

router.get('/', async (_req, res: Response<Res<Array<WithId<AboutMes>>>>) => {
  res.json(await getAboutMe())
})

export default router
