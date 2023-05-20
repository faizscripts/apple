import { useState } from "react";
import mongoose from "mongoose";
import AdminLayout from "../../../../layout/AdminLayout";
import connectDB from "../../../../utils/db";
import { Category } from "../../../../models/admin/categories";
import CategoryForm from "../../../../components/admin/CategoryForm";

function EditCategory({ category }) {

    const [category_name, setCategoryName] = useState(category.category_name)

    return(
        <CategoryForm
            newEntry={false}
            category_name={category_name}
            setCategoryName={setCategoryName}
            categoryId={category._id} />
    )
}

EditCategory.pageLayout = AdminLayout

export default EditCategory

export async function getServerSideProps(context) {
    const { params } = context
    const { categoryId } = params

    await connectDB()

    const valid = mongoose.isValidObjectId(categoryId);
    if (!valid) return {
        redirect: {
            permanent: false,
            destination: "/admin/categories",
        },
        props:{},
    };

    const data = await Category.findById(categoryId);
    if (!data) return {
        redirect: {
            permanent: false,
            destination: "/admin/categories",
        },
        props:{},
    };

    const category = JSON.parse(JSON.stringify(data))

    return {
        props: { category }
    }
}
