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

const DefaultLayout = () => {
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
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="cce" />
        </Stack>
      </ThemeProvider>
    </ToastProvider>
  )
}

export default DefaultLayout
