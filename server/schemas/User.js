import mongoose from "mongoose";

const { String } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
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
    },
    number2: {
        type: String,
        required: true,
    },
    tel: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin', 'root']
    },
    avatarUrl: {
        type: String
    }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema)