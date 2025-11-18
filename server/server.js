import express from 'express'
import cors from 'cors'
import connectDB from './configs/db.js';
import dotenv from 'dotenv'
import userRouter from './routes/userRouter.js';


import dashboardRouter from './routes/dashboardRouter.js'
//.env setup
dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json())
app.use(cors())

//database connection
await connectDB()

app.get('/',(req,res)=>res.send("Multiple-disease-prediction Server is live..."))

 app.use('/api/users',userRouter)
 app.use('/api/users',userRouter)
 app.use('/api/users',dashboardRouter)


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})