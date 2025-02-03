import { getDB } from '../database.js'
import { COLLECTION } from '../enum.js'
import { Lang, Navbar, Res } from '../type.js'

export const getNavar = async (lang: Lang): Promise<Res<Navbar>> => {
  try {
    console.log('🚀 ~ getNavar ~ getNavar')
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

    const navbarDoc = await getDB().collection<Navbar>(COLLECTION.NAVBAR).findOne({ lan: lang })

    if (navbarDoc === null) {
      return {
        data: null,
        error: 'No se encontró el navbar',
        status: 404,
        statusText: 'Not Found'
      }
    }
    const navbar: Navbar = {
      _id: navbarDoc._id,
      lan: navbarDoc.lan,
      nav: navbarDoc.nav,
      image: navbarDoc.image
    }
    return {
      data: navbar,
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
