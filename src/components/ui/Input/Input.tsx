import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet, Animated } from 'react-native'
import { InputProps } from './Input.types'

export const Input = ({
  placeholder,
  label,
  onChangeText,
  startIcon,
  ...props
}: InputProps) => {
  const [text, setText] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const borderColor = useState(new Animated.Value(0))[0]
  const borderWidth = useState(new Animated.Value(1))[0]

  const handleChangeText = (newText: string) => {
    setText(newText)
    if (onChangeText) {
      onChangeText(newText)
    }
  }

  const handleFocus = () => {
    // setIsFocused(true)
    Animated.parallel([
      Animated.timing(borderColor, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(borderWidth, {
        toValue: 2,
        duration: 300,
        useNativeDriver: false
      })
    ]).start()
  }

  const handleBlur = () => {
    // setIsFocused(false)
    Animated.parallel([
      Animated.timing(borderColor, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false
      }),
      Animated.timing(borderWidth, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false
      })
    ]).start()
  }

  const borderColorInterpolation = borderColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ddd', '#000']
  })

  return (
    <View>
      <Animated.View
        style={[
          styles.input,
          { borderColor: borderColorInterpolation, borderWidth: borderWidth }
        ]}
      >
        {label && <Text style={styles.label}>{label}</Text>}
        <TextInput
          style={styles.inputText}
          placeholder={placeholder}
          value={text}
          selectionColor="#111"
          cursorColor="#111"
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#333',
    fontSize: 12,
    fontFamily: 'CerealMedium',
    marginTop: 2
  },
  input: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  inputText: {
    fontFamily: 'CerealMedium'
  }
})
