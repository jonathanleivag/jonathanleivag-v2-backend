import express from 'express'
import { getEnv } from './utils/env.util'
import heroRouter from './router/hero.router'

const app = express()

const PORT = getEnv('PORT')

app.get('/', (_req, res) => {
  res.send('🚀 ~ Jonathanleivag-v2-backend')
})

app.get('/ping', (_req, res) => {
  res.send('🚀 ~ pong')
})

app.use('/api/hero', heroRouter)

app.listen(PORT, () => {
  console.log('🚀 ~ app.listen ~ PORT:', PORT)
})
