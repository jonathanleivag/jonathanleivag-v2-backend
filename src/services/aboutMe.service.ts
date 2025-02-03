import { getDB } from '../database'
import { COLLECTION } from '../enum'
import { AboutMes, Lang, Res } from '../type'

export const getAboutMe = async (lang: Lang): Promise<Res<AboutMes>> => {
  console.log('🚀 ~ getAboutMe ~ getAboutMe')
  try {
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

    const aboutMe = await getDB().collection<AboutMes>(COLLECTION.ABOUTMES).findOne({ lan: lang })

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
