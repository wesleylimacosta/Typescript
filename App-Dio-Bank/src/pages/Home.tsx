import { Box, Center, Input } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { Card } from '../components/Card'

import { Welcome } from '../services/Welcome'

import DButton from '../components/DButton';

import { login } from '../services/login';
import { Navigate, useNavigate } from 'react-router-dom';
import { AppContext } from '../components/AppContext';

const Home = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();
  const {setIsLoggedIn} = useContext(AppContext);

  const validateUser = async (email: string) => {
    const loggedIn = await login(email);

    if (!loggedIn) {
     return alert('Email ou senha inválidos')
    }

    setIsLoggedIn(true);
    navigate('/conta/1');
  }

  return (
    <Box padding="25px">
      <Card>
        <Center>
          <h1>Faça o login</h1>
        </Center>
        <Input placeholder="email" value={email} onChange={(e) => {
          setEmail(e.target.value);
        }} />
        <Input placeholder="password" type="password" />
        <Center>
          <DButton name="Logar" onClick={ () => validateUser(email)} />
        </Center>
      </Card>
    </Box>
  )
}

export default Home