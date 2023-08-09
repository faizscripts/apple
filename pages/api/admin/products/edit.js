import _ from 'lodash';
import { IncomingForm } from 'formidable'
import sharp from 'sharp';
import connectDB from '../../../../utils/db';
import { Product } from '../../../../models/admin/products';

export const config = {
    api: {
        bodyParser: false,
    }
};

export default async function handler(req, res) {
    try {
        await connectDB()

        const updatedProductImages = [];

        await new Promise((resolve, reject) => {
            const form = new IncomingForm();

            form.on('file', (field, file) => {
                const oldPath = file.filepath;
                const newFilename = `${file.newFilename}-${file.originalFilename}.webp`;
                updatedProductImages.push({filename: newFilename})
                const newPath = `./public/images/products/${newFilename}`;

                sharp(oldPath)
                    .toFormat('webp', { quality: 100 })
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

                let count = 0;

                const mergedProductImages = Object.keys(fields)
                    .filter(key => key.includes('image-'))
                    .map(key => fields[key] === 'false' ? {filename: updatedProductImages[count++].filename} : {filename: fields[key]});

                const product = await Product.findByIdAndUpdate(fields.productId,
                        _.pick(fields, ['product_name', 'categoryId', 'description', 'quantity', 'wholesale_price', 'price', 'status']),
                    {new: true});

                product.product_images = mergedProductImages;

                await product.save();

                res.status(200).json(product);

                return resolve();
            });
        });

    } catch (e) {
        res.status(500).json(e).end()
    }
}
