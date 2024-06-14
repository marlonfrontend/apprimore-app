import React, { PropsWithChildren } from 'react'
import { View, StyleSheet } from 'react-native'
import { ContainerProps } from './Container.types'

export const Container = ({
  children,
  justifyContent = 'center'
}: PropsWithChildren<ContainerProps>) => {
  return <View style={[styles.container, { justifyContent }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 16
  }
})
