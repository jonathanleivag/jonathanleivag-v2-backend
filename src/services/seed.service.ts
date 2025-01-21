import { getDB } from '../database'
<<<<<<< HEAD
import { COLLECTION } from '../enum'
=======
import { Collection } from '../enum'
>>>>>>> origin/qa
import { aboutmes, heros } from '../seed'
import { ResWhitOutData } from '../type'

const deleteAll = async (): Promise<void> => {
  try {
<<<<<<< HEAD
    const hero = await getDB().collection(COLLECTION.HEROS).findOne()
    if (hero !== null) {
      await getDB().collection(COLLECTION.HEROS).deleteMany()
    }
    const about = await getDB().collection(COLLECTION.ABOUTMES).findOne()
    if (about !== null) {
      await getDB().collection(COLLECTION.ABOUTMES).deleteMany()
=======
    const hero = await getDB().collection(Collection.HEROS).findOne()
    if (hero !== null) {
      await getDB().collection(Collection.HEROS).deleteMany()
    }
    const about = await getDB().collection(Collection.ABOUTMES).findOne()
    if (about !== null) {
      await getDB().collection(Collection.ABOUTMES).deleteMany()
>>>>>>> origin/qa
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error deleting all data:', error.message)
    }
  }
}

const insertAll = async (): Promise<void> => {
  try {
<<<<<<< HEAD
    await getDB().collection(COLLECTION.HEROS).insertOne(heros)
    await getDB().collection(COLLECTION.ABOUTMES).insertOne(aboutmes)
=======
    await getDB().collection(Collection.HEROS).insertOne(heros)
    await getDB().collection(Collection.ABOUTMES).insertOne(aboutmes)
>>>>>>> origin/qa
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error inserting all data:', error.message)
    }
  }
}

export const insert = async (): Promise<ResWhitOutData> => {
  try {
    await deleteAll()
    await insertAll()
    return { message: '🚀 ~ jonathanleivag-v2-backend', status: 200, statusText: 'OK', error: null }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error inserting data:', error.message)
      return { message: '🚫 Error inserting data', status: 500, statusText: 'Internal Server Error', error: error.message }
    }
    return { message: '🚫 Error inserting data', status: 500, statusText: 'Internal Server Error', error: 'Internal Server Error' }
  }
}
