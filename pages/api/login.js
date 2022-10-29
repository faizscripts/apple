import connectDB from "../../utils/db";
import { Admin } from "../../models/admin/admins";
import bcrypt from "bcrypt"

export default async function handler(req, res) {

    let formError = {}

    try {
        await connectDB()

        let admin = await Admin.findOne({email: req.body.email});
        if (!admin) {
            formError.email = "admin not registered yet!"
            return res.status(200).json(formError)
        }

        const validPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!validPassword) {
            formError.password = "incorrect password"
            return res.status(200).json(formError)
        }

        res.status(200).json(admin).end()

    } catch (e) {
        res.status(500).end()
    }

}
