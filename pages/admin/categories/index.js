import { useState, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../../layout/AdminLayout";
import connectDB from "../../../utils/db";
import { Category } from "../../../models/admin/categories";
import { showModal, hideModal, printError } from "../../../utils/helpers";

function Index({ rawCategories }) {

    const modalRef = useRef()

    const [categories, setCategories] = useState(rawCategories)
    const [formError, setFormError] = useState({})

    const deleteCategory = async (event, categoryId) => {
        event.preventDefault()

        try {
            const response = await axios.post("/api/admin/categories/delete", { categoryId })
            setCategories(response.data)
            hideModal(modalRef, setFormError)
        } catch (e) {
            let unexpected = {unexpected: 'An unexpected error occurred!'}
            setFormError(unexpected)
        }
    }

    const renderCategories = categories.map(
        category => {
            return (
                <tr key={category._id}>
                    <td className="view_table_name">{category.category_name}</td>
                    <td>{category.unitsSold}</td>
                    <td>{category.income}</td>
                    <td>
                        <div>
                            <Link href={`/admin/categories/edit/${category._id}`}><FontAwesomeIcon icon={faEdit} className="table-icon edit"/></Link>

                            <div className="deleteForm ms-4">
                                <button type="button" className="formBtn" onClick={() => showModal(modalRef)}>
                                    <FontAwesomeIcon icon={faTrashAlt} className="table-icon"/>
                                </button>
                            </div>

                            <div ref={modalRef} className="modal fade show" tabIndex="-1" aria-labelledby="categoryModal" aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className="modal-content">
                                        <form onSubmit={(event) => deleteCategory(event, category._id)}>
                                            <div className="modal-body">
                                                {printError(formError.unexpected)}
                                                <p><b>DELETE</b> {category.category_name}?</p>
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

    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <Link href="/admin/categories/new">
                    <button type="button" className="btn btn-primary mt-4 me-3 main-add-button">
                        Add New Category
                    </button>
                </Link>
            </div>
            <div className="card-body table-responsive ">
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="tableHeaderBig">Category Name</th>
                        <th scope="col" className="tableHeader">Units Sold</th>
                        <th scope="col" className="tableHeader">Income</th>
                        <th scope="col" className="tableHeader">Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {renderCategories}
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
    const data = await Category.find().collation({locale: "en"}).sort('category_name');
    const rawCategories = JSON.parse(JSON.stringify(data))
    return {
        props: { rawCategories }
    }
}
