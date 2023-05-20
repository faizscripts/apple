import connectDB from "../../../../utils/db";
import {Admin} from "../../../../models/admin/admins";

export default async function handler(req, res) {
    try {
        await connectDB()

        const admin = await Admin.findByIdAndDelete(req.body.itemId);

        if (!admin) return res.status(500).end()

        const admins = await Admin.find().collation({locale: "en"}).sort('admin_name');

        res.status(200).json(admins)

    } catch (e) {
        console.log('in catch', e)
        res.status(500).end()
    }
}
