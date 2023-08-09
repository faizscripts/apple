import { useState } from 'react';
import Link from "next/link";
import ProductItem from './ProductItem';
import gadgets from '../public/images/categories/accessories-page-title.jpg'
import Breadcrumb from './Breadcrumb';

function CategoryPage({selectedCategory, categories, products}) {

    const [sort, setSort] = useState('latest')

    const breadcrumbArray = [
        {
            name: selectedCategory.category_name,
        },
    ]

    const renderCategories = () => {
        return categories.map(
            category => {
                return (
                    <div key={category._id} className='cards mx-4'>
                        <Link href={`/categories/${category._id}`}>
                            <h2 className={category._id === selectedCategory._id ? "active-category" : ""}>
                                {category.category_name}
                            </h2>
                        </Link>
                        <p>{category.productIds?.length} PRODUCTS</p>
                    </div>
                )
            }
        )

    }

    const renderProducts = () => {
        switch (sort) {
            case 'latest':
                products.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                break;

            case 'price: low to high':
                products.sort((a, b) => a.price - b.price);
                break;

            case 'price: high to low':
                products.sort((a, b) => b.price - a.price);
                break;

            default:
                products.sort((a, b) => a.dateCreated - b.dateCreated);
        }

        return products.map((product) => {
            return (
                <ProductItem
                    key={product._id}
                    productId={product._id}
                    price={product.price}
                    productName={product.product_name}
                    images={product.product_images} />
            );
        });
    };


    return (
        <div className='categories-container'>
            <div className='container-fluid img-background' style={{backgroundImage: `url('${gadgets.src}')`}}>
                <div className='secondary-container'>
                    <div className='container categories-list mt-5'>
                        {renderCategories()}
                    </div>
                </div>
            </div>

            <div className='main-container row d-flex justify-content-center'>
                <div className='products-container p-5'>
                    <div className='d-flex justify-content-between mt-3 mx-2'>
                        <Breadcrumb breadcrumbArray={breadcrumbArray} />
                        <div className='filter'>
                            <div className="dropdown me-5">
                                <div className="dropdown-toggle dropdown-div" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Sort by {sort}
                                </div>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => setSort('latest')}>Latest</button></li>
                                    <li><button className="dropdown-item" onClick={() => setSort('price: low to high')}>Price: low to high</button></li>
                                    <li><button className="dropdown-item" onClick={() => setSort('price: high to low')}>Price: high to low</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className='hr-medium-width'/>
                    <div className='row'>
                        {renderProducts()}
                    </div>
                </div>
            </div>
        </div>
)
}

export default CategoryPage
