import express from 'express'
import { getEnv } from './utils/env.util'
import heroRouter from './router/hero.router'
import { closeDB, connectDB } from './database'
import cors from 'cors'
import contactRouter from './router/contact.router'
import aboutMeRouter from './router/aboutMe.router'
import seedRouter from './router/seed.router'
<<<<<<< HEAD
import { ENV } from './enum'

const PORT = getEnv(ENV.PORT)
=======

const PORT = getEnv('PORT')
>>>>>>> origin/qa

const app = express()

const corsOptions = {
<<<<<<< HEAD
  origin: getEnv(ENV.URI),
=======
  origin: getEnv('URI'),
>>>>>>> origin/qa
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With', 'X-CSRF-Token', 'Access-Control-Request-Method', 'Access-Control-Request-Headers', 'Access-Control-Allow-Origin', 'Access-Control-Allow-Credentials', 'Access-Control-Allow-Methods', 'Access-Control-Allow-Headers']
}

app.use(cors(corsOptions))
app.use(express.json({ limit: '1mb' }))

app.get('/', (_req, res) => {
<<<<<<< HEAD
  res.redirect(getEnv(ENV.URI))
=======
  res.redirect(getEnv('URI'))
>>>>>>> origin/qa
})

app.use('/api/hero', heroRouter)
app.use('/api/contact', contactRouter)
app.use('/api/about', aboutMeRouter)
app.use('/api/seed', seedRouter)

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
