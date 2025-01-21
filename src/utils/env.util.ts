import 'dotenv/config'
<<<<<<< HEAD
import { ENV } from '../enum'

export const getEnv = (key: ENV): string => {
=======
import { Env } from '../type'

export const getEnv = (key: Env): string => {
>>>>>>> origin/qa
  const value = process.env[key]
  if (value == null || value === '') {
    throw new Error(`Missing env variable: ${key}`)
  }
  return value
}
