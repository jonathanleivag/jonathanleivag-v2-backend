import { Router } from 'express'
import { getContact } from '../services/contact.service'

const router = Router()

router.get('/', async (_req, res) => {
  res.send(await getContact())
})

export default router
