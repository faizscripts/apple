import { useState,useEffect } from 'react';
import Link from "next/link";
import ProductItem from './ProductItem';
import Breadcrumb from './Breadcrumb';
import {useSelector} from "react-redux";
import debounce from "lodash.debounce";

function SearchedProducts({ products}) {

    const [sort, setSort] = useState('latest')
    const [currentPage,setCurrentPage] = useState(1)
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage

    const searchTerm = useSelector((state) => state.search.searchTerm);

    const breadcrumbArray = [
        {
            name: searchTerm,
        },
    ]

    const debouncedHandleSearch = debounce((value) => {
        const filtered = products.filter((product) =>
            product.product_name.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, 200);

    useEffect(() => {
        debouncedHandleSearch(searchTerm);
    }, [searchTerm, products, debouncedHandleSearch]);


    useEffect(() => {
        renderProducts();

        const debouncedRenderProducts = debounce(() => {
            setShowNoResults(true);
        }, 2000);

        debouncedRenderProducts();
    }, [searchTerm, products]);

    const [filteredProducts, setFilteredProducts] = useState([]);
    const [showNoResults, setShowNoResults] = useState(false);

    const renderProducts = () => {

        const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

        if (filteredProducts.length === 0 && showNoResults) {
            return (
                <div style={{ height: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 style={{ fontSize: '25px' }}>There are no results for "{searchTerm}".</h1>
                    <ul style={{ listStyle: 'none', padding: '0', margin: '0', textAlign: 'center' }}>
                        <li>- Check your spelling for typing errors</li>
                        <li>- Try searching with short and simple keywords</li>
                        <li>- Try searching more general terms - you can then filter the search results</li>
                    </ul>
                    <Link href='/'>
                        <button type="button" className="btn btn-warning mt-3">
                            GO TO HOMEPAGE
                        </button>
                    </Link>
                </div>
            );
        }

        switch (sort) {
            case 'latest':
                filteredProducts.sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
                break;

            case 'price: low to high':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;

            case 'price: high to low':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;

            default:
                filteredProducts.sort((a, b) => a.dateCreated - b.dateCreated);
        }

        return currentProducts.map((product) => {
            return (
                <ProductItem
                    key={product._id}
                    productId={product._id}
                    price={product.price}
                    productName={product.product_name}
                    images={product.product_images}
                />
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
                        <div className='products-container p-5'>
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
                            {filteredProducts.length > 10 ? (
                                <div className='pagination-container'>
                                    {renderPaginationControls()}
                                </div>
                            ): null}
                        </div>
                    </div>
        </div>
    )
}

export default SearchedProducts