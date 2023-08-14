import _ from 'lodash';
import { IncomingForm } from 'formidable'
import sharp from 'sharp'
import connectDB from '../../../../utils/db';
import { Product } from '../../../../models/admin/products';
import { Category } from '../../../../models/admin/categories';

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async function handler(req, res) {
    try {
        await connectDB()

        const productImages = [];

        await new Promise((resolve, reject) => {
            const form = new IncomingForm();

            form.on('file', (field, file) => {
                const oldPath = file.filepath;
                const newFilename = `${file.newFilename}-${file.originalFilename}`;
                productImages.push({filename: newFilename})
                const newPath = `../monza/public/img/products/${newFilename}`;

                sharp(oldPath)
                    .toFile(newPath, function (err) {
                        if (err) reject(err);
                        else resolve(newFilename);
                    });
            });

            form.on('error', (err) => {
                reject(err);
            });

            form.on('end', () => {
                resolve();
            });

            form.parse(req, async (err, fields, files) => {
                if (err) return reject(err);

                const product = new Product(
                    _.pick(fields,
                        ['product_name', 'categoryId', 'description', 'quantity', 'wholesale_price', 'price', 'status'])
                );

                product.product_images = productImages;

                await product.save();

                await Category.findByIdAndUpdate(
                    product.categoryId,
                    { $push: { productIds: product._id } },
                    { new: true }
                );

                res.status(200).json(product);
                return resolve();
            });
        });

    } catch (e) {
        res.status(500).json(e).end()
    }
}
