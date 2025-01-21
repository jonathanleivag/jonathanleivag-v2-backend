import { getDB } from '../database'
<<<<<<< HEAD
import { COLLECTION } from '../enum'
=======
import { Collection } from '../enum'
>>>>>>> origin/qa
import { AboutMes, Res } from '../type'

export const getAboutMe = async (): Promise<Res> => {
  console.log('🚀 ~ getAboutMe ~ getAboutMe')
  try {
<<<<<<< HEAD
    const aboutMe = await getDB().collection<AboutMes>(COLLECTION.ABOUTMES).find().toArray()
=======
    const aboutMe = await getDB().collection<AboutMes>(Collection.ABOUTMES).find().toArray()
>>>>>>> origin/qa

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
