import connectDB from '../../utils/db';
import UserLayout from '../../layout/UserLayout';
import { Product } from '../../models/admin/products';
import SearchedProducts from "../../components/SearchedProducts";

function SearchPageComponent({ products }) {

    return(
        <SearchedProducts products={products}/>
    )
}

SearchPageComponent.pageLayout = UserLayout;

export default SearchPageComponent;


export async function getServerSideProps(context) {
    const { params } = context;
    const { searchId } = params;

    await connectDB();

    if (!searchId || searchId.trim() === '') {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
            props: {},
        };
    }

    const rawProducts = await Product.find({
        name: { $regex: new RegExp(searchId, 'i') },
        status: true,
    }).sort('-dateCreated');

    const products = JSON.parse(JSON.stringify(rawProducts));

    return {
        props: { products },
    };
}