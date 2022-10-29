import mongoose, {models} from "mongoose";
const jwt = require('jsonwebtoken');
const Joi =  require('joi');


const adminSchema = new mongoose.Schema({
    admin_name: {
        type: String,
        minlength: 3,
        maxlength: 255,
        trim: true
    },
    email: {
        type: String,
        minlength: 3,
        maxlength: 255,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        min: 0,
        trim: true,
        // unique: true
    },
    password: {
        type: String,
        minlength: 8,
        trim: true,
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
});

adminSchema.methods.generateLoginToken = function () {
    return jwt.sign({_id: this._id, authority: this.authority}, process.env.JWTKEY);
}

adminSchema.methods.generatePosToken = function () {
    return jwt.sign({_id: this._id}, process.env.JWTKEY);
}

export const Admin = models.Admin || mongoose.model('Admin', adminSchema);

export function validate(admin) {
    const schema = Joi.object({
        admin_name: Joi.string().min(3).max(255),
        email: Joi.string().email().min(3).max(255),
        phone: Joi.number(),
        password: Joi.string().min(8).max(50),
        confirm: Joi.any().valid(Joi.ref('password')).required().messages({"any.only" : "Passwords must match"})
    })

    const options = {
        errors: {
            wrap: {
                label: ''
            }
        }
    };

    return schema.validate(admin, options);
}
