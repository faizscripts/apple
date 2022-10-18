function index() {
    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}
                        onClick="location.href='/admin/categories/new'">Add New Category
                </button>
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

export default index