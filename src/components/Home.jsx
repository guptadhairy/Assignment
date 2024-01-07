import { HStack, Heading, VStack } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import Comp1 from './Comp1'

const Home = () => {
       return (
              <HStack>
                     <VStack width={"7%"}>
                            <Nav />
                     </VStack>
                     <Comp1 />
                     <VStack width={"50%"}>
                            <Heading>Retirement income</Heading>
                     </VStack>
                     <VStack width={"20%"}>
                            <Heading>Retirement strategy</Heading>
                     </VStack>
              </HStack>


       )
}

export default Home
