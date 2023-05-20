import { useState } from "react";
import mongoose from "mongoose";
import AdminLayout from "../../../../layout/AdminLayout";
import ProductForm from "../../../../components/admin/ProductForm";
import connectDB from "../../../../utils/db";
import {Category} from "../../../../models/admin/categories";
import {Product} from "../../../../models/admin/products";

function EditProduct({ product, categories }) {

    const [product_name, setProductName] = useState(product.product_name)
    const [categoryId, setCategoryId] = useState(product.categoryId)
    const [quantity, setQuantity] = useState(product.quantity)
    const [wholesale_price, setWholesalePrice] = useState(product.wholesale_price)
    const [price, setPrice] = useState(product.price)
    const [description, setDescription] = useState(product.description)
    const [status, setStatus] = useState(product.status)
    const [productImages, setProductImages] = useState(product.product_images)

    return(
        <ProductForm
            newEntry={false}
            productId = {product._id}
            product_name={product_name}
            setProductName={setProductName}
            categoryId={categoryId}
            setCategoryId={setCategoryId}
            quantity={quantity}
            setQuantity={setQuantity}
            wholesale_price={wholesale_price}
            setWholesalePrice={setWholesalePrice}
            price={price}
            setPrice={setPrice}
            description={description}
            setDescription={setDescription}
            status={status}
            productImages={productImages}
            categories={categories}/>
    )
}

EditProduct.pageLayout = AdminLayout

export default EditProduct

export async function getServerSideProps(context) {
    const { params } = context
    const { productId } = params

    await connectDB()

    const valid = mongoose.isValidObjectId(productId);
    if (!valid) return {
        redirect: {
            permanent: false,
            destination: "/admin/products",
        },
        props:{},
    };

    const rawProduct = await Product.findById(productId);
    if (!rawProduct) return {
        redirect: {
            permanent: false,
            destination: "/admin/products",
        },
        props:{},
    };

    const product = JSON.parse(JSON.stringify(rawProduct));

    const rawCategories = await Category.find().collation({locale: "en"});
    const categories = JSON.parse(JSON.stringify(rawCategories));

    return {
        props: { product, categories }
    }
}
