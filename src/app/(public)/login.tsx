import { Box, LoginForm } from '@/components'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <Box style={styles.container}>
      <LoginForm />
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end'
  }
})

export default Home
