import express from 'express'
import { getEnv } from './utils/env.util'
import heroRouter from './router/hero.router'
import { closeDB, connectDB } from './database'
import cors from 'cors'
import contactRouter from './router/contact.router'
import aboutMeRouter from './router/aboutMe.router'
import seedRouter from './router/seed.router'
import { ENV } from './enum'
import projectRouter from './router/project.router'

const PORT = getEnv(ENV.PORT)

const app = express()

const corsOptions = {
  origin: getEnv(ENV.URI),
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'X-CSRF-Token', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers']
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

app.get('/', (_req, res) => {
  res.redirect(getEnv(ENV.URI))
})

app.use('/api/hero', heroRouter)
app.use('/api/contact', contactRouter)
app.use('/api/about', aboutMeRouter)
app.use('/api/seed', seedRouter)
app.use('/api/project', projectRouter)

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => {
      console.log('🚀 ~ app.listen ~ PORT:', PORT)
    })

    process.on('SIGINT', () => {
      server.close(() => {
        closeDB().catch(console.error)
        process.exit(0)
      })
    })
  })
  .catch((error) => {
    if (error instanceof Error) {
      console.error('🚫 Error connecting to the database:', error.message)
    }
    throw error
  })
