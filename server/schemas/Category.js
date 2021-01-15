import mongoose from 'mongoose'

const { Array } = mongoose.Schema.Types

const CategoriesSchema = new mongoose.Schema ({
    "DRESS": {
        type: Array,
        required: true
    },
    "OUTER": {
        type: Array,
        required: true
    },
    "TOP": {
        type: Array,
        required: true
    },
    "PANTS": {
        type: Array,
        required: true
    },
    "SKIRT": {
        type: Array,
        required: true
    },
    "TRAINING": {
        type: Array,
        required: true
    },
    "SHOES": {
        type: Array,
        required: true
    },
})

export default mongoose.models.Categories || mongoose.model('Categories', CategoriesSchema)