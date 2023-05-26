import { useState } from 'react'
import { useFonts } from 'expo-font'
import { TamaguiProvider, XStack, YStack, Theme, Input } from 'tamagui'

import config from './tamagui.config'

import { User } from './src/components/User'
import { ChangeTheme } from './src/components/ChangeTheme'
import { Button } from './src/components/Button'
import { StatusBar } from 'react-native'

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false)

    const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={isDarkTheme ? 'dark' : 'light'}>
        <YStack f={1} bg="$background" p="$6" pt="$8">
        <XStack jc="space-between" ai="center">
          <User />
          <ChangeTheme onCheckedChange={setIsDarkTheme} />
        </XStack>

        <XStack space="$2" mt="$6">
          <Input f={1} w="$5" h="$5" placeholder="Buscar" focusStyle={{ bw: 2, boc: '$blue10' }} />
          <Button background='outline' />
        </XStack>
      </YStack>
      </Theme>
    </TamaguiProvider>
  )
}

