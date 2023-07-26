import { Layout } from './components/Layout';

import { Card } from './components/Card';

function App() {
  return (

    <Layout>
     <Card id={1} paragraph='Desafio 2' details='Segundo desafio do curso de typescript da Dio' />
    </Layout>
  );
}

export default App;
