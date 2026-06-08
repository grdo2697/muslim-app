export const COLLECTIONS = {
  USERS: 'users',
  PRAYER_TIMES: 'prayerTimes',
  QURAN: 'quran',
  AZKAR: 'azkar',
  DONATIONS: 'donations',
  OCCASIONS: 'occasions',
}

export const UserModel = {
  uid: 'string',
  email: 'string',
  name: 'string',
  createdAt: 'timestamp',
  settings: {
    theme: 'string',
    language: 'string',
  },
}

export default { COLLECTIONS, UserModel }