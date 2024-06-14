import { Link, Stack } from 'expo-router'
import { StyleSheet } from 'react-native'
import { Box, Typography } from '@/components'

const NotFoundScreen = () => {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Box style={styles.container}>
        <Typography type="title">This screen doesn't exist.</Typography>
        <Link href="/" style={styles.link}>
          <Typography type="link">Go to home screen!</Typography>
        </Link>
      </Box>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  link: {
    marginTop: 15,
    paddingVertical: 15
  }
})

export default NotFoundScreen
