import Link from "next/link";
import AdminLayout from "../../../layout/AdminLayout";
import connectDB from "../../../utils/db";
import { Product } from "../../../models/admin/products";
import {useEffect, useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faMagnifyingGlass, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {hideModal, printError, showModal} from "../../../utils/helpers";
import axios from "axios";
import DeleteModal from '../../../components/admin/DeleteModal';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {setSearchTerm} from "../../../redux/features/search";
import debounce from "lodash.debounce";

function Index({ rawProducts }) {
    const modalRef = useRef()
    const dispatch = useDispatch()
    const [currentPage,setCurrentPage] = useState(1)
    const [showNoResults, setShowNoResults] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [products, setProducts] = useState(rawProducts)
    const [formError, setFormError] = useState({})
    const recordsPerPage = 10
    const lastIndex = currentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const totalPages = Math.ceil(products.length / recordsPerPage);
    const searchTerm = useSelector((state) => state.search.searchTerm);

    const handleSearchInputChange = (e) => {
        dispatch(setSearchTerm(e.target.value));
    };

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

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const deleteProduct = async (event, productId) => {
        event.preventDefault()

        try {
            const response = await axios.post("/api/admin/products/delete", { productId })
            setProducts(response.data)
            hideModal(modalRef, setFormError)
        } catch (e) {
            let unexpected = {unexpected: 'An unexpected error occurred!'}
            setFormError(unexpected)
        }
    }

    const renderStatus = (status) => {
      if (status) {
          return (
              <button className="btn btn-sm btn-success">ON</button>
          )
      } else {
          return (
              <button className="btn btn-sm btn-danger">OFF</button>
          )
      }
    }

    const renderProducts = () => {
        const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

        if (currentProducts.length === 0 && showNoResults) {
            return (
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',marginTop:'20px',margin:'0 auto' }}>
                    <h1 style={{ fontSize: '25px' }}>There are no results for {searchTerm}.</h1>
                </div>
            );
        }

        return currentProducts.map((product) => {
            return (
                <tr key={product._id}>
                    <td className="view_table_name">{product.product_name}</td>
                    <td>{product.wholesale_price}</td>
                    <td>{product.price}</td>
                    <td></td>
                    <td>{product.unitsSold}</td>
                    <td>{product.income}</td>
                    <td>{product.quantity}</td>
                    <td>{renderStatus(product.status)}</td>
                    <td>
                        <div>
                            <Link href={`/admin/products/edit/${product._id}`}>
                                <FontAwesomeIcon icon={faEdit} className="table-icon edit" />
                            </Link>

                            <DeleteModal
                                itemId={product._id}
                                itemName={product.product_name}
                                setItem={setProducts}
                                url={'/api/admin/products/delete'}
                            />
                        </div>
                    </td>
                </tr>
            );
        });
    };

    const renderPaginationControls = () => {
        if (filteredProducts.length <= recordsPerPage) {
            return null;
        }

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
        <div id="viewProducts" className="card">
            <div className="d-flex justify-content-between align-items-center">
                <form className="d-flex input-icon me-3 mt-4 ms-3 position-relative" role="search" onSubmit={handleSubmit}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} aria-hidden={false} className='search'/>
                    <input
                        className="form-control me-2 input-field input-search" type="search" placeholder="Search"
                           value={searchTerm}
                           aria-label="Search"
                           onChange={handleSearchInputChange}
                    />
                </form>
                <Link href="/admin/products/new">
                    <button type="button" className="btn btn-primary mt-4 me-3 main-add-button">
                        Add Product
                    </button>
                </Link>
            </div>
            <div className="card-body table-responsive ">
                <table className="table table-hover table-bordered mt-2">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="product-name-heading">Product Name</th>
                        <th scope="col" className="product-others">Wholesale</th>
                        <th scope="col" className="product-others">Price</th>
                        <th scope="col" className="product-others">Profit</th>
                        <th scope="col" className="product-others">Units Sold</th>
                        <th scope="col" className="product-others">Income</th>
                        <th scope="col" className="product-others">Quantity</th>
                        <th scope="col" className="product-others">Status</th>
                        <th scope="col" className="product-others">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderProducts()}
                    </tbody>
                </table>
            </div>
            <div className='d-flex justify-content-end me-3'>
                {renderPaginationControls()}
            </div>
        </div>
    )
}

Index.pageLayout = AdminLayout

export default Index

export async function getServerSideProps() {
    await connectDB()
    const data = await Product.find().collation({locale: "en"}).sort('product_name');
    const rawProducts = JSON.parse(JSON.stringify(data))
    return {
        props: { rawProducts }
    }
}
