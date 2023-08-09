import mongoose, { models } from "mongoose";

const categoriesSchema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255,
        trim: true,
        unique: true
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    unitsSold: {
        type: Number,
        min: 0,
        default: 0
    },
    income: {
        type: Number,
        min: 0,
        default: 0
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

export const Category = models ? models.Category || mongoose.model('Category', categoriesSchema) : mongoose.model('Category', categoriesSchema);
