import _ from "lodash";
import nextConnect from 'next-connect';
import connectDB from "../../../../utils/db";
import { Product, validate } from "../../../../models/admin/products";

export default async function handler(req, res) {
    try {
        await connectDB()

        let formError = {}

        console.log('req.body', req.body)

        const {error} = validate(req.body);
        console.log('error', error)
        if (error) {
            formError.validate = error.details[0]
            return res.status(200).json(formError)
        }

        const product = new Product(
            _.pick(req.body,
                ['product_name', 'categoryID', 'description', 'inBox', 'quantity', 'wholesale_price', 'price', 'status'])
        );

        await product.save()

        res.status(200).json(product)

    } catch (e) {
        res.status(500).end()
    }
}
