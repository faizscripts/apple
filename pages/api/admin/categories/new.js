import connectDB from "../../../../utils/db";
import { Category } from "../../../../models/admin/categories";

export default async function handler(req, res) {
    try {
        await connectDB()

        const category = new Category({
            category_name: req.body.category_name
        });

        await category.save()

        res.status(200).json(category)

    } catch (e) {
        res.status(500).end()
    }
}
