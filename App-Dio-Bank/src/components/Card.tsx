import { useState} from 'react';

import {Box} from '@chakra-ui/react'

import {Welcome} from '../services/Welcome'

import { login } from '../services/login';


export const Card = ({children} : any) => {
  const [email,setEmail] = useState<string>('');
  
  return(
    <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' mt={5} >
            {children}
          </Box>
  )
}