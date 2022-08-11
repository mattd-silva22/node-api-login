import { ServiceResponse } from "../utils/ServiceResponse"

export class AuthService{

    public async login():Promise<ServiceResponse> {
        
        const result:ServiceResponse = {
            sucess : false,
            httpCode: 400,
            message : "error on request body"
        }
        return result
    }

    public async register(){
        return 0
    }
}