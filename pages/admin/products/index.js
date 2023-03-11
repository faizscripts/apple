import Link from "next/link";
import AdminLayout from "../../../layout/AdminLayout";
import connectDB from "../../../utils/db";
import { Product } from "../../../models/admin/products";
import {useRef, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import {hideModal, printError, showModal} from "../../../utils/helpers";
import axios from "axios";

function Index({ rawProducts }) {

    const modalRef = useRef()

    const [products, setProducts] = useState(rawProducts)
    const [formError, setFormError] = useState({})

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

    const renderProducts = products.map(
        product => {
            return (
                <tr key={product._id}>
                    <td className="view_table_name">{product.product_name}</td>
                    <td>{product.wholesale_price}</td>
                    <td>{product.price}</td>
                    <td></td>
                    <td>{product.unitsSold}</td>
                    <td>{product.income}</td>
                    <td>{product.quantity}</td>
                    <td></td>
                    <td>
                        <div>
                            <Link href={`/admin/products/edit/${product._id}`}><FontAwesomeIcon icon={faEdit} className="table-icon edit"/></Link>

                            <div className="deleteForm ms-4">
                                <button type="button" className="formBtn" onClick={() => showModal(modalRef)}>
                                    <FontAwesomeIcon icon={faTrashAlt} className="table-icon"/>
                                </button>
                            </div>

                            <div ref={modalRef} className="modal fade show" tabIndex="-1" aria-labelledby="categoryModal" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <form onSubmit={(event) => deleteProduct(event, product._id)}>
                                            <div className="modal-body">
                                                {printError(formError.unexpected)}
                                                <p><b>DELETE</b> {product.product_name}?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" onClick={() => hideModal(modalRef, setFormError)}>
                                                    Cancel
                                                </button>
                                                <button className="btn btn-danger" type="submit">
                                                    Confirm
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            )
        }
    )

    return (
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
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
                    {renderProducts}
                    </tbody>
                </table>
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
