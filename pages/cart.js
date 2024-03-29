import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import UserLayout from "../layout/UserLayout";
import Link from 'next/link';
import {useSelector,useDispatch} from "react-redux";
import {decreaseCart, getTotals, increasedCart, initializeCart, removeCartItem} from "../redux/features/cart";
import {useEffect} from "react";
import Image from "next/image";

function Cart() {

    const cart = useSelector((state)=>state.cart)
    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch=useDispatch()

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    useEffect(()=>{
       dispatch(getTotals())
    },[dispatch,cart])

    function handleRemoveFromCart(cartItem) {
        dispatch(removeCartItem(cartItem))
    }

    function handleDecreasedCart(cartItem) {
        dispatch(decreaseCart({ productId: cartItem.productId,  productName: cartItem.productName }));
    }

    function handleIncreasedCart(cartItem) {
        dispatch(increasedCart({ productId: cartItem.productId,  productName: cartItem.productName }));
    }

    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatNumber(number) {
        const formattedInteger = addCommasToNumber(Math.floor(number));
        return `Ksh ${formattedInteger}`;
    }

    return (
        <div className='cart-container'>
            {
                cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <h1>Your cart is currently empty</h1>
                        <Link href='/'>
                            <p className="start-shopping">Start Shopping</p>
                        </Link>
                    </div>
                ) :
                    (
                    <>
                        <div className='cart-full col-lg-8 col-md-10'>
                        <h1>Cart ({cartItems.length})</h1>
                        {cartItems && cartItems.map((cartItem, index) => (
                            <div key={cartItem.productId} className=' added-products'>
                                <div className='d-flex justify-content-between'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <div className="cart-image-container">
                                            <Image src={`https://monza.co.ke/img/products/${cartItem.images[0]?.filename}`} layout="fill" alt="Added product image"/>
                                        </div>
                                        <div className='ml-3'>
                                            <p>{cartItem.productName}</p>
                                            <p className="d-md-none">{formatNumber(cartItem.price)}</p>
                                        </div>
                                    </div>
                                    <h2 className='d-none me-2 d-md-flex align-items-center'>{formatNumber(cartItem.price)}</h2>
                                </div>
                                <div className='d-flex justify-content-between mt-2'>
                                    <p className='delete ms-2 mt-1' onClick={()=>handleRemoveFromCart(cartItem)}><FontAwesomeIcon icon={faTrash}/> REMOVE</p>
                                    <div className="no-items me-2">
                                        <div className="minus text-black-50" onClick={()=>handleDecreasedCart(cartItem)}>
                                            <FontAwesomeIcon icon={faMinus} className='icon-symbols'/>
                                        </div>
                                        <div className='text-black-50'>
                                            <span className="icon-no">{cartItem.cartQuantity}</span>
                                        </div>
                                        <div className="add text-black-50" onClick={()=>handleIncreasedCart(cartItem)}>
                                            <FontAwesomeIcon icon={faPlus} className='icon-symbols'/>
                                        </div>
                                    </div>
                                </div>
                                {index + 1 !== cartItems.length ? <hr/> : null}
                            </div>
                        ))}
                        </div>
                        <div className='total-container col-lg-4'>
                            <h1>CART SUMMARY</h1>
                            <hr/>
                            <div className='d-flex justify-content-between align-items-center mx-2'>
                                <p className='total-header'>Subtotal</p>
                                <h1>{formatNumber(cart.cartTotalAmount)}</h1>
                            </div>
                            <hr/>
                            <Link href='/checkout'>
                            <button type="button" className="btn btn-warning">CHECKOUT ({formatNumber(cart.cartTotalAmount)})</button>
                            </Link>
                        </div>
                    </>
                )
            }
        </div>
    )
}

Cart.pageLayout = UserLayout

export default Cart
