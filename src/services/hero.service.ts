import { Hero, Lang, Res } from '../type.js'
import { COLLECTION } from '../enum.js'
import { getDB } from '../database.js'

const getHeros = async (lang: Lang): Promise<Res<Hero>> => {
  try {
    console.log('🚀 ~ getHeros ~ getHeros')
    if (lang === null) {
      return {
        data: null,
        error: 'No se especificó el idioma',
        status: 400,
        statusText: 'Bad Request'
      }
    }

    if (lang !== 'es' && lang !== 'en') {
      return {
        data: null,
        error: 'El idioma no es válido (es o en)',
        status: 400,
        statusText: 'Bad Request'
      }
    }

    const heroDoc = await getDB().collection<Hero>(COLLECTION.HEROS).findOne({ lan: lang })

    if (heroDoc === null) {
      return {
        data: null,
        error: 'No se encontraron heroes',
        status: 404,
        statusText: 'Not Found'
      }
    }
    const hero: Hero = {
      _id: heroDoc._id,
      title: heroDoc.title,
      description: heroDoc.description,
      image: heroDoc.image,
      createdAt: heroDoc.createdAt,
      updatedAt: heroDoc.updatedAt
    }
    return {
      data: hero,
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
