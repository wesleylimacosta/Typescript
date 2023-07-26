import {
  Center,
  ChakraProvider,
  Input,
  Box
} from '@chakra-ui/react'

import {Welcome} from '../services/Welcome'
import Button from './Button/Button';

interface ICard {
  id: number,
  paragraph: string,
  details: string
}


export const Card = ({ id, paragraph, details }: ICard) => {
  return(
    <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
      <h1>Card {id}</h1>
      <p>{paragraph}</p>
      <p>{details}</p>
      <hr />
      <br />
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px' >
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder="email" />
            <Input placeholder="password" type="password" />
            <Center>
              <Button name="Logar" onClick={Welcome} />

            </Center>
          </Box>
        </Box>
      </ChakraProvider>
  )
}