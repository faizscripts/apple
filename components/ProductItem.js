import {useState} from "react";
import { useRouter } from 'next/router';
import Image from 'next/image';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons/faShoppingCart";

function ProductItem({productId, images, price, productName}) {
    const [cartColor,setCartColor]=useState(false)
    const router = useRouter();

    const navigateToProductViewPage = () => {
      router.push(`/view/${productId}`)
    }

    return(
        <div className='col-2 d-flex mt-4'>
            <div>
                <Image
                    onClick={navigateToProductViewPage}
                    style={{cursor: "pointer"}}
                    src={`/images/products/${images[0]?.filename}`}
                    alt={productName}
                    height="250"
                    width="250"/>
                <div className='products-description'>
                    <h3 onClick={navigateToProductViewPage} className='product-header'>{productName}</h3>
                    <div className="d-flex justify-content-evenly">
                        <div className='text-center'>Ksh {price}</div>
                        <FontAwesomeIcon onClick={() => setCartColor(!cartColor)} icon={faShoppingCart} className={cartColor?'icon-color icons':'icons'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
