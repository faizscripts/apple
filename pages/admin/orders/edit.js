function Edit() {
    return(
        <div id="add-product" className="container card my-5">
            <div className="card-header">
                Order Information
            </div>
            <div className="card-body">
                <form method="POST" action="/admin/orders/edit/${order.id}">
                    <div className="row">
                        <div className="mb-2 col-md-6 form-group">
                            <label htmlFor="orderID" className="form-label">Order ID</label>
                            <input type="text" className="form-control" id="orderID" aria-describedby="name"
                                   value="${order._id}" disabled/>
                        </div>
                        <div className="mb-2 col-md-6 form-group">
                            <label htmlFor="orderDate" className="form-label">Order Date</label>
                            <input type="text" className="form-control" id="orderDate" aria-describedby="name" value="${displayDate(order.orderDate)} @ ${order.orderDate.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
        })}" disabled/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-2 col-md-4 form-group">
                            <label htmlFor="name" className="form-label">Customer Name</label>
                            <input type="text" className="form-control" id="name" name="name" aria-describedby="name"
                                   value="${printName(order)}"/>
                        </div>
                        <div className="mb-2 col-md-4 form-group">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email"
                                   value="${printEmail(order)}"/>
                        </div>
                        <div className="mb-2 col-md-4 form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" name="phone" id="phone"
                                   value="${printPhone(order)}"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="mb-2 col-md-6 form-group">
                            <label htmlFor="shopTotal" className="form-label">Shop Price</label>
                            <input type="number" className="form-control" name="shopTotal" id="shopTotal"
                                   value="${order.shopTotal}" required/>
                        </div>
                        <div className="mb-2 col-md-6 form-group">
                            <label htmlFor="delivery_fee" className="form-label">Delivery Fee</label>
                            <input type="number" className="form-control" name="delivery_fee" id="delivery_fee"
                                   aria-describedby="name" value="${order.delivery_fee}" required/>
                        </div>
                    </div>

                    <div className="mb-2 form-group">
                        <label htmlFor="orderNotes" className="form-label">Order Notes</label>
                        <textarea type="text" className="form-control" id="orderNotes" name="orderNotes"
                                  rows="4">${order.orderNotes}</textarea>
                    </div>

                    <div className="d-flex justify-content-evenly">
                        <p className="otEdit"> order total: <span
                            className="tdf"> ${order.total + order.delivery_fee}</span></p>
                        <input type="hidden" className="outputtdf" name="outputtdf"
                               value="${order.total+ order.delivery_fee}"/>
                            <p className="otEdit"> income: <span
                                className="income"> ${order.total - order.shopTotal}</span></p>
                    </div>

                    <div className="my-3 form-group ">
                        <label htmlFor="orderStatus" className="form-label" required>Order Status</label>
                        <select className="form-select" aria-label="Select Category" id="orderStatus" name="orderStatus"
                                required>
                            ${printStatus(order)}
                        </select>
                    </div>

                    <div className="my-3 d-flex justify-content-evenly">
                        <button className="btn btn-success save" type="submit" value="submit"
                                formAction="/admin/orders/edit/${order.id}">SAVE
                        </button>
                        <a className="btn btn-secondary save" onClick="location.href='/admin/orders'">CANCEL</a>
                    </div>
                </form>
            </div>
        </div>

)
}
 export default Edit