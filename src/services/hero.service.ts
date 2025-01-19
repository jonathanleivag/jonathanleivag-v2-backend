import { WithId } from 'mongodb'
import { Hero } from '../type'
import { Collection } from '../enum'
import { getDB } from '../database'

const getHeros = async (): Promise<WithId<Hero>> => {
  try {
    const db = getDB()
    const heros = await db.collection<Hero>(Collection.HEROS).findOne()

    if (heros === null) {
      throw new Error('❌ Heros not found')
    }
    return heros
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
    }
    throw error
  }
}

export { getHeros }
