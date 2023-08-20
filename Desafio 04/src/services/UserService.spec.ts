import { response } from "express";
import { UserService } from "./UserService";

jest.mock('../repositories/UserRepository')
jest.mock('../database',()=>{
    initialize:jest.fn();
})

const mockUserRepository = require ('../repositories/UserRepository')

describe('UserService', () => {
        const userService = new UserService(mockUserRepository);
  
    it('Deve adicionar um novo usuário', async() => {
        mockUserRepository.createUser = jest.fn().mockImplementation(() => Promise.resolve({
            id_user: '123',
            name: 'wes',
            email: 'wes@teste.com',
            password: '12345'
        }))
        await userService.createUser('wes', 'wes@test.com','12345');
        expect(mockUserRepository.createUser).toHaveBeenCalled()
        expect(response).toMatchObject(
            {
                id_user: '123',
                name: 'wes',
                email: 'wes@teste.com',
                password: '12345'
            
            })
    })
})
