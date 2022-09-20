import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import {faTableCells} from "@fortawesome/free-solid-svg-icons";
import gadgets from '../public/images/categories/accessories-page-title.jpg'

function iphone() {
    return (
        <div className='categories-container'>
            <div className='container-fluid img-background' style={{backgroundImage: `url('${gadgets.src}')`}}>
                <div className='secondary-container'>
                    <h1><FontAwesomeIcon icon={faArrowLeft} aria-hidden='arrow-left' className='arrow-left'/> IPHONE
                    </h1>
                    <div className='d-flex container categories-list d-flex justify-content-center'>
                        <div className='cards mx-4'>
                            <h2>MACBOOK</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>IPAD</h2>
                            <p>0 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>IPHONE</h2>
                            <p>9 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>WATCH</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>AIRPODS</h2>
                            <p>4 PRODUCTS</p>
                        </div>
                        <div className='cards mx-4'>
                            <h2>ACCESSORIES</h2>
                            <p>2 PRODUCTS</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='main-container row'>
                <div className='col-1'></div>
                <div className='filter-container col-3'>
                    <div>
                        <h3 className='my-3'>FILTER BY PRICE</h3>
                        <form>
                            <input type="range" className="form-range" id="customRange1"/>
                            <br/>
                            <label htmlFor="customRange1" className="form-label"> <span>Price:</span> Ksh20,000 -
                                Ksh100,000</label>
                            <br/>
                            <button type="button" className="btn btn-light">Filter</button>
                        </form>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='my-3'>STOCK STATUS</h3>
                        <form>
                            <input type="checkbox" name="" id="on-sale" for='on-sale' placeholder='on sale'/>
                            <label htmlFor="on-sale" className='ms-2'>on sale</label>
                            <br/>
                            <input type="checkbox" name="" id="on-sale" htmlFor='in-site' placeholder='in site'/>
                            <label htmlFor="in-site" className='ms-2'>in site</label>
                        </form>
                    </div>
                    <hr/>
                    <div>
                        <h3 className='my-3'>TOP RATED PRODUCTS</h3>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/airpod-pros.jpg.webp" alt="airpods pro"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>Airpods pro</h4>
                                <p className='price'>Ksh 23,000</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/iphone-13-dual.jpg.png" alt="iphone 13"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>iphone 13 dual</h4>
                                <p className='price'>Ksh 118,000</p>
                            </div>
                        </div>
                        <hr/>
                        <div className='d-flex'>
                            <div>
                                <img src="./images/products/series-7-midnight-leather.jpg.webp" alt="airpods pro"
                                     className='top-rated-img'/>
                            </div>
                            <div className='mx-3'>
                                <h4>Series 7 midnight leather</h4>
                                <p className='price'>Ksh 23,000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='products-container col-8'>
                    <div className='d-flex justify-content-between mt-3'>
                    <h3 className='header-products'><span>Home</span> / iPhone</h3>
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='me-5'>
                            <h3 className='header-products'>Show :<span> 9 /</span><span> 12 / </span><span>18 / </span><span>24</span> </h3>
                        </div>
                        <div className='me-5'>
                            <FontAwesomeIcon icon={faTableCellsLarge} aria-hidden='2 row and 2 coloumns' className='icons'/>
                            <FontAwesomeIcon icon={faTableCells} aria-hidden='3 row and 3 coloumns' className='icons'/>
                        </div>
                        <div className="dropdown me-5">
                            <div className="dropdown-toggle dropdown-div" type="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                               Default Sorting
                            </div>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                    </div>
                    <div className='mt-5 compact-container'>
                        <div className='d-flex mt-4'>
                            <div>
                                <h5>64GB</h5>
                                <h5>128GB</h5>
                            </div>
                        <div className='products-container'>
                            <img src="./images/products/iphone-13-256gb.png" alt="" className='product-image'/>
                            <div className='d-flex justify-content-center mt-2'>
                                <div className='div-colors red me-2'></div>
                                <div className='div-colors yellow me-2'></div>
                                <div className='div-colors blue me-2'></div>
                                <div className='div-colors green me-2'></div>
                                <div className='div-colors purple me-2'></div>
                            </div>
                            <div className='d-flex justify-content-center products-description'>
                                <div><h3 className='product-header mt-2'>iPhone 13</h3></div>
                                <div><span className='product-name mt-2'>iPhone</span></div>
                                <div><p className='price mt-2'>Ksh 118,000</p></div>
                            </div>
                        </div>
                        </div>

                        <div className='d-flex mt-4'>
                            <div>
                                <h5>128GB</h5>
                                <h5>256GB</h5>
                                <h5>512GB</h5>
                                <h5>1TB</h5>
                            </div>
                            <div className='products-container'>
                                <img src="./images/products/iphone-13-pro-max1.png" alt="" className='product-image'/>
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
                                    <div><p className='price mt-2'>KSh153,000 – KSh210,000</p></div>
                                </div>
                            </div>
                        </div>

                        <div className='d-flex mt-4'>
                            <div>
                                <h5>128GB</h5>
                                <h5>256GB</h5>
                                <h5>512GB</h5>
                                <h5>1TB</h5>
                            </div>
                            <div className='products-container'>
                                <img src="./images/products/iphone-13-pro-alpine-green.png" alt="" className='product-image'/>
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

                        <div className='d-flex mt-4'>
                            <div>
                                <h5>128GB</h5>
                                <h5>256GB</h5>
                                <h5>512GB</h5>
                            </div>
                            <div className='products-container'>
                                <img src="./images/products/iphone-13-mini1.png" alt="" className='product-image'/>
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

                        <div className='d-flex mt-4'>
                            <div>
                                <h5>64GB</h5>
                                <h5>128GB</h5>
                            </div>
                            <div className='products-container'>
                                <img src="./images/products/iphone-13-dual.jpg.png" alt="" className='product-image'/>
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

                        <div className='d-flex mt-4'>
                            <div>
                                <h5>64GB</h5>
                                <h5>128GB</h5>
                            </div>
                            <div className='products-container'>
                                <img src="./images/products/iphone-12-black-64gb.png" alt="" className='product-image'/>
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
        </div>
    )
}

export default iphone

