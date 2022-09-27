import {useState} from "react";
import Slideshow from "../components/elements/Slideshow";
import {faTableCellsLarge} from "@fortawesome/free-solid-svg-icons/faTableCellsLarge";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {faCodeCompare} from "@fortawesome/free-solid-svg-icons";
import Description from "../components/elements/Description";
import AdditionalInfo from "../components/elements/AdditionalInfo";
import Reviews from "../components/elements/Reviews";
import ProductsSlideshow from "../components/elements/ProductsSlideshow";


function Product() {
const [active, setActive]=useState('first card')
const [activeTagD, setActiveTagD]=useState(true)
const [activeTagA, setActiveTagA]=useState(false)
const [activeTagR, setActiveTagR]=useState(false)

function activeLinks(a,b,c) {
    a(true)
    b(false)
    c(false)
}

    let number= 0;
    let y = 1;

function addition() {
    number+=y
}


    return(
        <div className='product-view-container row mt-5'>
            <div className='col-1'></div>
            <div className='product-img d-flex col-6'>
                <div className='slideshow-container'>
                    <div>
                        <img src="./images/product-view-page/iphone11-front.png" alt="iphone 11" className='slide-img'/>
                    </div>
                    <div>
                        <img src="./images/product-view-page/iphone-11-backside.png" alt="iphone 11" className='slide-img'/>
                    </div>
                    <div>
                        <img src="./images/product-view-page/iphone-11-cameraside.png" alt="iphone 11" className='slide-img'/>
                    </div>
                    <div>
                        <img src="./images/product-view-page/iphone11-frontandbackside.png" alt="iphone 11" className='slide-img'/>
                    </div>
                    <div>
                        <img src="./images/product-view-page/iphone11-sideshow.png" alt="iphone 11" className='slide-img'/>
                    </div>
                </div>
                <Slideshow/>
                <div className='product-size me-5'>
                    <h3>64GB</h3>
                    <h3>128GB</h3>
                </div>
            </div>
            <div className='product-description col-5'>
                <div className='d-flex justify-content-between'>
                    <div><h4><span className='me-2'>Home   /  </span>  <span className='me-2'>iphone   /</span> iphone 11</h4></div>
                    <div className='me-5'><FontAwesomeIcon icon={faTableCellsLarge} aria-hidden='2 row and 2 coloumns' className='icons'/></div>
                </div>
                <div className="header-container">
                     <h1 className='mt-3'>iPhone 11</h1>
                     <h1 className='mt-3 price'>Ksh 72,000</h1>
                    <h5 className='mt-3 mb-4'>Key Features:</h5>
                    <ul>
                        <li>11.94 cm (4.7”) Retina HD</li>
                        <li>128GB ROM | iOS 15</li>
                        <li>Apple, A15 Bionic Chip, Hexa Core</li>
                        <li>12MP Rear camera | 7MP Front Camera</li>
                        <li>Built-in Rechargeable Lithium‑ion Battery</li>
                        <li>Touch ID Fingerprint Sensor | Barometer | Three‑axis Gyro | Accelerometer | Proximity Sensor | Ambient Light Sensor</li>
                    </ul>
                    <div className='d-flex mt-4'><h6 className='me-4'>Capacity: </h6> <h6 className='me-2'>64GB</h6> <h6 className='me-2'><span>128GB</span></h6></div>
                    <div className='d-flex mt-4 align-items-center'>
                        <h6 className='me-4'>Color:</h6>
                        <div className='div-colors red me-2'></div>
                        <div className='div-colors yellow me-2'></div>
                        <div className='div-colors blue me-2'></div>
                        <div className='div-colors green me-2'></div>
                        <div className='div-colors purple me-2'></div>
                    </div>
                    <div className='mt-4 d-flex'>
                        <div className="no-items">
                            <div className="minus text-black-50">
                                <FontAwesomeIcon icon={faMinus} aria-hidden='minus' className='icon-symbols'/>
                            </div>
                            <div className='text-black-50'>
                                <p1 className="icon-no">0</p1>
                            </div>
                            <div className="add text-black-50" >
                                <FontAwesomeIcon icon={faPlus} aria-hidden='plus' className='icon-symbols'/>
                            </div>
                        </div>
                        <button className="btn btn-primary me-2" type="submit">ADD TO CART</button>
                        <button type="button" className="btn btn-success">ORDER ON WHATSAPP</button>
                    </div>
                    <div className='d-flex mt-4'>
                        <p className='me-3'><FontAwesomeIcon icon={faCodeCompare} aria-hidden='compare icon' className='me-1' />Compare</p>
                        <p><FontAwesomeIcon icon={faHeart} className='me-1'/>Add to Wishlist</p>
                    </div>
                    <hr className='description-hr'/>
                    <div>
                        <h6 className='mb-3'>SKU:<span>     iphone-11</span></h6>
                        <h6 className='mb-3'>Category:<span>     iPhone</span></h6>
                        <h6 className='mb-3'>Tags:<span>     iPhone 11, iPhones</span></h6>
                        <h6 className='mb-3'>Share:<span>     iphone-11</span></h6>
                    </div>
                </div>
            </div>
            <hr className='mt-5'/>
            <div>
            <div className='d-flex justify-content-center mt-3'>
                <div>
                    <a onClick={()=>{setActive('first card');activeLinks(setActiveTagD,setActiveTagR,setActiveTagA)}} className={`${activeTagD?'borderr-bottom':''} me-5 quick-links`}>DESCRIPTION</a>
                </div>
                <div>
                    <a onClick={()=>{setActive('second card');activeLinks(setActiveTagA,setActiveTagR,setActiveTagD)}} className={`${activeTagA ? 'borderr-bottom':''} me-5 quick-links`}>ADDITIONAL INFORMATION</a>
                </div>
                <div>
                    <a onClick={()=>{setActive('third card');activeLinks(setActiveTagR,setActiveTagD,setActiveTagA)}} className={`${activeTagR ? 'borderr-bottom':''} me-5 quick-links`}>REVIEWS (0)</a>
                </div>
            </div>
                {active === 'first card' && <Description/>}
                {active === 'second card' && <AdditionalInfo/>}
                {active === 'third card' && <Reviews/>}
            </div>
            <hr className='mt-5'/>
            <div className='related-container'>
                <div className='ms-5'>
                    <h2>RELATED PRODUCTS</h2>
                    <div className='borderr-bottom'></div>
                </div>
                <div className='mt-4'>
                    <ProductsSlideshow/>
                </div>
            </div>
        </div>
    )
}

export default Product