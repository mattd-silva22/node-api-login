import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

const port = 3333;
const app = express()

app.use(express.json())

app.get("/hello",(request,response) => {
    return response.status(418).json(
        {
            message : "Olá mundo. Login api"
        }
    )
});

app.listen(port)