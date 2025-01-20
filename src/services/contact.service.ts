import { getDB } from '../database'
import { Contact, ContactOmit, Data, Res, ResWhitOutData } from '../type'
import { CreateEmailOptions, Resend } from 'resend'
import { getEnv } from '../utils/env.util'
import { html } from '../html'

export const getContact = async (): Promise<Res> => {
  try {
    console.log('🚀 ~ getContact ~ getContact')
    const db = getDB()
    const contacts = await db.collection<Contact>('contacts').find().toArray()
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
    const db = getDB()
    const { data: retrieve, error: errorRetrieve } = await resend.emails.get(data.id)
    if (errorRetrieve !== null) {
      console.error('🚀 ~ sendEmail ~ errorRetrieve:', errorRetrieve)
    }

    if (retrieve !== null) {
      const emailData = retrieve as unknown as Data | null
      await db.collection<ContactOmit>('contacts').insertOne({
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
    const resend = new Resend(getEnv('KEY_RESEND'))
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
    await email(getEnv('NAME'), content, { from: getEnv('FROM'), to: getEnv('TO'), subject: getEnv('SUBJECT'), html }, true)

    await email(name, getEnv('CONTENT_RESEND'), { from: getEnv('FROM'), to: emailTO, subject: getEnv('SUBJECT'), html }, false)

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
