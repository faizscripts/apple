function Dashboard() {
    return (
        <div className='dashboard'>
            {/*Card orders*/}
            <div className="card order">
                <div className="card-header text-center">
                    <h3>NEW ORDERS</h3>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover table-bordered " id="dashorders">
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
                    <div className="d-flex justify-content-center">
                        <a href="/admin/Dashboard" className="mb-2" style={{textDecoration: 'none'}}>view all orders</a>
                    </div>
                </div>
            </div>

            {/*Stats*/}
            <div id="stats">
                <div className="row">
                    <div className="card col">
                        <div className="card-body">
                            <h5 className="card-title">Monthly Income</h5>
                            <div className="card-text">
                            </div>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h5 className="card-title">Monthly Orders</h5>
                            <div className="card-text">
                            </div>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h5 className="card-title">Total Customers</h5>
                            <div className="card-text">
                            </div>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h5 className="card-title">Total Units Sold</h5>
                            <div className="card-text">
                                <div className="d-flex justify-content-end">
                                    <div className="statNum"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card col">
                        <div className="card-body">
                            <h5 className="card-title">Total Products</h5>
                            <div className="card-text">
                                <div className="d-flex justify-content-end">
                                    <div className="statNum"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*Best performers*/}
            <div className="card order">
                <div className="card-header text-center">
                        <h3>BEST PERFORMERS</h3>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover table-bordered performer" id="bestp">
                        <thead>
                        <tr className="table-dark">
                            <th scope="col" className="performerHeading">Product ID</th>
                            <th scope="col" className="performerName">Name</th>
                            <th scope="col" className="performerHeading">Created on</th>
                            <th scope="col" className="performerHeading">Shop Price</th>
                            <th scope="col" className="performerHeading">Price</th>
                            <th scope="col" className="performerHeading">Income</th>
                            <th scope="col" className="performerHeading">Units Sold</th>
                            <th scope="col" className="performerHeading">Units Left</th>
                        </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                </div>
            </div>

            {/*worst performers*/}
            <div className="card order">
                <div className="card-header text-center">
                    <h3>WORST PERFORMERS</h3>
                </div>
                <div className="card-body table-responsive">
                    <table className="table table-hover table-bordered performer" id="worstp">
                        <thead>
                        <tr className="table-dark">
                            <th scope="col" className="performerID">Product ID</th>
                            <th scope="col" className="performerName">Name</th>
                            <th scope="col" className="performerHeading">Created on</th>
                            <th scope="col" className="performerHeading">Shop Price</th>
                            <th scope="col" className="performerHeading">Price</th>
                            <th scope="col" className="performerHeading">Income</th>
                            <th scope="col" className="performerHeading">Units Sold</th>
                            <th scope="col" className="performerHeading">Units Left</th>
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

export default Dashboard