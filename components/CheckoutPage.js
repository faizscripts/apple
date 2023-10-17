import Google from './Map/Google';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getTotals, initializeCart } from '../redux/features/cart';
import Image from 'next/image';

function CheckoutPage() {

    const dispatch = useDispatch()

    const deliveryPrice =  useSelector(state=>state.deliveryPrice)
    const productPrice = useSelector(state=>state.cart.cartTotalAmount)
    const cartItems = useSelector((state) => state.cart.cartItems);

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    useEffect(()=>{
        dispatch(getTotals())
    },[dispatch])

    const total = productPrice + deliveryPrice

    const onButtonClick = (e) => {
        e.preventDefault()
    }

    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatNumber(number) {
        return addCommasToNumber(Math.floor(number));
    }

    function renderCartItems() {
        return cartItems.map(
            (cartItem, index) => {
                return (
                    <div key={cartItem.productId}>
                        <div className="d-flex gap-2">
                            <div className="checkout-cart-image">
                                <Image src={`https://monza.co.ke/img/products/${cartItem.images[0]?.filename}`} layout="fill" alt="Added product image"/>
                            </div>
                            <div className="d-flex flex-column">
                                <p className="product-name">{cartItem.productName}</p>
                                <p>ksh. {formatNumber(cartItem.price)}</p>
                            </div>
                        </div>
                        {index + 1 !== cartItems.length ? <hr/> : null}
                    </div>
                )
            }
        )
    }

    return(
        <div id="checkout-body" className="container-fluid">

            <div id="checkout-main" className="container-fluid">

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
                                </div>
                            </div>
                            <div className="mb-3 map-element">
                                <label htmlFor="address" className="form-label" >Shipping Address</label>
                                <Google />
                            </div>
                        </form>
                    </div>
                </div>

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
                                <div className="final-price" id="cartTotal">{formatNumber(productPrice)}</div>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <div className="final-text">Delivery Fee<span>(ksh.)</span></div>
                                <div className="final-price" id="deliveryFee">{formatNumber(deliveryPrice)}</div>
                            </div>
                            <div className=" d-flex justify-content-between">
                                <div className="final-text">Total <span>(ksh.)</span></div>
                                <div className="final-price" id="checkoutTotal">{formatNumber(total)}</div>
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

            <div id="checkout-sidebar" className="container-fluid">
                <div className="text-center" id="divForHelp">
                    <button className="btn btn-warning" id="help-button">NEED HELP?</button>
                </div>

                <div className="card">
                    <div className="card-header">
                        YOUR CART
                    </div>
                    <div className="card-body">
                        <div className="checkoutCart">
                            {renderCartItems()}
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

export default CheckoutPage
