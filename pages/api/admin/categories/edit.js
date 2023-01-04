import connectDB from "../../../../utils/db";
import { Category } from "../../../../models/admin/categories";

export default async function handler(req, res) {
    try {
        await connectDB()

        const category = await Category.findByIdAndUpdate(req.body.categoryId, {
            category_name: req.body.category_name,
        }, {new: true});

        res.status(200).json(category)

    } catch (e) {
        res.status(500).end()
    }
}
