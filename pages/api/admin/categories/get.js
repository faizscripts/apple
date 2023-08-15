import connectDB from "../../../../utils/db";
import {Category} from "../../../../models/admin/categories";

export default async function handler(req, res) {
    try {
        await connectDB();
        const data = await Category.find();
        const categories = JSON.parse(JSON.stringify(data));
        res.status(200).json(categories);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
