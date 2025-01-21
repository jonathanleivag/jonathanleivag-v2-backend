import { getDB } from '../database'
import { Collection } from '../enum'
import { aboutmes, heros } from '../seed'
import { ResWhitOutData } from '../type'

const deleteAll = async (): Promise<void> => {
  try {
    const hero = await getDB().collection(Collection.HEROS).findOne()
    if (hero !== null) {
      await getDB().collection(Collection.HEROS).deleteMany()
    }
    const about = await getDB().collection(Collection.ABOUTMES).findOne()
    if (about !== null) {
      await getDB().collection(Collection.ABOUTMES).deleteMany()
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error deleting all data:', error.message)
    }
  }
}

const insertAll = async (): Promise<void> => {
  try {
    await getDB().collection(Collection.HEROS).insertOne(heros)
    await getDB().collection(Collection.ABOUTMES).insertOne(aboutmes)
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
