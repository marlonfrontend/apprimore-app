import { ActivityIndicator, View } from 'react-native'

const StartPage = () => {
  return (
    <View
      style={{ backgroundColor: '#c61525', flex: 1, justifyContent: 'center' }}
    >
      <ActivityIndicator size="large" color="#fff" />
    </View>
  )
}

export default StartPage
