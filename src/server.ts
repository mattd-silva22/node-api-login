import express from "express";
import mongoose, { connection } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import * as dotenv from 'dotenv';
import { env } from "process";
import { authRouter } from "./routers/auth.routes";
import { demoRouter } from "./routers/demo.routes";

dotenv.config();

const port = 3333 ;
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD 
const mongoUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bdzzv2c.mongodb.net/?retryWrites=true&w=majority`



export class Server {
    app: any;
    port: number;
    
    constructor(port) {
        this.app = express()
        this.port = port
    }

    public start():void {
        this.setupServer()
        this.app.listen(this.port)
    }

    private setupServer() {
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
        this.setupServerRouters()
        this.connectToDatabase()
    }
    
    private setupServerRouters(){
        this.app.use("/user" , authRouter)
        this.app.use("/demo",demoRouter)
    }

    private async connectToDatabase():Promise<void> {
        try{
            const db = await mongoose.connect(mongoUri)
            console.log("database conected:" , db.connection.db.databaseName)
        }
        catch(err) {
            console.log("Error on conecting to database:" , err)
        }
    }

    public closeConnectionToDatabase(){
        connection.close();
    }
}




