import { getDB } from '../database.js'
import { COLLECTION } from '../enum.js'
import { aboutmesEn, aboutmesEs, headersEn, headersEs, herosEn, herosEs, navbarEn, navbarEs } from '../seed.js'
import { ResWhitOutData } from '../type.js'

const deleteAll = async (): Promise<void> => {
  try {
    console.log('🚀 ~ deleteAll ~ deleteAll')
    const hero = await getDB().collection(COLLECTION.HEROS).find().toArray()

    if (hero.length > 0) {
      await getDB().collection(COLLECTION.HEROS).deleteMany()
    }

    const about = await getDB().collection(COLLECTION.ABOUTMES).find().toArray()

    if (about.length > 0) {
      await getDB().collection(COLLECTION.ABOUTMES).deleteMany()
    }

    const header = await getDB().collection(COLLECTION.HEADERS).find().toArray()
    if (header.length > 0) {
      await getDB().collection(COLLECTION.HEADERS).deleteMany()
    }

    const navbar = await getDB().collection(COLLECTION.NAVBAR).find().toArray()
    if (navbar.length > 0) {
      await getDB().collection(COLLECTION.NAVBAR).deleteMany()
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error deleting all data:', error.message)
    }
  }
}

const insertAll = async (): Promise<void> => {
  try {
    console.log('🚀 ~ insertAll ~ insertAll')
    await getDB().collection(COLLECTION.HEROS).insertMany([herosEs, herosEn])
    await getDB().collection(COLLECTION.ABOUTMES).insertMany([aboutmesEs, aboutmesEn])
    await getDB().collection(COLLECTION.HEADERS).insertMany([headersEs, headersEn])
    await getDB().collection(COLLECTION.NAVBAR).insertMany([navbarEs, navbarEn])
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error inserting all data:', error.message)
    }
  }
}

export const insert = async (): Promise<ResWhitOutData> => {
  try {
    console.log('🚀 ~ insert ~ insert')
    await deleteAll()
    await insertAll()
    return { message: 'Data inserted successfully', status: 200, statusText: 'OK', error: null }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error inserting data:', error.message)
      return { message: '🚫 Error inserting data', status: 500, statusText: 'Internal Server Error', error: error.message }
    }
    return { message: '🚫 Error inserting data', status: 500, statusText: 'Internal Server Error', error: 'Internal Server Error' }
  }
}
