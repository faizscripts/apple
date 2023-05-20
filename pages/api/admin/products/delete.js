import connectDB from "../../../../utils/db";
import {Product} from "../../../../models/admin/products";

export default async function handler(req, res) {
    try {
        await connectDB()

        const product = await Product.findByIdAndDelete(req.body.itemId);

        if (!product) return res.status(500).end()

        const products = await Product.find().collation({locale: "en"}).sort('product_name');

        res.status(200).json(products)

    } catch (e) {
        res.status(500).end()
    }
}
