import { Response, Router } from 'express'
import { fetchPinnedRepos, getInfo, getProjects, getReadme } from '../services/project.service'
import { Res } from '../type'

const router = Router()

router.get('/', async (_req, res: Response<Res>) => {
  res.json(await getProjects())
})

router.get('/pinned', async (_req, res: Response<Res>) => {
  res.json(await fetchPinnedRepos())
})

router.get('/readme', async (_req, res: Response<Res>) => {
  res.json(await getReadme())
})

router.get('/info', async (_req, res: Response<Res>) => {
  res.json(await getInfo())
})

export default router
