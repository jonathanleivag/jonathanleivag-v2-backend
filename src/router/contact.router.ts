import { Router, Request } from 'express'
import { getContact, sendEmail } from '../services/contact.service'
import { EmailBody } from '../type'

const router = Router()

router.get('/', async (_req, res) => {
  res.send(await getContact())
})

router.post('/send/email', async (req: Request<{}, {}, EmailBody>, res) => {
  await sendEmail(req.body.name, req.body.content, req.body.email)
  res.send('send email')
})

export default router
