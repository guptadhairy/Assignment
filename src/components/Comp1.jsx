import { HStack, Heading, VStack, Text, Button } from '@chakra-ui/react'
import React from 'react'
import profile from "../assets/lms.jpg"
import "../styles/comp1.css"
import "../styles/comp1.css";

const Comp1 = () => {
       return (
              <VStack display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} width={"23%"} className='mike'>
                     <HStack gap={"20px"}>
                            <img className='profile' src={profile} alt='profile' />
                            <VStack>
                                   <Heading>Hi Mike,</Heading>
                                   <Text ml={"-28px"} mt={"-10px"}>welcome back</Text>
                            </VStack>
                     </HStack>
                     <Heading display={"flex"} alignItems={"flex-start"} justifyContent={"flex-start"} fontSize={"1.3rem"}>Today</Heading>
                     <Heading>$19,892</Heading>
                     <Text>Account Balance</Text>
                     <Heading fontSize={"1.5rem"}>$4,000</Heading>
                     <Text>Year-to-Date Contributions</Text>
                     <Heading fontSize={"1.5rem"}>$1,892</Heading>
                     <Text>Total Interest</Text>
                     <Button color={"white"} bgColor={"blue.600"}>I want to</Button>
                     <Heading fontSize={"1.1rem"}>Recent Transactions</Heading>
                     <Text>2020-08-07</Text>
                     <Text>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr />
                     <Text>2020-07-21</Text>
                     <Text>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr />
                     <Text>2020-07-16</Text>
                     <Text>Withdrawal Transfer to Bank-XXX11</Text>
                     <hr />
              </VStack>
       );
};

export default Comp1;
