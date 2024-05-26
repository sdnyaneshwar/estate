import express from 'express'
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
dotenv.config();
const app= express()
mongoose.connect(process.env.MONGO_ID).then(()=>{
    console.log("database is connected");
}).catch((error)=>{
    console.log(error);
})
app.listen(3000,()=>{
    console.log("server is runnin on port 3000");
})


app.use('/api/user',userRouter)