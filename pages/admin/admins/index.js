function index() {
    return(
        <div>
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}
                        onClick="location.href='/admin/admins/new'">Add New Admin
                </button>
            </div>
            <div className="card-body table-responsive">
                <table className="table table-hover table-bordered" id="adminT">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="tableHeader">Date Created</th>
                        <th scope="col" className="tableHeader" style={{textTransform:"capitalize"}}>Name</th>
                        <th scope="col" className="tableHeader">Email</th>
                        <th scope="col" className="tableHeader">Phone</th>
                    </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}

export default index