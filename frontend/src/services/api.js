import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Prayer Times Service
export const prayerTimesService = {
  getPrayerTimes: (country, city) =>
    api.get(`/prayer-times/${country}/${city}`),
  getPrayerTimesMonth: (country, city, month, year) =>
    api.get(`/prayer-times/month/${country}/${city}`, { params: { month, year } }),
  getPrayerTimesByCoordinates: (lat, lng) =>
    api.get(`/prayer-times/coordinates/${lat}/${lng}`),
}

// Quran Service
export const quranService = {
  getSurahs: () => api.get('/quran/surahs'),
  getSurah: (id) => api.get(`/quran/surah/${id}`),
  searchQuran: (query) => api.get('/quran/search', { params: { q: query } }),
  getTafsir: (surah, ayah) => api.get(`/quran/tafsir/${surah}/${ayah}`),
}

// Azkar Service
export const azkarService = {
  getCategories: () => api.get('/azkar/categories'),
  getCategory: (id) => api.get(`/azkar/category/${id}`),
  addFavorite: (userId, azkarId) =>
    api.post('/azkar/favorite', { userId, azkarId }),
}

// Users Service
export const usersService = {
  register: (email, password, name) =>
    api.post('/users/register', { email, password, name }),
  login: (email, password) =>
    api.post('/users/login', { email, password }),
  getUser: (uid) => api.get(`/users/${uid}`),
  updateUser: (uid, data) => api.put(`/users/${uid}`, data),
}

// Donations Service
export const donationsService = {
  getCategories: () => api.get('/donations/categories'),
  donate: (data) => api.post('/donations/donate', data),
  getUserDonations: (uid) => api.get(`/donations/user/${uid}`),
  getStats: () => api.get('/donations/stats'),
}

// Occasions Service
export const occasionsService = {
  getAll: () => api.get('/occasions'),
  getById: (id) => api.get(`/occasions/${id}`),
}

// Hadith Service
export const hadithService = {
  getCollections: () => api.get('/hadith/collections'),
  search: (query) => api.get('/hadith/search', { params: { q: query } }),
}

export default api
