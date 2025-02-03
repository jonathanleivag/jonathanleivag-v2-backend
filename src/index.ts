import express, { Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import { getEnv } from './utils/env.util.js'
import { connectDB } from './database.js'
import { ENV } from './enum.js'

import heroRouter from './router/hero.router.js'
import contactRouter from './router/contact.router.js'
import aboutMeRouter from './router/aboutMe.router.js'
import seedRouter from './router/seed.router.js'
import projectRouter from './router/project.router.js'
import headerRouter from './router/header.router.js'
import navbarRouter from './router/navbar.router.js'

const app = express()

const corsOptions = {
  origin: getEnv(ENV.URI),
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'X-CSRF-Token', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers']
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))
app.use(helmet())

app.get('/', (_req, res) => {
  res.redirect(getEnv(ENV.URI))
})

app.use('/api/hero', heroRouter)
app.use('/api/contact', contactRouter)
app.use('/api/about', aboutMeRouter)
app.use('/api/seed', seedRouter)
app.use('/api/project', projectRouter)
app.use('/api/header', headerRouter)
app.use('/api/navbar', navbarRouter)

app.use((_req, res) => {
  res.redirect(getEnv(ENV.URI))
})

let isConnected = false

const handler = async (req: Request, res: Response): Promise<void> => {
  try {
    if (!isConnected) {
      await connectDB()
      isConnected = true
    }
    app(req, res)
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    throw error
  }
}

export default handler
