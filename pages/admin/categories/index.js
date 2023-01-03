import AdminLayout from "../../../layout/AdminLayout";
import Link from "next/link";

function index() {
    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <Link href="/admin/">
                    <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}>
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
                    </tbody>
                </table>
            </div>
        </div>
    )
}

index.pageLayout = AdminLayout

export default index
