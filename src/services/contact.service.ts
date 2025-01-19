import { WithId } from 'mongodb'
import { getDB } from '../database'
import { Contact } from '../type'

export const getContact = async (): Promise<WithId<Contact>> => {
  try {
    const db = getDB()
    const contacts = await db.collection<Contact>('contacts').findOne()
    if (contacts == null) {
      throw new Error('Contact not found')
    }
    console.log('🌿 Contact found:', contacts)
    return contacts
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message)
    }
    throw error
  }
}
