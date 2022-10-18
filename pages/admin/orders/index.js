function index() {
    return(
        <div id="viewProducts" className="card ">
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-primary mt-4 me-3" style={{fontSize: "0.8rem"}}
                        onClick="location.href='/admin/orders/new'">Add New Order
                </button>
            </div>
            <div className="card-body table-responsive">
                <table className="table table-hover table-bordered" id="orderViewT">
                    <thead>
                    <tr className="table-dark">
                        <th scope="col" className="ordersHeading">Date</th>
                        <th scope="col" className="ordersEmail">ID</th>
                        <th scope="col" className="ordersHeading">Contacts</th>
                        <th scope="col" className="ordersHeadingBig">Products & Notes</th>
                        <th scope="col" className="ordersHeading">Amount</th>
                        <th scope="col" className="ordersHeading">Payment</th>
                        <th scope="col" className="ordersHeading">Status</th>
                        <th scope="col" className="ordersHeading">Actions</th>
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