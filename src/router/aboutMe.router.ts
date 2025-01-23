import { Router, Response } from 'express'
import { AboutMes, Res } from '../type'
import { getAboutMe } from '../services/aboutMe.service'
import { WithId } from 'mongodb'

const router = Router()

router.get('/', async (_req, res: Response<Res<Array<WithId<AboutMes>>>>) => {
  res.json(await getAboutMe())
})

export default router
