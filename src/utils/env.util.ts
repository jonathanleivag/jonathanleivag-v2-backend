import 'dotenv/config'
import { Env } from '../type'

export const getEnv = (key: Env): string => {
  const value = process.env[key]
  if (value == null || value === '') {
    throw new Error(`Missing env variable: ${key}`)
  }
  return value
}
