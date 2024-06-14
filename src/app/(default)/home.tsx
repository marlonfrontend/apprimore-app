import { Box, Typography } from '@/components'
import { StyleSheet } from 'react-native'

const Home = () => {
  return (
    <Box style={styles.container}>
      <Typography>Home</Typography>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    position: 'relative',
    justifyContent: 'flex-end'
  }
})

export default Home
