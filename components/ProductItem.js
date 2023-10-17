import {useState,useEffect} from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";
import {useDispatch,useSelector} from "react-redux";
import {addToCart,initializeCart} from "../redux/features/cart";
import {removeCartItem} from "../redux/features/cart";

function ProductItem({productId, images, price, productName}) {
    const router = useRouter();
    const dispatch = useDispatch();

    const isItemInCart = useSelector(state =>
        state.cart.cartItems.some(item => item.productId === productId)
    );

    useEffect(() => {
        dispatch(initializeCart());
    }, [dispatch]);

    const handleCartToggle = () => {
        if (isItemInCart) {
            dispatch(removeCartItem({ productId, productName }));
        } else {
            dispatch(addToCart({ productId, images, price, productName }));
        }
    };


    const navigateToProductViewPage = () => {
        router.push(`/view/${productId}`)
    }

    function addCommasToNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    function formatNumber(number) {
        const formattedInteger = addCommasToNumber(Math.floor(number));
        return `Ksh ${formattedInteger}`;
    }

    return(
        <div className='col-lg-2 col-md-3 col-sm-4 col-6 categories-product-container'>
            <div className="card">
                <Image
                    onClick={navigateToProductViewPage}
                    style={{cursor: "pointer"}}
                    src={`https://monza.co.ke/img/products/${images[0]?.filename}`}
                    alt={productName}
                    height="200"
                    width="200"/>
                <div className='card-body products-description'>
                    <h3 onClick={navigateToProductViewPage} className='product-header'>{productName}</h3>
                    <div className="d-flex justify-content-between">
                        <div className='text-center'>{formatNumber(price)}</div>
                        <FontAwesomeIcon onClick={handleCartToggle} icon={faShoppingCart} className={isItemInCart?'icon-color icons':'icons'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
