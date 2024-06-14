import { Box, Typography, Input } from '@/components'
import { StyleSheet, TouchableOpacity } from 'react-native'

export const LoginForm = () => {
  return (
    <Box style={{ gap: 15 }}>
      <Input label="Login" onChangeText={() => console.log()} />
      <Input label="Senha" secureTextEntry onChangeText={() => console.log()} />
      <TouchableOpacity style={styles.btn}>
        <Typography style={styles.btnText}>Acessar</Typography>
      </TouchableOpacity>
    </Box>
  )
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#c61525',
    borderRadius: 4,
    padding: 12,
    alignItems: 'center'
  },
  btnText: {
    color: '#fff'
  }
})
