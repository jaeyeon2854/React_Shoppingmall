import mongoose from 'mongoose'

const { ObjectId, Number, String } = mongoose.Schema.Types

const OrderSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    products: [
        {
            productId: {
                type: ObjectId,
                ref: 'Product'
            },
            count: {
                type: Number,
                required: true
            },
            size: {
                type: String,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            checked: {
                type: Boolean
            }
        }
    ],
    receiverInfo:
    {
        name: {
            type: String,
            required: true
        },
        tel: {
            type: String,
            required: true
        },
        postalCode: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        address2: {
            type: String,
            required: true
        }
    },
    paymentWay: {
        type: String,
        required: true
    },
    paymentInfo: {
        bank: {
            type: String
        },
        depositor: {
            type: String
        },
        deadline: {
            type: String
        }
    },
    total: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

export default mongoose.models.Order || mongoose.model('Order', OrderSchema)