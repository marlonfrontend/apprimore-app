import { View as TView, type ViewProps } from 'react-native'

import { useThemeColor } from '@/hooks/useThemeColor'

export type ThemedViewProps = ViewProps & {
  lightColor?: string
  darkColor?: string
}

export const View = ({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) => {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  )

  return <TView style={[{ backgroundColor }, style]} {...otherProps} />
}
