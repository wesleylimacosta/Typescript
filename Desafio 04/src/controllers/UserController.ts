import { Request, Response } from 'express'
import { UserService } from '../services/UserService'

export class UserController {
    userService: UserService

    constructor(
        userService = new UserService()
    ){
        this.userService = userService
    }

   public createUser = (request: Request, response: Response): Response => {
        const user = request.body

        if(!user.name || !user.email){
            return response.status(400).json({ message: 'Bad request! Name e email obrigatório'})
        }

        this.userService.createUser(user.name, user.email)
        return response.status(201).json({ message: 'Usuário criado'})
    }

    public getAllUsers = (request: Request, response: Response) => {
        const users = this.userService.getAllUsers()
        return response.status(200).json( users )
    } 

    deleteUser = (request: Request, response: Response) =>{
        const user = request.body;
        console.log('Deletando user...',user);
        return response.status(200).json({message: 'Usuario deletado'}); 
    }
}
