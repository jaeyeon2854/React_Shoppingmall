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
    sizes: {
        type: Array,
        required: true
    },
    colors: {
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
        type: Array,
        required: true,
    },
    detail_image: {
        type: Array,
        required: true,
    }
}, {
    timestamps: true
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)