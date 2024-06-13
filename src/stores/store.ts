import create from 'zustand'
import { devtools, persist, createJSONStorage } from 'zustand/middleware'

import { AuthState, createAuthStore } from './auth'

type StoreState = AuthState

export const useStore = create<StoreState>()(
  persist(
    devtools((...a) => ({
      ...createAuthStore(...a)
    })),
    {
      name: 'store',
      storage: createJSONStorage(() => sessionStorage)
    }
  )
)
