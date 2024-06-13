import { View, Text } from '@/components'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    position: 'relative',
    justifyContent: 'flex-end'
  },
})

export default Home
