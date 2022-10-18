function index() {
    return(
        <div id="viewProducts" className="card ">
            <div className="card-body table-responsive">
                <table className="table table-hover table-bordered" id="customersT">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="tableHeader">Date Created</th>
                        <th scope="col" className="tableHeader customerName">Name</th>
                        <th scope="col" className="tableHeader">Email</th>
                        <th scope="col" className="tableHeader">Phone</th>
                        <th scope="col" className="tableHeader">Address</th>
                        <th scope="col" className="tableHeader">Income</th>
                        <th scope="col" className="tableHeader">Order Count</th>
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