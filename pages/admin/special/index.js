import AdminLayout from "../../../layout/AdminLayout";

function index() {
    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-between">
                <h4 className="special-heading">Only a maximum of 3 special categories is allowed!</h4>
            </div>
            <div className="card-body table-responsive">
                <table className="table table-hover table-bordered">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="tableHeaderBig">Special Category Name</th>
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
