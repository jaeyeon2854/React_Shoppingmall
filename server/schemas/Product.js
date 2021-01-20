import mongoose from 'mongoose'

const { String, Number } = mongoose.Schema.Types

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
        type: [String],
        required: true
    },
    colors: {
        type: [String],
        required: true
    },
    main_category: {
        type: String,
        required: true,
    },
    sub_category: {
        type: [String],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    main_imgUrl: {
        type: String,
        required: true
    },
    detail_imgUrls: {
        type: [String]
    }
}, {
    timestamps: true
})

export default mongoose.models.Product || mongoose.model('Product', ProductSchema)