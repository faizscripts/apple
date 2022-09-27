import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMultiply} from "@fortawesome/free-solid-svg-icons";
import gadgets from '../public/images/categories/accessories-page-title.jpg'

function WishList() {
    return (
        <div className='wishlist-container'>
            <div className='container-fluid img-background' style={{backgroundImage: `url('${gadgets.src}')`}}>
                <div className='secondary-container'>
                    <h1>Wishlist</h1>
                    <div>
                        <h2> HOME  <span className='mx-2'>/</span>  WISHLIST</h2>
                    </div>
                </div>
            </div>

            <div className='main-container container mt-4'>
               <h3>YOUR PRODUCT WISHLIST</h3>
                <hr/>

                <div className='compact-container'>
                    <div className='d-flex mt-5'>
                    <div style={{marginTop:'29px'}}>
                        <h5>128GB</h5>
                        <h5>256GB</h5>
                        <h5>512GB</h5>
                        <h5>1TB</h5>
                    </div>
                    <div className='products-container'>
                        <div className='remove-button'><FontAwesomeIcon icon={faMultiply} aria-hidden='multiply'/>  Remove</div>
                        <img src="./images/products/iphone/iphone-13-pro-max1.png" alt="" className='product-image'/>
                        <div className='d-flex justify-content-center mt-2'>
                            <div className='div-colors red me-2'></div>
                            <div className='div-colors yellow me-2'></div>
                            <div className='div-colors blue me-2'></div>
                            <div className='div-colors green me-2'></div>
                            <div className='div-colors purple me-2'></div>
                        </div>
                        <div className='d-flex justify-content-center products-description'>
                            <div><h3 className='product-header mt-2'>iPhone 13 Pro Max</h3></div>
                            <div><span className='product-name mt-2'>iPhone</span></div>
                            <div><p className='price mt-2'>KSh153,000</p></div>
                        </div>
                    </div>
                </div>

                    <div className='d-flex mt-5'>
                        <div style={{marginTop:'29px'}}>
                            <h5>128GB</h5>
                            <h5>256GB</h5>
                            <h5>512GB</h5>
                            <h5>1TB</h5>
                        </div>
                        <div className='products-container'>
                            <div className='remove-button'><FontAwesomeIcon icon={faMultiply} aria-hidden='multiply'/>  Remove</div>
                            <img src="./images/products/iphone/iphone-13-pro-alpine-green.png" alt="" className='product-image'/>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className='div-colors red me-2'></div>
                                <div className='div-colors yellow me-2'></div>
                                <div className='div-colors blue me-2'></div>
                                <div className='div-colors green me-2'></div>
                                <div className='div-colors purple me-2'></div>
                            </div>
                            <div className='d-flex justify-content-center products-description'>
                                <div><h3 className='product-header mt-2'>iPhone 13 Pro</h3></div>
                                <div><span className='product-name mt-2'>iPhone</span></div>
                                <div><p className='price mt-2'>KSh140,500 – KSh151,000</p></div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div style={{marginTop:'29px'}}>
                            <h5>128GB</h5>
                            <h5>256GB</h5>
                            <h5>512GB</h5>
                        </div>
                        <div className='products-container'>
                            <div className='remove-button'><FontAwesomeIcon icon={faMultiply} aria-hidden='multiply'/>  Remove</div>
                            <img src="./images/products/iphone/iphone-13-mini1.png" alt="" className='product-image'/>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className='div-colors red me-2'></div>
                                <div className='div-colors yellow me-2'></div>
                                <div className='div-colors blue me-2'></div>
                                <div className='div-colors green me-2'></div>
                                <div className='div-colors purple me-2'></div>
                            </div>
                            <div className='d-flex justify-content-center products-description'>
                                <div><h3 className='product-header mt-2'>iPhone 13 Mini</h3></div>
                                <div><span className='product-name mt-2'>iPhone</span></div>
                                <div><p className='price mt-2'>KSh102,000 – KSh110,000</p></div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div style={{marginTop:'29px'}}>
                            <h5>64GB</h5>
                            <h5>128GB</h5>
                        </div>
                        <div className='products-container'>
                            <div className='remove-button'><FontAwesomeIcon icon={faMultiply} aria-hidden='multiply'/>  Remove</div>
                            <img src="./images/products/iphone/iphone-13-dual.jpg.png" alt="" className='product-image'/>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className='div-colors red me-2'></div>
                                <div className='div-colors yellow me-2'></div>
                                <div className='div-colors blue me-2'></div>
                                <div className='div-colors green me-2'></div>
                                <div className='div-colors purple me-2'></div>
                            </div>
                            <div className='d-flex justify-content-center products-description'>
                                <div><h3 className='product-header mt-2'>iPhone 13 Dual</h3></div>
                                <div><span className='product-name mt-2'>iPhone</span></div>
                                <div><p className='price mt-2'>KSh108,000</p></div>
                            </div>
                        </div>
                    </div>

                    <div className='d-flex mt-5'>
                        <div style={{marginTop:'29px'}}>
                            <h5>64GB</h5>
                            <h5>128GB</h5>
                        </div>
                        <div className='products-container'>
                            <div className='remove-button'><FontAwesomeIcon icon={faMultiply} aria-hidden='multiply'/>  Remove</div>
                            <img src="./images/products/iphone/iphone-12-black-64gb.png" alt="" className='product-image'/>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className='div-colors red me-2'></div>
                                <div className='div-colors yellow me-2'></div>
                                <div className='div-colors blue me-2'></div>
                                <div className='div-colors green me-2'></div>
                                <div className='div-colors purple me-2'></div>
                            </div>
                            <div className='d-flex justify-content-center products-description'>
                                <div><h3 className='product-header mt-2'>iPhone 12</h3></div>
                                <div><span className='product-name mt-2'>iPhone</span></div>
                                <div><p className='price mt-2'>KSh94,000 – KSh98,000</p></div>
                            </div>
                        </div>
                    </div>
            </div>

            </div>
        </div>
    )
}

export default WishList