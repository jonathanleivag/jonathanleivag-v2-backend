import { Hero, Res } from '../type'
<<<<<<< HEAD
import { COLLECTION } from '../enum'
=======
import { Collection } from '../enum'
>>>>>>> origin/qa
import { getDB } from '../database'

const getHeros = async (): Promise<Res> => {
  try {
<<<<<<< HEAD
    const heros = await getDB().collection<Hero>(COLLECTION.HEROS).find().toArray()
=======
    const heros = await getDB().collection<Hero>(Collection.HEROS).find().toArray()
>>>>>>> origin/qa

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
