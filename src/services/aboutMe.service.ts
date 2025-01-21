import { getDB } from '../database'
import { Collection } from '../enum'
import { AboutMes, Res } from '../type'

export const getAboutMe = async (): Promise<Res> => {
  console.log('🚀 ~ getAboutMe ~ getAboutMe')
  try {
    const aboutMe = await getDB().collection<AboutMes>(Collection.ABOUTMES).find().toArray()

    if (aboutMe === null) {
      return {
        data: null,
        error: 'No se encontraron aboutMe',
        status: 404,
        statusText: 'Not Found'
      }
    }

    return {
      data: aboutMe,
      error: null,
      status: 200,
      statusText: 'OK'
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    return {
      data: null,
      error: null,
      status: 500,
      statusText: 'Internal Server Error'
    }
  }
}
