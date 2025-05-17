import { Response, Router } from 'express'
import {
  fetchPinnedRepos,
  getInfo,
  getProjects,
  getReadme
} from '../services/project.service.js'
import { IProject, PinnedRepo, Res } from '../type.js'
import { RestEndpointMethodTypes } from '@octokit/rest'

const router = Router()

router.get('/', async (_req, res: Response<Res<IProject>>) => {
  res.json(await getProjects())
})

router.get('/pinned', async (_req, res: Response<Res<PinnedRepo[]>>) => {
  res.json(await fetchPinnedRepos())
})

router.get('/readme', async (_req, res: Response<Res<string>>) => {
  res.json(await getReadme())
})

router.get(
  '/info',
  async (
    _req,
    res: Response<
      Res<
        RestEndpointMethodTypes['users']['getAuthenticated']['response']['data']
      >
    >
  ) => {
    res.json(await getInfo())
  }
)

export default router
