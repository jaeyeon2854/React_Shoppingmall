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
                product: {
                    type: ObjectId,
                    ref: 'Product'
                }
            }
        ]
    }
})
export default mongoose.models.Cart || mongoose.model('Cart', CartSchema)