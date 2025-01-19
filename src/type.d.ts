
export type Env = 'PORT' | 'MONGODB_URI' | 'DATABASE' | 'URI' | 'NODE_ENV'

export interface Hero {
  _id: string
  es: En
  en: En
  image: string
  createdAt: Date
  updatedAt: Date
}

export interface En {
  translation: Translation
  _id: string
}

export interface Translation {
  title: string
  description: string
}
