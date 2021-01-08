import mongoose from 'mongoose'

const { String, Number, Array } = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({
    pro_name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    stock: {
        type: String,
        required: true
    },
    purchase: {
        type: String,
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
    description: {
        type: String,
        required: true,
    },
    main_image: {
        type: String,
        required: true,
    },
    detail_image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)