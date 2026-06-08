import { create } from 'zustand'
import { auth, db } from '../config/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'

export const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  // تسجيل مستخدم جديد
  register: async (email, password, name) => {
    try {
      set({ loading: true, error: null })
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      set({
        user: userCredential.user,
        loading: false,
      })
      return userCredential.user
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  // تسجيل دخول
  login: async (email, password) => {
    try {
      set({ loading: true, error: null })
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      set({
        user: userCredential.user,
        loading: false,
      })
      return userCredential.user
    } catch (error) {
      set({ error: error.message, loading: false })
      throw error
    }
  },

  // تسجيل خروج
  logout: async () => {
    try {
      await signOut(auth)
      set({ user: null })
    } catch (error) {
      set({ error: error.message })
    }
  },

  // تحديث بيانات المستخدم
  setUser: (user) => set({ user }),
}))

// App Settings Store
export const useSettingsStore = create((set) => ({
  theme: localStorage.getItem('theme') || 'light',
  language: localStorage.getItem('language') || 'ar',
  notifications: JSON.parse(localStorage.getItem('notifications') || 'true'),
  soundEnabled: JSON.parse(localStorage.getItem('soundEnabled') || 'true'),

  setTheme: (theme) => {
    localStorage.setItem('theme', theme)
    set({ theme })
  },

  setLanguage: (language) => {
    localStorage.setItem('language', language)
    set({ language })
  },

  setNotifications: (enabled) => {
    localStorage.setItem('notifications', JSON.stringify(enabled))
    set({ notifications: enabled })
  },

  setSoundEnabled: (enabled) => {
    localStorage.setItem('soundEnabled', JSON.stringify(enabled))
    set({ soundEnabled: enabled })
  },
}))

// Prayer Times Store
export const usePrayerTimesStore = create((set) => ({
  prayerTimes: null,
  loading: false,
  error: null,

  setPrayerTimes: (times) => set({ prayerTimes: times }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}))

// User Favorites Store
export const useFavoritesStore = create((set) => ({
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),

  addFavorite: (item) =>
    set((state) => {
      const updated = [...state.favorites, item]
      localStorage.setItem('favorites', JSON.stringify(updated))
      return { favorites: updated }
    }),

  removeFavorite: (id) =>
    set((state) => {
      const updated = state.favorites.filter((fav) => fav.id !== id)
      localStorage.setItem('favorites', JSON.stringify(updated))
      return { favorites: updated }
    }),

  isFavorite: (id) => (state) => state.favorites.some((fav) => fav.id === id),
}))
