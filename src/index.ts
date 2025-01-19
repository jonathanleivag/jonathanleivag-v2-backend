import express from 'express'
import { getEnv } from './utils/env.util'
import heroRouter from './router/hero.router'
import { closeDB, connectDB } from './database'

const app = express()

const PORT = getEnv('PORT')

app.get('/', (_req, res) => {
  res.redirect(getEnv('URI'))
})

app.use('/api/hero', heroRouter)

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
