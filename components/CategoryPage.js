import { useState } from 'react';
import ProductItem from './ProductItem';
import Breadcrumb from './Breadcrumb';
import {useSelector} from "react-redux";

function CategoryPage({selectedCategory, products}) {

    const [sort, setSort] = useState('latest')
    const [currentPage,setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage

    const breadcrumbArray = [
        {
            name: selectedCategory.category_name,
        },
    ]

    const renderProducts = () => {
        const currentProducts = products.slice(firstIndex,lastIndex)
        switch (sort) {
            case 'latest':
                currentProducts.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                break;

            case 'price: low to high':
                currentProducts.sort((a, b) => a.price - b.price);
                break;

            case 'price: high to low':
                currentProducts.sort((a, b) => b.price - a.price);
                break;

            default:
                currentProducts.sort((a, b) => a.dateCreated - b.dateCreated);
        }

        return currentProducts.map((product) => {
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

    const totalPages = Math.ceil(products.length / recordsPerPage);

    const renderPaginationControls = () => {
        return (
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {currentPage > 1 && (
                        <li className="page-item">
                            <a
                                className="page-link text-dark"
                                href="#"
                                onClick={() => setCurrentPage(currentPage - 1)}>
                                Previous
                            </a>
                        </li>
                    )}

                    {Array.from({ length: totalPages }, (_, index) => (
                        <li
                            key={index}
                            className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                            <a
                                className='page-link text-black'
                                href="#"
                                onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </a>
                        </li>
                    ))}

                    {currentPage < totalPages && (
                        <li className="page-item">
                            <a
                                className="page-link text-dark"
                                href="#"
                                onClick={() => setCurrentPage(currentPage + 1)}>
                                Next
                            </a>
                        </li>
                    )}
                </ul>
            </nav>
        );
    };

    return (
        <div className='categories-container'>
            <div className='main-container row d-flex justify-content-center'>
                <div className='products-container'>
                    <div className='d-flex justify-content-between align-items-baseline mt-3 mx-2'>
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
                    {products.length > 10 ? (     <div className='pagination-container'>
                        {renderPaginationControls()}
                    </div>) : null}
                </div>
            </div>
        </div>
)
}

export default CategoryPage
