import mongoose, { connection } from 'mongoose'

export const connect = () => {

    try {
        mongoose.connect(process.env.MONGO_URI as string)
        connection.on('connected', () => {
            console.log("DB connected successfully")
        })

        connection.on('error', () => {
            console.log("Something went wrong")
            process.exit()
        })
    } catch (error) {
        console.log('error', error)
    }
}