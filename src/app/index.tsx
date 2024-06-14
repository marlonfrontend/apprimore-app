import { Box } from '@/components'
import { ActivityIndicator } from 'react-native'

const StartPage = () => {
  return (
    <Box
      style={{ backgroundColor: '#c61525', flex: 1, justifyContent: 'center' }}
    >
      <ActivityIndicator size="large" color="#fff" />
    </Box>
  )
}

export default StartPage
