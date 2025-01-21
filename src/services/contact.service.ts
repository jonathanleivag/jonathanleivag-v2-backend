import { getDB } from '../database'
import { Contact, ContactOmit, Data, Res, ResWhitOutData } from '../type'
import { CreateEmailOptions, Resend } from 'resend'
import { getEnv } from '../utils/env.util'
import { html } from '../html'
<<<<<<< HEAD
import { COLLECTION, ENV } from '../enum'
=======
import { Collection } from '../enum'
>>>>>>> origin/qa

export const getContact = async (): Promise<Res> => {
  try {
    console.log('🚀 ~ getContact ~ getContact')
<<<<<<< HEAD
    const contacts = await getDB().collection<Contact>(COLLECTION.CONTACTS).find().toArray()
=======
    const contacts = await getDB().collection<Contact>(Collection.CONTACTS).find().toArray()
>>>>>>> origin/qa
    if (contacts == null) {
      throw new Error('Contact not found')
    }
    return {
      data: contacts,
      error: null,
      status: 200,
      statusText: 'OK'
    }
  } catch (error) {
    if (error instanceof Error) {
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

const insertEmail = async (resend: Resend, data: { id: string }): Promise<void> => {
  try {
    console.log('🚀 ~ sendEmail')
    const { data: retrieve, error: errorRetrieve } = await resend.emails.get(data.id)
    if (errorRetrieve !== null) {
      console.error('🚀 ~ sendEmail ~ errorRetrieve:', errorRetrieve)
    }

    if (retrieve !== null) {
      const emailData = retrieve as unknown as Data | null
<<<<<<< HEAD
      await getDB().collection<ContactOmit>(COLLECTION.CONTACTS).insertOne({
=======
      await getDB().collection<ContactOmit>(Collection.CONTACTS).insertOne({
>>>>>>> origin/qa
        email: {
          data: emailData,
          error: errorRetrieve
        },
        createdAt: new Date(),
        updatedAt: new Date()
      })
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}

const email = async (name: string, content: string, options: CreateEmailOptions, print: boolean = false): Promise<void> => {
  console.log('🚀 ~ email ~ email')
  try {
<<<<<<< HEAD
    const resend = new Resend(getEnv(ENV.KEY_RESEND))
=======
    const resend = new Resend(getEnv('KEY_RESEND'))
>>>>>>> origin/qa
    if (options.html == null) {
      throw new Error('HTML content is missing')
    }

    const { error, data } = await resend.emails.send({
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: options.html.replace('<<content>>', content).replace('<<name>>', name)
    })

    if (error !== null) {
      console.error('🚀 ~ sendEmail ~ error:', error)
    }

    if (data !== null && print) {
      await insertEmail(resend, data)
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    throw error
  }
}

export const sendEmail = async (name: string, content: string, emailTO: string): Promise<ResWhitOutData> => {
  console.log('🚀 ~ sendEmail ~ sendEmail')
  try {
<<<<<<< HEAD
    await email(getEnv(ENV.NAME), content, { from: getEnv(ENV.FROM), to: getEnv(ENV.TO), subject: getEnv(ENV.SUBJECT), html }, true)

    await email(name, getEnv(ENV.CONTENT_RESEND), { from: getEnv(ENV.FROM), to: emailTO, subject: getEnv(ENV.SUBJECT), html }, false)
=======
    await email(getEnv('NAME'), content, { from: getEnv('FROM'), to: getEnv('TO'), subject: getEnv('SUBJECT'), html }, true)

    await email(name, getEnv('CONTENT_RESEND'), { from: getEnv('FROM'), to: emailTO, subject: getEnv('SUBJECT'), html }, false)
>>>>>>> origin/qa

    return {
      error: null,
      status: 200,
      statusText: 'OK',
      message: 'Se ha enviado el correo con éxito.'
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
      return {
        error: error.message,
        status: 500,
        statusText: 'Internal Server Error',
        message: 'Error al enviar el correo'
      }
    }
    return {
      error: null,
      status: 500,
      statusText: 'Internal Server Error',
      message: 'Error al enviar el correo'
    }
  }
}
