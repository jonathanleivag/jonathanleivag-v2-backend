
import { MongoClient, ServerApiVersion } from 'mongodb'
import { getEnv } from '../utils/env.util'

const uri = getEnv('MONGODB_URI')

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

const database = async (): Promise<void> => {
  try {
    await client.connect()
    await client.db(getEnv('database')).command({ ping: 1 })
    console.log('🌿 Pinged your deployment. You successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}

export default database
