import { Router, Request, Response } from 'express'
import { getContact, sendEmail } from '../services/contact.service'
import { Contact, EmailBody, Res, ResWhitOutData } from '../type'
import { WithId } from 'mongodb'

const router = Router()

router.get('/', async (_req, res: Response<Res<Array<WithId<Contact>>>>) => {
  res.json(await getContact())
})

router.post('/send/email', async (req: Request<{}, {}, EmailBody>, res: Response<ResWhitOutData>) => {
  res.json(await sendEmail(req.body.name, req.body.content, req.body.email))
})

export default router
