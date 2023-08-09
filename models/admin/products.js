import mongoose, {models} from "mongoose";
import Joi from 'joi';

const productSchema = new mongoose.Schema({
    product_name: {
        type: String,
        required: true,
        maxlength: 255,
        trim: true,
        unique: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    description: {
        type: String,
        trim: true
    },
    inBox: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number,
        min: 0,
        default: 0
    },
    wholesale_price: {
        type: Number,
        min: 0
    },
    price: {
        type: Number,
        min: 0
    },
    status: {
        type: Boolean,
        default: false
    },
    product_images: [{
        filename: String,
    }],
    dateCreated: {
        type: Date,
        default: Date.now
    },
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
    optionItems:[{
        type: String
    }],
});

productSchema.index({product_name: "text"})

export const Product = models ? models.Product || mongoose.model('Product', productSchema) : mongoose.model('Product', productSchema);

export function validate(product) {
    const schema =Joi.object({
        product_name: Joi.string().min(3).max(255).required(),
        categoryId: Joi.string().min(3).max(255),
        description: Joi.string().optional().allow(''),
        inBox: Joi.string().optional().allow(''),
        quantity: Joi.number().required(),
        wholesale_price: Joi.number().required(),
        price: Joi.number().greater(Joi.ref('wholesale_price')).required(),
        status: Joi.boolean()

    }).unknown(true);

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };

    return schema.validate(product, options);
}

exports.validate = validate;
