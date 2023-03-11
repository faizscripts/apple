import { useState } from "react";
import AdminLayout from "../../../layout/AdminLayout";
import ProductForm from "../../../components/admin/ProductForm";
import connectDB from "../../../utils/db";
import {Category} from "../../../models/admin/categories";

function New({ categories }) {

    const [product_name, setProductName] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [wholesale_price, setWholesalePrice] = useState(0)
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState('')

    return(
        <ProductForm
            newEntry={true}
            product_name={product_name}
            setProductName={setProductName}
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

New.pageLayout = AdminLayout

export default New

export async function getServerSideProps() {
    await connectDB()
    const data = await Category.find().collation({locale: "en"}).sort('category_name');
    const categories = JSON.parse(JSON.stringify(data))
    return {
        props: { categories }
    }
}
