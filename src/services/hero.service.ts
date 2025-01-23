import { Hero, Res } from '../type'
import { COLLECTION } from '../enum'
import { getDB } from '../database'

const getHeros = async (): Promise<Res> => {
  try {
    const heros = await getDB().collection<Hero>(COLLECTION.HEROS).find().toArray()

    if (heros === null) {
      return {
        data: null,
        error: 'No se encontraron heroes',
        status: 404,
        statusText: 'Not Found'
      }
    }
    return {
      data: heros,
      error: null,
      status: 200,
      statusText: 'OK'
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error)
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

export { getHeros }
