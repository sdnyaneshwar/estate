import express from 'express'
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js'
dotenv.config();
const app= express()
app.use(express.json())
mongoose.connect(process.env.MONGO_ID).then(()=>{
    console.log("database is connected");
}).catch((error)=>{
    console.log(error);
})
app.listen(3000,()=>{
    console.log("server is runnin on port 3000");
})


app.use('/api/user',userRouter)
app.use('/api/auth',authRouter)


app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "internal server error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,

})


})