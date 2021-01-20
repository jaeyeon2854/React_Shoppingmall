import mongoose from 'mongoose'

const { String, Number, Array, ObjectId } = mongoose.Schema.Types
const CartSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    products: {
        type: [
            {
                count: {
                    type: Number,
                    default: 1
                },
                productId: {
                    type: ObjectId,
                    ref: 'Product'
                },
                size: {
                    type: String
                },
                color: {
                    type: String
                }
            }
        ]
    }
})
export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)