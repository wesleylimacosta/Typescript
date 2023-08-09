import { login } from "./login"


describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    
    const mockEmail = 'teste@gmail.com';
    it('Deve exibir um alert com boas vindas caso o email seja valido', async () => {
        const response = await login(mockEmail);
        expect(response).toBeTruthy();
    });
    it('Deve exibir um erro caso o email seja inválido',async() => {
        const response = await login('email@invalido.com')
        expect(response).toBeFalsy();
        
    });
});