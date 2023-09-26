import {useEffect, useState} from 'react'
import {toast} from "react-toastify";
import Image from 'next/image';
import mongoose from 'mongoose';
import parse from 'html-react-parser';
import connectDB from '../../utils/db';
import UserLayout from '../../layout/UserLayout';
import { Product } from '../../models/admin/products';
import Slideshow from '../../components/elements/Slideshow';
import { Category } from '../../models/admin/categories';
import Breadcrumb from '../../components/Breadcrumb';
import {useDispatch,useSelector} from "react-redux";
import {addToCart, initializeCart} from "../../redux/features/cart";
import Link from "next/link";
import ReactWhatsapp from "react-whatsapp";

function ProductViewComponent({ product, category }) {

    const dispatch= useDispatch()

    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    const { _id, product_name, product_images, price } = product;

    const addProductToCart = () => {
        const existingProduct = cartItems.find(item => item.productId === _id);

        if (existingProduct) {
            toast.info(`${product_name} already exists in the cart`, {
                position: "top-right",
            });
        } else {
            dispatch(addToCart({
                productId: _id,
                productName: product_name,
                images: product_images,
                price: price,
            }));
        }
    }

    const breadcrumbArray = [
        {
            name: category.category_name,
            link: `/categories/${category._id}`,
        },
        {
            name: product.product_name,
        }
    ]

    function renderThumbnails() {
        return product.product_images.map(
            (productImage) => {
                return (
                    <Image
                        key={productImage._id}
                        src={`https://monza.co.ke/img/products/${productImage.filename}`}
                        alt={productImage._id}
                        height="80"
                        width="80" />
                )
            }
        )
    }

    const message = `I'm interested in ${product_name}. The link is http://apple-express.co.ke/view/${_id}`;
    const phoneNumber = '+254705063256';

    return(
        <div className='product-view-container row'>
            <div className='product-img col-lg-6 col-md-12'>
                <Slideshow productImages={product_images} />
                <div className='slideshow-container'>
                    {renderThumbnails()}
                </div>
            </div>
            <div className='product-description col-lg-5 col-md-12'>
                <div className='view-breadcrumb'>
                    <Breadcrumb breadcrumbArray={breadcrumbArray} />
                </div>
                <div className="header-container">
                    <h1 className='mt-3'>{product_name}</h1>
                    <h1 className='mt-3 pv-price'>Ksh {price}</h1>
                    <div className={product.description ? 'd-block' : 'd-none'}>
                        <h5 className='mt-3 mb-4'>Key Features:</h5>
                        {parse(product.description)}
                    </div>
                    <div className='mt-4 buttons-view-container'>
                        <Link href='/cart'>
                            <button type="button" className="btn btn-primary me-2 button-view" onClick={addProductToCart}>CHECKOUT </button>
                        </Link>
                        <button className="btn btn-primary me-2 view-text-button button-view" type="submit" onClick={addProductToCart}>ADD TO CART</button>
                        <ReactWhatsapp message={message} number={phoneNumber} className="btn btn-success view-text-button button-view">
                           ORDER ON WHATSAPP
                        </ReactWhatsapp>
                    </div>
                </div>
            </div>
        </div>
    )
}

ProductViewComponent.pageLayout = UserLayout;

export default ProductViewComponent;

export async function getServerSideProps(context) {
    const { params } = context;
    const { productId } = params;

    await connectDB();

    const valid = mongoose.isValidObjectId(productId);
    if (!valid) return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props:{},
    };

    const rawProduct = await Product.findById(productId);
    if (!rawProduct) return {
        redirect: {
            permanent: false,
            destination: "/",
        },
        props:{},
    };

    const product = JSON.parse(JSON.stringify(rawProduct));

    const rawCategory = await Category.findById(product.categoryId);

    const category = JSON.parse(JSON.stringify(rawCategory));

    return {
        props: { product, category }
    }
}
