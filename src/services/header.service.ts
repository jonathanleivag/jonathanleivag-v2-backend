import { getDB } from '../database'
import { COLLECTION } from '../enum'
import { Header, Lang, Res } from '../type'

export const getHeader = async (lang: Lang): Promise<Res<Header>> => {
  try {
    console.log('🚀 ~ getHeader ~ getHeader')
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

    const headerDoc = await getDB().collection(COLLECTION.HEADERS).findOne({ lan: lang })
    if (headerDoc !== null) {
      const header: Header = {
        _id: headerDoc._id,
        lan: headerDoc.len,
        title: headerDoc.title,
        name: headerDoc.name,
        subTitle: headerDoc.subTitle,
        buttonText: headerDoc.buttonText,
        imageUrl: headerDoc.imageUrl
      }
      return {
        data: header,
        error: null,
        status: 200,
        statusText: 'ok'
      }
    }
    return {
      data: null,
      error: 'No se encontró el header',
      status: 404,
      statusText: 'Not Found'
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('🚫 Error getting header:', error.message)
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
