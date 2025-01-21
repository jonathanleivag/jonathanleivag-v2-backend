
export type Env = 'PORT' | 'MONGODB_URI' | 'DATABASE' | 'URI' | 'NODE_ENV' | 'KEY_RESEND' | 'CONTENT_RESEND' | 'NAME' | 'FROM' | 'TO' | 'SUBJECT'

export interface Res {
  data: Object | null
  error: string | null
  status: number
  statusText: string
}

export type ResWhitOutDataOmit = Omit<Res, 'data'>

export interface ResWhitOutData extends ResWhitOutDataOmit {
  message: string
}

export interface Hero {
  _id: string
  es: Es
  en: En
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface En {
  translation: Translation
  _id: string
}

export interface ES extends En { }

export interface Translation {
  title: string
  description: string
}

type HeroSeedPick = Pick<Hero, 'image'>
type EnOmit = Omit<En, '_id'>
type EsSeed = EnOmit

export interface HeroSeed extends HeroSeedPick {
  es: EsSeed
  en: EnOmit
}

export interface Contact {
  _id: string
  email: Email
  createdAt: Date
  updatedAt: Date
}

export type ContactOmit = Omit<Contact, '_id'>

export interface Email {
  data: Data | null
  error: any | null
}

export interface Data {
  object: string
  id: string
  to: string[]
  from: string
  created_at: string
  subject: string
  bcc: null
  cc: null
  reply_to: null
  last_event: null
  html: string
  text: null
  scheduled_at: null
}

type ContactEmailOmit = Omit<Email, 'data'>
type ContactDataOmit = Omit<Data, 'id'>

export interface ContactEmail extends ContactEmailOmit {
  data: ContactDataOmit
}

export interface ContactSeed {
  email: ContactEmail
}

export interface EmailBody {
  name: string
  email: string
  content: string
}

export interface AboutMes {
  _id: string
  es: EsAboutMe
  en: EnAboutMe
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface EnAboutMe {
  translation: TranslationAboutMe
  _id: string
}

export interface EsAboutMe extends EnAboutMe { }

export interface TranslationAboutMe {
  title: string
  description: string
  education: TranslationEducation
  skills: Skills
  interests: Interests
  knowledge: TranslationKnowledge
  courses: Course[]
}

export interface Course {
  name: string
  content: string
  _id: string
}

export interface TranslationEducation {
  title: string
  education: EducationElement[]
}

export interface EducationElement {
  name: string
  degree: string
  establishment: string
  dateStart: string
  dateEnd: string
  _id: string
}

export interface Interests {
  title: string
  interests: string[]
}

export interface TranslationKnowledge {
  title: string
  knowledge: PurpleKnowledge[]
}

export interface PurpleKnowledge {
  title: string
  knowledge: FluffyKnowledge[]
  _id: string
}

export interface FluffyKnowledge {
  language: string
  icon: string
  url: string
  _id: string
}

export interface Skills {
  title: string
  skills: Skill[]
}

export interface Skill {
  title: string
  content: string
  _id: string
}
