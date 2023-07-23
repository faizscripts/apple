import mongoose from "mongoose";
import connectDB from '../../utils/db';
import { Category } from '../../models/admin/categories';
import CategoryPage from '../../components/CategoryPage';
import UserLayout from '../../layout/UserLayout';
import { Product } from '../../models/admin/products';

function CategoryPageComponent({ category, categories, products }) {

    return(
        <CategoryPage selectedCategory={category} categories={categories} products={products}>
        </CategoryPage>
    )
}

CategoryPageComponent.pageLayout = UserLayout;

export default CategoryPageComponent;

export async function getServerSideProps(context) {
    const { params } = context;
    const { categoryId } = params;

    await connectDB();

    const valid = mongoose.isValidObjectId(categoryId);
    if (!valid) return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props:{},
    };

    const rawCategory = await Category.findById(categoryId);
    if (!rawCategory) return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props:{},
    };

    const category = JSON.parse(JSON.stringify(rawCategory));

    const rawCategories = await Category.find();

    const categories = JSON.parse(JSON.stringify(rawCategories));

    const rawProducts = await Product.find({categoryId: category._id, status: true}).sort('-dateCreated');

    const products = JSON.parse(JSON.stringify(rawProducts));

    return {
        props: { category, categories, products }
    }
}
