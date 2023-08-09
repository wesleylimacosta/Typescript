import { Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const ContaInfo = () => {
    return (
        <>
            <Text fontSize='2xl' fontWeight='bold'>
                Informações da conta
            </Text>
            <Link to="/conta/1">
                <Text fontSize='2xl' fontWeight='bold'>
                    Conta
                </Text>
            </Link>
        </>
    )
}

export default ContaInfo