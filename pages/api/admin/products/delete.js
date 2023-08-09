import mongoose from 'mongoose';
import connectDB from "../../../../utils/db";
import { Product } from "../../../../models/admin/products";
import { Category } from '../../../../models/admin/categories';

export default async function handler(req, res) {
    try {
        await connectDB()

        const product = await Product.findByIdAndDelete(req.body.itemId);

        if (!product) return res.status(500).end()

        const category = await Category.findById(product.categoryId);

        const objectId = new mongoose.Types.ObjectId(req.body.itemId);

        const indexToDelete = category.productIds.findIndex(objId => objId.equals(objectId));

        if (indexToDelete !== -1) {
            category.productIds.splice(indexToDelete, 1);

            await category.save();
        }

        const products = await Product.find().collation({locale: "en"}).sort('product_name');

        res.status(200).json(products)

    } catch (e) {
        res.status(500).end()
    }
}
