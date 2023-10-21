import UserLayout from "../layout/UserLayout";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { setCost } from '../redux/features/deliveryCost';
import { getTotals, initializeCart } from '../redux/features/cart';
import axios from 'axios';
import Image from 'next/image';
import CheckoutMap from '../components/CheckoutMap';
import Link from 'next/link';
import { useRouter } from 'next/router';

function Checkout() {
    const dispatch = useDispatch()

    const deliveryPrice =  useSelector(state=>state.deliveryPrice)
    const productPrice = useSelector(state=>state.cart.cartTotalAmount)
    const cartItems = useSelector((state) => state.cart.cartItems);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: null, lng: null });
    const [processing, setProcessing] = useState(false)

    const router = useRouter()

    useEffect(() => {
        dispatch(setCost(0))
        dispatch(initializeCart());
        dispatch(getTotals());
    }, [dispatch]);

    const total = productPrice + deliveryPrice

    const onFormSubmit = async (e) => {
        e.preventDefault();
        try {
            await router.push("/")
        } catch (e) {
            console.log('error',e)
        }
    }

    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatNumber(number) {
        return addCommasToNumber(Math.floor(number));
    }

    function renderCartItems() {
        return cartItems.map(
            (cartItem) => {
                return (
                    <div key={cartItem.productId} className="checkout-cart-item">
                        <div className="checkout-cart-image">
                            <Image src={`https://monza.co.ke/img/products/${cartItem.images[0]?.filename}`} layout="fill" alt="Added product image"/>
                        </div>
                        <div className="d-flex flex-column w-100">
                            <p className="product-name">{cartItem.productName}</p>
                            <div className="d-flex justify-content-between mb-3">
                                <span>ksh. {formatNumber(cartItem.price)}</span>
                                <span>qty: {cartItem.cartQuantity}</span>
                            </div>
                        </div>
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
                        ORDER INFORMATION
                    </div>
                    <form className="card-body" onSubmit={onFormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="name" name="name" placeholder="John Doe" value={name} onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="name@example.com" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                                <div className="form-text">This email will be used to send you updates on the status of
                                    your orders
                                </div>
                            </div>

                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone number</label>
                                <input type="number" className="form-control" id="phone" name="phone" placeholder="0712345678" value={phone} onChange={(event) => setPhone(event.target.value)} required/>
                            </div>
                        </div>
                        <div className="mb-3 map-element">
                            <label htmlFor="address" className="form-label" >Shipping Address</label>
                            <CheckoutMap coordinates={coordinates} setCoordinates={setCoordinates} />
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
                        <div className="text-center">
                            <button type="submit" className="btn  btn-success" id="placeOrder">
                                {processing ? 'Processing...' : 'PLACE ORDER'}
                            </button>
                        </div>
                    </form>
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
                        {renderCartItems()}
                        <div className="text-center mt-3">
                            <Link href="/cart">
                                <button className="btn btn-sm btn-danger">Modify Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

Checkout.pageLayout = UserLayout

export default Checkout
