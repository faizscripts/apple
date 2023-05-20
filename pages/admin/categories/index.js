import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "../../../layout/AdminLayout";
import connectDB from "../../../utils/db";
import { Category } from "../../../models/admin/categories";
import DeleteModal from '../../../components/admin/DeleteModal';

function Index({ rawCategories }) {

    const [categories, setCategories] = useState(rawCategories)

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

                            <DeleteModal itemId={category._id} itemName={category.category_name} setItem={setCategories} url={'/api/admin/categories/delete'} />
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
