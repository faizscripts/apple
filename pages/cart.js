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
        dispatch(decreaseCart(cartItem))
    }

    function handleIncreasedCart(cartItem) {
        dispatch(increasedCart({Id:cartItem.id}))
    }

    return (
        <div className='cart-container mt-4'>

            {
                cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <h1>Your cart is currently empty</h1>
                        <div className="start-shopping">
                            <Link href='/'>
                                <div className="start-shopping" style={{textAlign:'center',cursor:'pointer'}}>
                                    <FontAwesomeIcon icon={faArrowLeft} />
                                    <span style={{color:'black',marginLeft:'10px'}}>Start Shopping</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                ) :
                    (
                    <>
                        <hr />
                        {cartItems && cartItems.map(cartItem => (
                            <div key={cartItem.productId} className='added-products mx-5'>
                                <h1>Cart ({cartItems.length})</h1>
                                <div>
                                    <div className='d-flex justify-content-between'>
                                        <div className='d-flex justify-content-center align-items-center'>
                                            <Image src={`https://monza.co.ke/img/products/${cartItem.images[0]?.filename}`}  height="150"
                                                   width="150" alt="Added product image"/>
                                            <div>
                                                <p>{cartItem.productName}</p>
                                                <span>In stock</span>
                                            </div>
                                        </div>
                                        <h2 className='me-2'>Ksh {cartItem.price}</h2>
                                    </div>
                                    <div className='d-flex justify-content-between'>
                                        <p className='delete ms-2 mt-1' onClick={()=>handleRemoveFromCart(cartItem)}><FontAwesomeIcon icon={faTrash}/> REMOVE</p>
                                        <div className="no-items me-2">
                                            <div className="minus text-black-50" onClick={()=>handleDecreasedCart(cartItem)}>
                                                <FontAwesomeIcon icon={faMinus} className='icon-symbols'/>
                                            </div>
                                            <div className='text-black-50'>
                                                <p1 className="icon-no">{cartItem.cartQuantity}</p1>
                                            </div>
                                            <div className="add text-black-50" onClick={()=>handleIncreasedCart(cartItem)}>
                                                <FontAwesomeIcon icon={faPlus} className='icon-symbols'/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='total-container'>
                            <h1>CART SUMMARY</h1>
                            <hr/>
                            <div className='d-flex justify-content-between align-items-center mx-2'>
                                <p className='total-header'>Subtotal</p>
                                <h1>Ksh {cart.cartTotalAmount}</h1>
                            </div>
                            <hr/>
                            <Link href='/checkout'>
                            <button type="button" className="btn btn-warning">CHECKOUT (KSH {cart.cartTotalAmount})</button>
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
