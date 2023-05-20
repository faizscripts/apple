import { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import ProductForm from "../../../components/admin/ProductForm";
import connectDB from "../../../utils/db";
import {Category} from "../../../models/admin/categories";

function NewProduct({ categories }) {

    const [product_name, setProductName] = useState("")
    const [categoryId, setCategoryId] = useState()
    const [quantity, setQuantity] = useState(0)
    const [wholesale_price, setWholesalePrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    return(
        <ProductForm
            newEntry={true}
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
            categories={categories}/>
    )
}

NewProduct.pageLayout = AdminLayout

export default NewProduct

export async function getServerSideProps() {
    await connectDB();

    const rawCategories = await Category.find().collation({locale: "en"});
    const categories = JSON.parse(JSON.stringify(rawCategories));

    return {
        props: { categories }
    }
}
