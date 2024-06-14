import { Box, Typography, Input } from '@/components'
import { StyleSheet, TouchableOpacity } from 'react-native'

const Home = () => {
  return (
    <Box style={styles.container}>
      <Box style={{ marginBottom: 20, alignItems: 'center' }}>
        <Typography type="subtitle">Login</Typography>
      </Box>
      <Box style={{ gap: 10 }}>
        <Input label="Login" onChangeText={() => console.log()} />
        <Input
          label="Senha"
          secureTextEntry
          onChangeText={() => console.log()}
        />
        <TouchableOpacity style={styles.btn}>
          <Typography style={styles.btnText}>Login</Typography>
        </TouchableOpacity>
      </Box>
    </Box>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end'
  },
  btn: {
    backgroundColor: '#c61525',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
})

export default Home
