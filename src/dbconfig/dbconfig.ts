import mongoose, { connection } from 'mongoose'

export const connect = () => {

    const DB_URL = 'mongodb://127.0.0.1:27017/next-app?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.10.3';

    try {
        console.log("mongo uri", process.env.MONGO_URL)
        mongoose.connect(DB_URL)
            .then(res => {
                console.log('DB connected successfully')
            })
            .catch(err => {
                console.log("Something went wrong during connecting DB", err)
            })
    } catch (error) {
        console.log('error', error)
    }
}