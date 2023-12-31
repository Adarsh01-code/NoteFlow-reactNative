import React, { useCallback } from 'react'
import {
  HStack,
  VStack,
  Center,
  Avatar,
  Heading,
  IconButton,
  useColorModeValue
} from 'native-base'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { View,Image } from 'react-native';
import AnimatedColorBox from './animated-color-box'
import ThemeToggle from './theme-toggle'
import { Feather } from '@expo/vector-icons'
import MenuButton from './menu-button'
import { Ionicons } from '@expo/vector-icons';
import { Icon } from 'native-base';



const Sidebar = (props: DrawerContentComponentProps) => {
  const { state, navigation } = props
  const currentRoute = state.routeNames[state.index]

  const handlePressBackButton = useCallback(() => {
    navigation.closeDrawer()
  }, [navigation])
  const handlePressMenuMain = useCallback(() => {
    navigation.navigate('Main')
  }, [navigation])
  const handlePressMenuAbout = useCallback(() => {
    navigation.navigate('About')
  }, [navigation])

  return (
    <AnimatedColorBox
      safeArea
      flex={1}
      bg={useColorModeValue('blue.50', 'darkBlue.800')}
      p={7}
    >
      <VStack flex={1} space={2}>
        <HStack justifyContent="flex-end">
          <IconButton
            onPress={handlePressBackButton}
            borderRadius={100}
            variant="outline"
            borderColor={useColorModeValue('blue.300', 'darkBlue.700')}
            _icon={{
              as: Feather,
              name: 'chevron-left',
              size: 6,
              color: useColorModeValue('blue.800', 'darkBlue.700')
            }}
          />
        </HStack>
        

<View
  style={{
    width: '70%',
    height: '25%',
    // borderRadius: 100,
    overflow: 'hidden',
  }}
>
  <Image
    source={require('../assets/NfIcon.png')}
    style={{
      width: '85%',
      height: '130%',
      resizeMode: 'contain',
    }}
  />
</View>


        <Heading  size="xl">
          
        </Heading>
        <MenuButton
          active={currentRoute === 'Main'}
          onPress={handlePressMenuMain}
          icon="inbox"
        >
          Tasks
        </MenuButton>
        


        <MenuButton
          active={currentRoute === 'About'}
          onPress={handlePressMenuAbout}
          icon="inbox"
        >
          Notes
        </MenuButton>
      </VStack>
      <Center>
        <ThemeToggle />
      </Center>
    </AnimatedColorBox>
  )
}

export default Sidebar
