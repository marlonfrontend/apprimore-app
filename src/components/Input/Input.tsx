import React, { useState } from 'react'
import { View, TextInput, Text, StyleSheet } from 'react-native'

import { InputProps } from './Input.types'

export const Input = ({
  placeholder,
  label,
  onChangeText,
  startIcon,
  ...props
}: InputProps) => {
  const [text, setText] = useState('')

  const handleChangeText = (newText: string) => {
    setText(newText)
    if (onChangeText) {
      onChangeText(newText)
    }
  }

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={{ position: 'relative' }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 1,
            left: 13,
            width: 20,
            top: 12
          }}
        >
          {startIcon}
        </View>
        <TextInput
          style={[styles.input, !!startIcon && { paddingLeft: 45 }]}
          placeholder={placeholder}
          value={text}
          selectionColor="#999"
          cursorColor="#999"
          onChangeText={handleChangeText}
          {...props}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  label: {
    color: '#333',
    fontFamily: 'CerealMedium',
    marginBottom: 4
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    fontFamily: 'CerealRegular',
    borderRadius: 5,
    height: 45,
    padding: 10
  }
})
