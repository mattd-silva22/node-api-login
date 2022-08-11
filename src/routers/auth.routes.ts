import {Router} from "express";
import { AuthController } from "../api/auth/auth.controller";


const authRouter = Router()

const authController = new AuthController 

authRouter.post("/login" , authController.login)
authRouter.post("/register" , authController.register)

export {authRouter}