import Google from "../components/Map/Google";


function Checkout() {

    const onButtonClick = (e) => {
        e.preventDefault()
    }

    return (

        <div id="checkout-body" className="container-fluid">

            {/*Main Information*/}

            <div id="checkout-main" className="container-fluid">
                {/*Contact*/}
                <div className="card">
                    <div className="card-header text-center">
                        CONTACT INFORMATION
                    </div>
                    <div className="card-body">
                        <form >
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Full Name</label>
                                <input type="text" className="form-control" id="name" name="name" placeholder="John Doe"
                                       required/>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" name="email"
                                           placeholder="name@example.com" required/>
                                    <div className="form-text">This email will be used to send you updates on the status of
                                        your orders
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label htmlFor="phone" className="form-label">Phone number</label>
                                    <input type="number" className="form-control" id="phone" name="phone"
                                           placeholder="0712345678" required/>
                                    <div className="form-text">For M-Pesa payments, please enter a safaricom number in the
                                        format 0712345678/ 0123456789.
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 map-element">
                                <label htmlFor="address" className="form-label" >Shipping Address</label>
                                <Google />

                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn btn-primary" id="confirm info" onClick={onButtonClick}>Confirm Info
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {/*Payment Method*/}

                <div className="card">
                    <div className="card-header text-center">
                        Payment Method
                    </div>
                    <div className="card-body">
                        <form method="post">
                            <div>
                                <p>Payment on delivery <span className="text-muted">(For all orders within Nairobi).</span></p>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <div className="final-text">Subtotal <span>(ksh.)</span></div>
                                <div className="final-price" id="cartTotal">60,000</div>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <div className="final-text">Delivery Fee<span>(ksh.)</span></div>
                                <div className="final-price" id="deliveryFee">300</div>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <div className="final-text">Total <span>(ksh.)</span></div>
                                <div className="final-price" id="checkoutTotal">60,300</div>
                            </div>
                            <span className="mt-2 text-muted" >*By placing an order, you&apos;re agreeing to our <a href="">terms and conditions</a></span>

                            <div className="text-center">
                                <button type="submit" className="btn  btn-success" id="placeOrder" onClick={onButtonClick}>PLACE ORDER
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>


            {/*sidebar*/}

            <div id="checkout-sidebar" className="container-fluid">
                <div className="text-center" id="divForHelp">
                    <button className="btn btn-warning" id="help-button">NEED HELP?</button>
                </div>

                <div className="card">
                    <div className="card-header ">
                        YOUR CART
                    </div>
                    <div className="card-body">
                        <div className="checkoutCart">
                            {/*${renderedYourCart(cart)}*/}
                            <div className="text-center mt-3">
                                <button className="btn btn-sm btn-danger" data-bs-toggle="modal"
                                        data-bs-target="#cart">Modify Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Checkout