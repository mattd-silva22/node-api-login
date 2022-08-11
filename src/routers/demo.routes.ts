import {Router} from "express";
import {Request ,Response } from "express"



class DemoController{

    public hello(request:Request,response:Response) {
        return response.status(200).json(
            {
                message : "Olá mundo. Login api"
            }
        )
    }
}

const demoRouter = Router()
const demoController = new DemoController

demoRouter.get("/hello" , demoController.hello)

export {demoRouter}
