import {Request ,Response } from "express"
import { AuthService } from "./auth.service"

const authService = new AuthService

export class AuthController {

    public async login(request:Request , response:Response) {
       const result = await authService.login()
       return response.status(result.httpCode).json(result.message).send()
    }

    public async register(request:Request , response:Response) {
        const {name , email , password } = request.body
        await authService.register()
        
        const result = await authService.login()
        return response.status(result.httpCode).json(result.message).send()
    }
}
