/* -------------------------------------------------------------------------- */
/*                                  Response                                  */
/* -------------------------------------------------------------------------- */
export interface Res<T> {
  data: T | null
  error: string | null
  status: number
  statusText: string
}

type ResWhitOutDataOmit = Omit<Res, 'data'>

export interface ResWhitOutData extends ResWhitOutDataOmit {
  message: string
}

/* -------------------------------------------------------------------------- */
/*                                request Email                               */
/* -------------------------------------------------------------------------- */
export interface EmailBody {
  name: string
  email: string
  content: string
}

/* -------------------------------------------------------------------------- */
/*                                    HERO                                    */
/* -------------------------------------------------------------------------- */
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

/* -------------------------------------------------------------------------- */
/*                                   contact                                  */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*                                  About Me                                  */
/* -------------------------------------------------------------------------- */

export interface AboutMes {
  _id: string
  es: EsAboutMe
  en: EnAboutMe
  image: string
  createdAt: Date
  updatedAt: Date
}

export type AboutMesPick = Pick<AboutMes, 'image'>

export interface AboutMesSeed extends AboutMesPick {
  es: EsAboutMeSeed
  en: AboutMesSeed
}

export type EnAboutMeOmit = Omit<EnAboutMe, '_id'>
export interface EsAboutMeSeed extends EnAboutMeOmit { }
export type CourseOmit = Omit<Course, '_id'>
export type EducationElementOmit = Omit<EducationElement, '_id'>
export type PurpleKnowledgeOmit = Omit<PurpleKnowledge, '_id'>
export type FluffyKnowledgeOmit = Omit<FluffyKnowledge, '_id'>
export type SkillOmit = Omit<Skill, '_id'>

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

/* -------------------------------------------------------------------------- */
/*                                   Project                                  */
/* -------------------------------------------------------------------------- */
export interface PinnedRepo {
  name: string
  description: string | null
  url: string
  stargazerCount: number
  forkCount: number
}

export interface IProject {
  pinned: PinnedRepo[]
  readme: string
  info: RestEndpointMethodTypes['users']['getAuthenticated']['response']['data']
}
