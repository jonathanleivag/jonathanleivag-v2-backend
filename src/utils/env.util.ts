import 'dotenv/config'
import { ENV } from '../enum.js'

export const getEnv = (key: ENV): string => {
  const value = process.env[key]
  if (value == null || value === '') {
    throw new Error(`Missing env variable: ${key}`)
  }
  return value
}
