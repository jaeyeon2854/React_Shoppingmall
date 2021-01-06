import mongoose from 'mongoose'

const { String } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    confirm_password:{
        type: String,
        required: true,
        select: false
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'user',
        enum: ['user', 'admin', 'root']
    },
    birth: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.models.User || mongoose.model('User', UserSchema)