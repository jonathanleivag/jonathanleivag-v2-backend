import { getDB } from '../database.js'
import { COLLECTION } from '../enum.js'
import { Res, ResSocial } from '../type.js'

export const getSocial = async (): Promise<Res<ResSocial>> => {
  console.log('🚀 ~ getSocial ~ getSocial')
  try {
    const socials = await getDB()
      .collection<ResSocial>(COLLECTION.SOCIAL)
      .findOne()
    if (socials !== null) {
      return {
        data: socials,
        error: null,
        status: 200,
        statusText: 'ok'
      }
    }

    return {
      data: null,
      error: 'No se encontraron socials',
      status: 404,
      statusText: 'Not Found'
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error getting social:', error.message)
      return {
        data: null,
        error: error.message,
        status: 500,
        statusText: 'Internal Server Error'
      }
    }
    return {
      data: null,
      error: null,
      status: 500,
      statusText: 'Internal Server Error'
    }
  }
}
