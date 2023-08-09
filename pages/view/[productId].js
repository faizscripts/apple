import { useState } from 'react';
import Image from 'next/image';
import mongoose from 'mongoose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import connectDB from '../../utils/db';
import UserLayout from '../../layout/UserLayout';
import { Product } from '../../models/admin/products';
import Slideshow from '../../components/elements/Slideshow';
import { Category } from '../../models/admin/categories';
import Breadcrumb from '../../components/Breadcrumb';

function ProductViewComponent({ product, category }) {

    const [count,setCount]=useState(0)

    const breadcrumbArray = [
        {
            name: category.category_name,
            link: `/categories/${category._id}`,
        },
        {
            name: product.product_name,
        }
    ]

    function decrementCount (){
        if (count === 0){
            return 0
        } else{
            setCount(prevCount => prevCount-1)
        }

    }

    function addCount (){
        setCount(prevCount => prevCount+1)
    }

    function renderThumbnails() {
        return product.product_images.map(
            (productImage) => {
                return (
                    <Image
                        key={productImage._id}
                        src={`/images/products/${productImage.filename}`}
                        alt={productImage._id}
                        height="100"
                        width="100" />
                )
            }
        )
    }

    return(
        <div className='product-view-container row'>
            <div className='product-img col-lg-6 col-md-12'>
                <Slideshow productImages={product.product_images} />
                <div className='slideshow-container'>
                    {renderThumbnails()}
                </div>
            </div>
            <div className='product-description col-lg-5 col-md-12'>
                <Breadcrumb breadcrumbArray={breadcrumbArray} />
                <div className="header-container">
                    <h1 className='mt-3'>{product.product_name}</h1>
                    <h1 className='mt-3 pv-price'>Ksh {product.price}</h1>
                    <div className={product.description ? 'd-block' : 'd-none'}>
                        <h5 className='mt-3 mb-4'>Key Features:</h5>
                        {product.description}
                    </div>
                    <div className='mt-4 d-flex'>
                        <div className="no-items">
                            <div className="minus text-black-50" onClick={decrementCount}>
                                <FontAwesomeIcon icon={faMinus} className='icon-symbols'/>
                            </div>
                            <div className='text-black-50'>
                                <p1 className="icon-no">{count}</p1>
                            </div>
                            <div className="add text-black-50" onClick={addCount}>
                                <FontAwesomeIcon icon={faPlus} className='icon-symbols'/>
                            </div>
                        </div>
                        <button className="btn btn-primary me-2" type="submit">ADD TO CART</button>
                        <button type="button" className="btn btn-success">ORDER ON WHATSAPP</button>
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
