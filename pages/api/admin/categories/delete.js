import connectDB from "../../../../utils/db";
import { Category } from "../../../../models/admin/categories";

export default async function handler(req, res) {
    try {
        await connectDB()

        const category = await Category.findByIdAndDelete(req.body.itemId);

        if (!category) return res.status(500).end()

        const categories = await Category.find().collation({locale: "en"}).sort('category_name');

        res.status(200).json(categories)

    } catch (e) {
        res.status(500).end()
    }
}
