import mongoose from 'mongoose'

const { String, Number, Array } = mongoose.Schema.Types

const CartSchema = new mongoose.Schema({
    pro_name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number,
        required: true
    },
    purchase: {
        type: Number,
        required: true,
        default: 0
    },
    main_category: {
        type: String,
        required: true,
    },
    sub_category: {
        type: Array,
        required: true,
    },
    main_image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)