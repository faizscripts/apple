import connectDB from "../../../utils/db";
import { Admin } from "../../../models/admin/admins";
import bcrypt from "bcrypt"
import { serialize } from "cookie";

export default async function handler(req, res) {

    let formError = {}

    try {
        await connectDB()

        let admin = await Admin.findOne({email: req.body.email});
        console.log('admin', admin)
        if (!admin) {
            formError.email = "email not registered yet!"
            return res.status(200).json(formError)
        }

        const validPassword = await bcrypt.compare(req.body.password, admin.password);
        console.log('password',validPassword)
        if (!validPassword) {
            formError.password = "incorrect password"
            return res.status(200).json(formError)
        }

        res.setHeader("Set-Cookie", serialize("token", admin.generateLoginToken(), {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            sameSite: "strict",
            path: "/"
        }))

        res.status(200).json(admin)

    } catch (e) {
        res.status(500).end()
    }

}
