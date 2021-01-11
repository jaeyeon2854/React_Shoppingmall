import mongoose from "mongoose";

const { String } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // 꼭 필요한 값
    },
    id: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    number1: {
        type: String,
        required: true,
        unique: true
    },
    number2: {
        type: String,
        required: true,
        unique: true
    },
    tel: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin', 'root']
    },
    avatarUrl: {
        type: String

    }, 
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema)