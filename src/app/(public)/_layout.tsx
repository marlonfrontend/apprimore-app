import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'
import { XCircle } from 'lucide-react-native'
import { useColorScheme } from 'react-native'
import { ToastProvider } from 'react-native-toast-notifications'

export { ErrorBoundary } from 'expo-router'

const PublicLayout = () => {
  const colorScheme = useColorScheme()

  const [interLoaded, interError] = useFonts({
    CerealRegular: require('../../assets/fonts/Cereal-Regular.ttf'),
    CerealMedium: require('../../assets/fonts/Cereal-Medium.ttf'),
    CerealBold: require('../../assets/fonts/Cereal-Bold.ttf')
  })

  if (!interLoaded && !interError) {
    return null
  }

  return (
    <ToastProvider dangerIcon={<XCircle width={20} height={20} color="#fff" />}>
      <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShadowVisible: false }}>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="pincode" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </ToastProvider>
  )
}

export default PublicLayout
