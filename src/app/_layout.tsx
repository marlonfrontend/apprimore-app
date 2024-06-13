import { SplashScreen, Slot, useRouter } from 'expo-router'
import { useEffect } from 'react'

import { useStore } from '@/stores'
export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

const InitialLayout = () => {
  const { token } = useStore()
  const router = useRouter()

  useEffect(() => {
    SplashScreen.hideAsync()

    if (!token) {
      router.replace('/login')
    } else if (token) {
      router.replace('/home')
    }
  })

  return <Slot />
}

const RootLayout = () => {
  return <InitialLayout />
}

export default RootLayout
