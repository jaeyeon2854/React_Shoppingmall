import mongoose from 'mongoose'

const { String} = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({
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
    size: {
        type: Array,
        required: true
    },
    color: {
        type: Array,
        required: true
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