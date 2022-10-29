import connectDB from "../../../utils/db";
import {Admin, validate} from "../../../models/admin/admins";
import _ from "lodash"
import bcrypt from "bcrypt"

export default async function handler(req, res) {

    try {
        await connectDB()

        let formError = {}

        const {error} = validate(req.body);
        if (error) {
            formError.validate = error.details[0]
            return res.status(200).json(formError)
        }

        let existingEmail = await Admin.findOne({email: req.body.email});
        if (existingEmail) {
            formError.email = "email already exists, kindly use another email"
            return res.status(200).json(formError)
        }

        let existingPhone = await Admin.findOne({phone: req.body.phone});
        if (existingPhone) {
            formError.phone = "phone number already exists, kindly use another number"
            return res.status(200).json(formError)
        }

        let admin = new Admin(
            _.pick(req.body, ['name', 'email', 'phone', 'password'])
        );

        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(admin.password, salt);

        admin = await admin.save();

        res.status(200).json(admin)

    } catch (e) {
        res.status(500).end()
    }

}
