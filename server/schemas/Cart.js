import mongoose from 'mongoose'

const { String, Number, Array, ObjectId } = mongoose.Schema.Types
const productschema = new mongoose.Schema ({
    pro_name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    main_image: {
        type: String,
        required: true
    },
    color:{
        type: String,
        required: true
    },
    size:{
        type: String,
        required: true
    },
    productObjectId: {
        type: ObjectId,
        required: true
    }
})
const CartSchema = new mongoose.Schema({
    userId: {
        type: String,
        // required: true
    },
    products : {
        type: [productschema],
        required: true
    }
   
}, {
    timestamps: true
})

export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)