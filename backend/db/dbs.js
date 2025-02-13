import mongoose from 'mongoose'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()


console.log(process.env.MONGO_URI)
const connectDB=async ()=>{
  try{
    const conn=await mongoose.connect(process.env.MONGO_URI)
    console.log(`MongoDB connect: ${conn.connection.host}`)
  }catch(err){
    console.log({message:err.message})
  }
}

export default connectDB

