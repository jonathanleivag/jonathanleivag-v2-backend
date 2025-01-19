import express from 'express'
import { getEnv } from './utils/env.util'

const app = express()

const PORT = getEnv('PORT')

app.get('/', (_req, res) => {
  res.send('🚀 ~ Jonathanleivag-v2-backend')
})

app.get('/ping', (_req, res) => {
  res.send('🚀 ~ pong')
})

app.listen(PORT, () => {
  console.log('🚀 ~ app.listen ~ PORT:', PORT)
})
