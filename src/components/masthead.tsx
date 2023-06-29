

import React from 'react'
import { ImageSourcePropType } from 'react-native'
import { Box, VStack, Heading, Image,Center } from 'native-base'

interface Props {
  title: string
  image: ImageSourcePropType
  children: React.ReactNode
}

const Masthead = ({ title, image, children }: Props) => {
  return (
    <VStack bg="primary.800" height="300px" position="relative">
      {children}
      <Box flex={1} justifyContent="flex-end">
        <Heading color="gray.200" p={6} size="xl">
          {/* {title} */}
        </Heading>
      </Box>
      <Image
        source={image}
        alt="masthead image"
        resizeMode="contain"
        width="85%"
        height="120%"
        position="absolute"
        zIndex={-1}
        marginLeft="7"
      />
    </VStack>
  );
};





export default Masthead