import {Router} from "express";
import { AuthController } from "../api/auth.controller";


const authRouter = Router()

const authController = new AuthController 

authRouter.post("/login" , authController.login)

export {authRouter}