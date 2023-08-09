import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons/faTrash";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";
import UserLayout from "../layout/UserLayout";

function Cart() {
    return(
        <div className='cart-container mt-4'>
            <div className='added-products mx-5'>
                <h1>Cart (2)</h1>
                <hr/>
                <div>
                <div className='d-flex justify-content-between'>
                    <div className='d-flex'>
                        <img src="./images/product-view-page/iphone11-frontandbackside.png" alt=""/>
                        <div>
                            <p>iPhone 11, 11.94 cm (4.7”) Retina HD, 128GB ROM | iOS 15, 12MP Rear camera</p>
                            <span>In stock</span>
                        </div>
                    </div>
                    <h2 className='me-2'>KSh 72,000</h2>
                </div>
                <div className='d-flex justify-content-between'>
                    <p className='delete ms-2 mt-1'><FontAwesomeIcon icon={faTrash}/> REMOVE</p>
                    <div className="no-items me-2">
                        <div className="minus text-black-50">
                            <FontAwesomeIcon icon={faMinus} className='icon-symbols'/>
                        </div>
                        <div className='text-black-50'>
                            <p1 className="icon-no">0</p1>
                        </div>
                        <div className="add text-black-50" >
                            <FontAwesomeIcon icon={faPlus} className='icon-symbols'/>
                        </div>
                    </div>
                </div>
            </div>
                <hr/>
                <div>
                    <div className='d-flex justify-content-between'>
                        <div className='d-flex'>
                            <img src="./images/product-view-page/iphone11-frontandbackside.png" alt=""/>
                            <div>
                                <p>iPhone 11, 11.94 cm (4.7”) Retina HD, 128GB ROM | iOS 15, 12MP Rear camera</p>
                                <span>In stock</span>
                            </div>
                        </div>
                        <h2 className='me-2'>KSh 72,000</h2>
                    </div>
                    <div className='d-flex justify-content-between'>
                        <p className='delete ms-2 mt-1'><FontAwesomeIcon icon={faTrash}/> REMOVE</p>
                        <div className="no-items me-2">
                            <div className="minus text-black-50">
                                <FontAwesomeIcon icon={faMinus} className='icon-symbols'/>
                            </div>
                            <div className='text-black-50'>
                                <p1 className="icon-no">0</p1>
                            </div>
                            <div className="add text-black-50" >
                                <FontAwesomeIcon icon={faPlus} className='icon-symbols'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='total-container'>
              <h1>CART SUMMARY</h1>
                <hr/>
                <div className='d-flex justify-content-between align-items-center mx-2'>
                    <p className='total-header'>Subtotal</p>
                    <h1>Ksh 144,000</h1>
                </div>
                <hr/>
                <button type="button" className="btn btn-warning">CHECKOUT (KSH 144,000)</button>
            </div>
        </div>
    )
}

Cart.pageLayout = UserLayout

export default Cart
