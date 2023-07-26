import { Welcome } from "./Welcome";

describe('Welcome', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert;

    it('Deve exibir um alert com: "Boas vindas!" ', () => {
        Welcome()
        expect(mockAlert).toHaveBeenCalledWith('Boas vindas!')
    })
})
