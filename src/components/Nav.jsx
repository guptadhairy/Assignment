import { VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "../assets/logo.png";
import "../styles/nav.css";
import {FaSearch, FaAddressCard, FaRegListAlt, FaRegUser, FaRegBell, FaMobile} from "react-icons/fa";
import { FiHome } from "react-icons/fi";



const Nav = () => {
  return (
    <div>
      <VStack ml={'-20px'} mt={"20px"} display={'flex'} justifyContent={"flex-start"} alignItems={"flex-start"}>
       <VStack gap={"20px"}>
       <img className='logo' src={logo} alt='logo' />
       <FaSearch fontSize={"20px"}/>
       </VStack>
       <VStack mt={"50px"} gap={"20px"}>
       <FiHome fontSize={"20px"} />
       <FaAddressCard fontSize={"20px"} />
       <FaRegListAlt fontSize={"20px"} />
       <FaRegUser fontSize={"20px"} />
       </VStack>
       <VStack gap={"20px"} mt={'210px'}>
       <FaRegBell fontSize={"20px"} />
       <FaMobile fontSize={"20px"} />
       </VStack>
      </VStack>
    </div>
  )
}

export default Nav
