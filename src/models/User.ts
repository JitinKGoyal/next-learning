import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: [true, 'username should unique']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: [true, 'email should unique']
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now
    },
    role: {
        type: String,
        default: 'user'
    },
    verifyToken: String,
    verifyTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordTokenExpires: Date,
})

// mongoose.models.users => This usage existing model
export default mongoose.models.users || mongoose.model('users', UserSchema)