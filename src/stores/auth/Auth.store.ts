import { StateCreator } from 'zustand'

import { AuthState } from './Auth.types'

export const createAuthStore: StateCreator<AuthState> = (set) => ({
  token: '',
  setToken: (newToken) => set({ token: newToken })
})
