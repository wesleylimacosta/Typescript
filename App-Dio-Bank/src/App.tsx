import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



//Componentes
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext';
import Mainroutes from './routes';




function App() {

  const [value, setValue] = useState(0);
  const [otherValue, setOtherValue] = useState(1);

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <Mainroutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>

  );
}

export default App;
