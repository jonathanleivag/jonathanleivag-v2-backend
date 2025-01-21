import { MongoClient, Db, ServerApiVersion } from 'mongodb'
import { getEnv } from './utils/env.util'
<<<<<<< HEAD
import { ENV } from './enum'

const mongoURI = getEnv(ENV.MONGODB_URI)
=======

const mongoURI = getEnv('MONGODB_URI')
>>>>>>> origin/qa
let client: MongoClient | null = null
let db: Db | null = null

export const connectDB = async (): Promise<void> => {
  if (client === null) {
    try {
      client = new MongoClient(mongoURI, {
        serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true
        },
        maxPoolSize: 5,
<<<<<<< HEAD
        monitorCommands: getEnv(ENV.NODE_ENV) === 'DEV'
      })
      await client.connect()
      db = client.db(getEnv(ENV.DATABASE))
=======
        monitorCommands: getEnv('NODE_ENV') === 'DEV'
      })
      await client.connect()
      db = client.db(getEnv('DATABASE'))
>>>>>>> origin/qa
      const pingResult = await db.command({ ping: 1 })
      if (pingResult.ok !== 1) {
        throw new Error('🚫 Error pinging MongoDB')
      }
      console.log('🌿 Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      if (error instanceof Error) {
        console.error('🚫 Error connecting to MongoDB:', error.message)
      }
      process.exit(1)
    }
  }
}

export const getDB = (): Db => {
  if (db === null) {
    throw new Error(' 🚫 Not connected to MongoDB')
  }
  return db
}

export const closeDB = async (): Promise<void> => {
  if (client !== null) {
    await client.close()
    console.log('🌿 MongoDB connection closed')
  }
}
