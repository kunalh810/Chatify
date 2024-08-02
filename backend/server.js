import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"

import connectToMongoDB from "./db/connectTOMongoDB.js";
import { app, server } from "./socket/socket.js";


const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json()); // to parse the incoming requests with json payloads(like req.body).
app.use(cookieParser());

app.use("/api/auth",authRoutes) //Whenever someone calls this route, that client request will be redirected to authRoutes File.
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)

app.get("/",(req,res)=>{
    res.send("Hello World !")
});

server.listen(PORT,()=>{
    connectToMongoDB()
    console.log(`Server running on port ${PORT} !`)
});

